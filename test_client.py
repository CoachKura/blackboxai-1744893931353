import requests
import json
from datetime import datetime

# Test data matching the screenshot format
test_data = {
    "name": "Time Chart",
    "gender": "Male",
    "date": "2025-04-18",
    "time": "08:42:37",
    "place": "Chennai, Chrompet",
    "latitude": 12.95250,
    "longitude": 80.13333,
    "timezone": "Asia/Kolkata",
    "language": "ta",  # Request Tamil output
    "marriage_date": None  # Optional for birth time rectification
}

def test_kp_calculation():
    url = "http://localhost:8000/calculate"
    
    try:
        response = requests.post(url, json=test_data)
        
        if response.status_code == 200:
            result = response.json()
            
            # Pretty print the result
            print("\nKP Astrology Calculation Results:")
            print("=" * 50)
            print(f"Name: {result['birth_details']['name']}")
            print(f"Date & Time: {result['birth_details']['date']} {result['birth_details']['time']}")
            print(f"Place: {result['birth_details']['place']}")
            print(f"Ayanamsa: {result['ayanamsa']}")
            
            print("\nPlanetary Positions:")
            print("-" * 50)
            for planet, data in result['planetary_positions'].items():
                print(f"{planet}:")
                print(f"  Position: {data['degrees']}")
                print(f"  Nakshatra: {data['nakshatra']} (Pada {data['pada']})")
                print(f"  Star Lord: {data['star_lord']}")
                print(f"  Sub Lord: {data['sub_lord']}")
                print(f"  Sub-Sub Lord: {data['sub_sub_lord']}")
                print(f"  Sub-Sub-Sub Lord: {data['sub_sub_sub_lord']}")
                if 'significator' in data and data['significator']:
                    print(f"  Significator for: {', '.join(data['significator'])}")
                print()
            
            print("\nRuling Planets:")
            print("-" * 50)
            print(f"Day Lord: {result['ruling_planets']['day_lord']}")
            print(f"Hora Lord: {result['ruling_planets']['hora_lord']}")
            print(f"Ruling Combination: {result['ruling_planets']['ruling_planets']}")
            
            print("\nDasa Bhukti:")
            print("-" * 50)
            print(f"Current Dasa: {result['dasa_bhukti']['current_dasa']}")
            print(f"Current Bhukti: {result['dasa_bhukti']['current_bhukti']}")
            print(f"Balance: {result['dasa_bhukti']['balance']}")
            
        else:
            print(f"Error: {response.status_code}")
            print(response.text)
            
    except Exception as e:
        print(f"Error making request: {str(e)}")

if __name__ == "__main__":
    test_kp_calculation()
