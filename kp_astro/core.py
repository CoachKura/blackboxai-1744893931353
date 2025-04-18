import swisseph as swe
from datetime import datetime
from typing import Dict, List, Tuple
import math
from .rectification import BirthTimeRectifier

class KPAstrology:
    # KP Ayanamsa value for 2025
    KP_AYANAMSA_2025 = 24.19888889  # 24° 11' 56"
    
    # Planet constants
    PLANETS = {
        'Sun': swe.SUN,
        'Moon': swe.MOON,
        'Mars': swe.MARS,
        'Mercury': swe.MERCURY,
        'Jupiter': swe.JUPITER,
        'Venus': swe.VENUS,
        'Saturn': swe.SATURN,
        'Rahu': swe.MEAN_NODE,  # Using mean node for Rahu
        'Ketu': -1  # Will be calculated as Rahu + 180°
    }

    # Nakshatras and their lords (27 nakshatras)
    NAKSHATRAS = [
        ('Ashwini', 'Ketu'), ('Bharani', 'Venus'), ('Krittika', 'Sun'),
        ('Rohini', 'Moon'), ('Mrigashira', 'Mars'), ('Ardra', 'Rahu'),
        ('Punarvasu', 'Jupiter'), ('Pushya', 'Saturn'), ('Ashlesha', 'Mercury'),
        ('Magha', 'Ketu'), ('Purva Phalguni', 'Venus'), ('Uttara Phalguni', 'Sun'),
        ('Hasta', 'Moon'), ('Chitra', 'Mars'), ('Swati', 'Rahu'),
        ('Vishakha', 'Jupiter'), ('Anuradha', 'Saturn'), ('Jyeshtha', 'Mercury'),
        ('Mula', 'Ketu'), ('Purva Ashadha', 'Venus'), ('Uttara Ashadha', 'Sun'),
        ('Shravana', 'Moon'), ('Dhanishta', 'Mars'), ('Shatabhisha', 'Rahu'),
        ('Purva Bhadrapada', 'Jupiter'), ('Uttara Bhadrapada', 'Saturn'), ('Revati', 'Mercury')
    ]

    # Vimshottari Dasa periods (in years)
    DASA_PERIODS = {
        'Ketu': 7, 'Venus': 20, 'Sun': 6, 'Moon': 10, 'Mars': 7,
        'Rahu': 18, 'Jupiter': 16, 'Saturn': 19, 'Mercury': 17
    }

    def __init__(self):
        swe.set_ephe_path('/usr/share/ephe')  # Set path to ephemeris files
        swe.set_sid_mode(swe.SIDM_LAHIRI)  # Using Lahiri ayanamsa as base
        self.rectifier = BirthTimeRectifier()

    def calculate_planet_position(self, date: datetime, lat: float, lon: float) -> Dict:
        """Calculate detailed planetary positions including SSL and SSSL"""
        julian_day = swe.julday(date.year, date.month, date.day,
                              date.hour + date.minute/60.0 + date.second/3600.0)
        
        positions = {}
        for planet_name, planet_id in self.PLANETS.items():
            if planet_id == -1:  # Ketu
                rahu_pos = positions['Rahu']['longitude']
                ketu_pos = (rahu_pos + 180) % 360
                positions['Ketu'] = self._calculate_lords(ketu_pos)
            else:
                flags = swe.FLG_SWIEPH | swe.FLG_SPEED
                planet_info = swe.calc_ut(julian_day, planet_id, flags)
                longitude = (planet_info[0][0] - self.KP_AYANAMSA_2025) % 360
                positions[planet_name] = self._calculate_lords(longitude)
                
                # Add KP house position
                positions[planet_name]['house'] = self._get_house_number(longitude)
                
                # Add significator status
                positions[planet_name]['significator'] = self._check_significator(
                    planet_name, longitude, positions
                )

        return positions

    def _calculate_lords(self, longitude: float) -> Dict:
        """Calculate star lord, sub lord, sub-sub lord, and sub-sub-sub lord"""
        # Each nakshatra is 13°20' (13.3333... degrees)
        nakshatra_deg = 13 + 1/3
        
        # Calculate nakshatra and pada
        nakshatra_idx = int(longitude / nakshatra_deg)
        pada = int((longitude % nakshatra_deg) / (nakshatra_deg / 4)) + 1
        nakshatra = self.NAKSHATRAS[nakshatra_idx][0]
        star_lord = 'R' + self.NAKSHATRAS[nakshatra_idx][1]  # Add 'R' prefix
        
        # Calculate sub-divisions for sub-lord
        remainder = longitude % nakshatra_deg
        sub_division = remainder * 9 / nakshatra_deg
        sub_lord = 'R' + self.NAKSHATRAS[int(sub_division)][1]  # Add 'R' prefix
        
        # Calculate sub-sub-lord
        sub_remainder = (sub_division - int(sub_division)) * nakshatra_deg
        sub_sub_division = sub_remainder * 9 / nakshatra_deg
        sub_sub_lord = 'R' + self.NAKSHATRAS[int(sub_sub_division)][1]  # Add 'R' prefix
        
        # Calculate sub-sub-sub-lord (SSSL)
        sub_sub_remainder = (sub_sub_division - int(sub_sub_division)) * nakshatra_deg
        sub_sub_sub_division = sub_sub_remainder * 9 / nakshatra_deg
        sub_sub_sub_lord = 'R' + self.NAKSHATRAS[int(sub_sub_sub_division)][1]  # Add 'R' prefix

        return {
            'longitude': longitude,
            'degrees': f"{int(longitude)}°{int((longitude % 1) * 60)}'{int((((longitude % 1) * 60) % 1) * 60)}\"",
            'nakshatra': nakshatra,
            'pada': pada,
            'star_lord': star_lord,
            'sub_lord': sub_lord,
            'sub_sub_lord': sub_sub_lord,
            'sub_sub_sub_lord': sub_sub_sub_lord
        }

    def calculate_ruling_planets(self, date: datetime) -> Dict:
        """Calculate current ruling planets (Ve-Ma-Ra-Ra format)"""
        # Day lord calculation
        day_of_week = date.weekday()
        day_lords = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']
        day_lord = day_lords[day_of_week]
        
        # Calculate hora lord
        hour_of_day = date.hour + date.minute/60.0
        hora_num = int(hour_of_day / 2)
        hora_lords = day_lords[day_of_week:] + day_lords[:day_of_week]
        hora_lord = hora_lords[hora_num % 7]

        return {
            'day_lord': day_lord,
            'hora_lord': hora_lord,
            'ruling_planets': self._get_ruling_combination(day_lord, hora_lord)
        }

    def calculate_dasa_bhukti(self, birth_date: datetime, current_date: datetime) -> Dict:
        """Calculate current dasa, bhukti, and antara"""
        moon_pos = self._get_moon_position(birth_date)
        nakshatra_idx = int(moon_pos / (13 + 1/3))
        
        # Calculate dasa balance
        remainder = moon_pos % (13 + 1/3)
        balance = 1 - (remainder / (13 + 1/3))
        
        # Get initial dasa lord
        initial_lord = self.NAKSHATRAS[nakshatra_idx][1]
        years = self.DASA_PERIODS[initial_lord] * balance
        
        # Calculate current period
        days_elapsed = (current_date - birth_date).days
        years_elapsed = days_elapsed / 365.25
        
        current_dasa, dasa_balance = self._get_current_dasa(years_elapsed)
        current_bhukti = self._get_current_bhukti(years_elapsed, current_dasa)
        
        return {
            'current_dasa': current_dasa,
            'current_bhukti': current_bhukti,
            'balance': f"{int(dasa_balance)}Y {int((dasa_balance % 1) * 12)}M {int((((dasa_balance % 1) * 12) % 1) * 30)}D"
        }

    def calculate_ayanamsa(self, date: datetime) -> float:
        """Calculate KP ayanamsa for given date"""
        julian_day = swe.julday(date.year, date.month, date.day,
                              date.hour + date.minute/60.0)
        return swe.get_ayanamsa_ut(julian_day)

    def rectify_birth_time(self, birth_dt: datetime, lat: float, lon: float,
                          marriage_date: datetime = None, events: list = None) -> Dict:
        """Rectify birth time using marriage date and life events"""
        return self.rectifier.rectify_birth_time(birth_dt, lat, lon, marriage_date, events)

    def _get_house_number(self, longitude: float) -> int:
        """Get KP house number for given longitude"""
        return int(longitude / 30) + 1

    def _check_significator(self, planet: str, longitude: float, positions: Dict) -> List[str]:
        """Check if planet is a significator for any house"""
        significators = []
        house_num = self._get_house_number(longitude)
        
        # Add natural significator status
        if planet in ['Jupiter', 'Venus'] and house_num in [1, 5, 9]:
            significators.append('Trine Lord')
        elif planet in ['Sun', 'Moon'] and house_num in [1, 10]:
            significators.append('Authority')
            
        return significators

    def _get_ruling_combination(self, day_lord: str, hora_lord: str) -> str:
        """Get ruling planet combination in Ve-Ma-Ra-Ra format"""
        return f"{day_lord[:2]}-{hora_lord[:2]}"

    def _get_moon_position(self, date: datetime) -> float:
        """Get Moon's position for dasa calculations"""
        julian_day = swe.julday(date.year, date.month, date.day,
                              date.hour + date.minute/60.0)
        moon_pos = swe.calc_ut(julian_day, swe.MOON, swe.FLG_SWIEPH)[0][0]
        return (moon_pos - self.KP_AYANAMSA_2025) % 360

    def _get_current_dasa(self, years_elapsed: float) -> Tuple[str, float]:
        """Get current dasa lord and balance"""
        total = 0
        for lord, period in self.DASA_PERIODS.items():
            if total + period > years_elapsed:
                balance = period - (years_elapsed - total)
                return lord, balance
            total += period
        return list(self.DASA_PERIODS.keys())[0], 0

    def _get_current_bhukti(self, years_elapsed: float, dasa_lord: str) -> str:
        """Get current bhukti lord"""
        # Simplified - would need actual bhukti calculation
        return self.NAKSHATRAS[0][1]  # Placeholder
