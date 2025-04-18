from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from datetime import datetime
from pydantic import BaseModel
from typing import Optional, List, Dict
from .core import KPAstrology
from .translations import TamilTranslator
import requests
import json
from functools import lru_cache

app = FastAPI(title="KP Astrology Backend")

# Mount static files
app.mount("/static", StaticFiles(directory="."), name="static")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize KP Astrology engine
kp_engine = KPAstrology()

class Location(BaseModel):
    area: str
    city: str
    district: str
    state: str
    country: str = "India"

class BirthData(BaseModel):
    name: str
    gender: str
    date: str  # YYYY-MM-DD
    time: str  # HH:MM:SS
    location: Location
    timezone: Optional[str] = "Asia/Kolkata"
    language: Optional[str] = "en"  # 'en' or 'ta'
    marriage_date: Optional[str] = None

@lru_cache(maxsize=1000)
def get_coordinates(location: Location) -> tuple:
    """Get latitude and longitude from location using geocoding."""
    try:
        # Format the address string
        address = f"{location.area}, {location.city}, {location.district}, {location.state}, {location.country}"
        
        # Use Nominatim geocoding service
        url = f"https://nominatim.openstreetmap.org/search?q={address}&format=json&limit=1"
        headers = {'User-Agent': 'KP-Astrology-Calculator/1.0'}
        
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        data = response.json()
        if data:
            return float(data[0]['lat']), float(data[0]['lon'])
        else:
            # Fallback to default coordinates for major cities if geocoding fails
            city_coords = {
                "Chennai": (13.0827, 80.2707),
                "Mumbai": (19.0760, 72.8777),
                "Delhi": (28.6139, 77.2090),
                # Add more cities as needed
            }
            if location.city in city_coords:
                return city_coords[location.city]
            raise ValueError(f"Could not find coordinates for address: {address}")
            
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Error getting coordinates for location: {str(e)}"
        )

@app.post("/calculate")
async def calculate_chart(data: BirthData):
    try:
        # Get coordinates from location
        latitude, longitude = get_coordinates(data.location)
        
        # Parse date and time
        try:
            # Add seconds to the time if not provided
            time_str = data.time if data.time.count(':') == 2 else f"{data.time}:00"
            
            birth_dt = datetime.strptime(f"{data.date} {time_str}", "%Y-%m-%d %H:%M:%S")
        except ValueError as e:
            raise HTTPException(status_code=400, detail=f"Invalid date or time format: {str(e)}")
        
        # Calculate chart details
        positions = kp_engine.calculate_planet_position(birth_dt, latitude, longitude)
        ruling_planets = kp_engine.calculate_ruling_planets(birth_dt)
        dasa_bhukti = kp_engine.calculate_dasa_bhukti(birth_dt, datetime.now())
        ayanamsa = kp_engine.calculate_ayanamsa(birth_dt)
        
        # Birth time rectification if marriage date is provided
        birth_time_rect = None
        if data.marriage_date:
            marriage_dt = datetime.strptime(data.marriage_date, "%Y-%m-%d")
            birth_time_rect = kp_engine.rectify_birth_time(
                birth_dt, 
                latitude, 
                longitude, 
                marriage_dt
            )

        response = {
            "birth_details": {
                "name": data.name,
                "gender": data.gender,
                "date": data.date,
                "time": data.time,
                "location": {
                    "area": data.location.area,
                    "city": data.location.city,
                    "district": data.location.district,
                    "state": data.location.state,
                    "country": data.location.country,
                    "coordinates": {
                        "latitude": latitude,
                        "longitude": longitude
                    }
                },
                "timezone": data.timezone
            },
            "ayanamsa": f"{int(ayanamsa)}°{int((ayanamsa % 1) * 60)}'{int((((ayanamsa % 1) * 60) % 1) * 60)}\"",
            "ruling_planets": ruling_planets,
            "planetary_positions": positions,
            "dasa_bhukti": dasa_bhukti,
            "birth_time_rectification": birth_time_rect,
            "local_time_details": {
                "local_mean_time": birth_dt.strftime("%H:%M:%S"),
                "timezone_offset": birth_dt.strftime("%z")
            }
        }

        # Translate if Tamil is requested
        if data.language == "ta":
            response = TamilTranslator.translate_dict(response)

        return response

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "1.0.0",
        "ayanamsa": "KP-Newcomb"
    }

if __name__ == "__main__":
    uvicorn.run("kp_astro.main:app", host="0.0.0.0", port=8000, reload=True)
