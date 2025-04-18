from datetime import datetime, timedelta
import math

class BirthTimeRectifier:
    """Birth time rectification using KP system and life events"""
    
    def __init__(self):
        self.time_window = 2  # Hours to check before and after given birth time
        self.time_step = 1  # Minutes between each check
        
    def rectify_birth_time(self, birth_dt: datetime, lat: float, lon: float, 
                          marriage_date: datetime = None, events: list = None) -> dict:
        """
        Rectify birth time using marriage date and other life events
        Returns the most probable birth time within ±2 hours window
        """
        best_time = birth_dt
        best_score = 0
        results = []

        # Check times within the window
        for mins in range(-120, 121, self.time_step):
            test_time = birth_dt + timedelta(minutes=mins)
            score = self._evaluate_time(test_time, lat, lon, marriage_date, events)
            
            results.append({
                "time": test_time.strftime("%H:%M:%S"),
                "score": score,
                "difference_mins": mins
            })
            
            if score > best_score:
                best_score = score
                best_time = test_time

        # Sort results by score
        results.sort(key=lambda x: x["score"], reverse=True)
        
        return {
            "rectified_time": best_time.strftime("%H:%M:%S"),
            "original_time": birth_dt.strftime("%H:%M:%S"),
            "confidence_score": best_score,
            "difference_minutes": int((best_time - birth_dt).total_seconds() / 60),
            "top_matches": results[:5]  # Return top 5 possible times
        }

    def _evaluate_time(self, test_time: datetime, lat: float, lon: float,
                      marriage_date: datetime = None, events: list = None) -> float:
        """
        Evaluate how well a test time matches with known life events
        Returns a score between 0 and 1
        """
        score = 0.0
        
        if marriage_date:
            # Check if major periods align with marriage timing
            marriage_age = (marriage_date - test_time).days / 365.25
            dasa_score = self._check_dasa_alignment(test_time, marriage_age)
            score += dasa_score * 0.6  # 60% weight to dasa alignment
            
            # Check transit positions
            transit_score = self._check_transit_alignment(test_time, marriage_date)
            score += transit_score * 0.4  # 40% weight to transit alignment
            
        if events:
            # Additional scoring based on other life events
            # Implementation would go here
            pass
            
        return score

    def _check_dasa_alignment(self, birth_time: datetime, marriage_age: float) -> float:
        """
        Check if marriage age aligns with favorable dasa periods
        Returns a score between 0 and 1
        """
        # Simplified scoring - would need full dasa calculation
        # This is a placeholder implementation
        score = 0.5  # Base score
        
        # Example factors that would increase score:
        # - Venus/Jupiter dasa or bhukti during marriage
        # - Strong 7th house significators
        # - Favorable transit aspects
        
        return score

    def _check_transit_alignment(self, birth_time: datetime, event_time: datetime) -> float:
        """
        Check if transits during the event are favorable
        Returns a score between 0 and 1
        """
        # Simplified scoring - would need full transit calculation
        # This is a placeholder implementation
        score = 0.5  # Base score
        
        # Example factors that would increase score:
        # - Jupiter/Venus transiting key houses
        # - Favorable aspects to birth positions
        # - Strong significator transits
        
        return score

    def _calculate_house_cusps(self, birth_time: datetime, lat: float, lon: float) -> list:
        """
        Calculate Placidus house cusps for the given time and location
        Returns list of house cusp longitudes
        """
        # Placeholder - would need actual astronomical calculations
        cusps = []
        for i in range(12):
            # This is just a placeholder calculation
            cusp = (i * 30 + birth_time.hour) % 360
            cusps.append(cusp)
        return cusps
