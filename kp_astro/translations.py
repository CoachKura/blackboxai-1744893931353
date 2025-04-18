class TamilTranslator:
    TRANSLATIONS = {
        # Chart sections
        'Birth Details': 'பிறப்பு விவரங்கள்',
        'Planetary Positions': 'கிரக நிலைகள்',
        'Ruling Planets': 'அடிப்படை கிரகங்கள்',
        'Dasa Bhukti': 'தசா புக்தி',
        'Ayanamsa': 'அயனாம்சம்',

        # Birth details
        'Name': 'பெயர்',
        'Date': 'தேதி',
        'Time': 'நேரம்',
        'Place': 'இடம்',
        'Latitude': 'அட்சரேகை',
        'Longitude': 'தீர்க்கரேகை',
        'Timezone': 'நேர மண்டலம்',
        'Local Mean Time': 'சராசரி உள்ளூர் நேரம்',

        # Planets
        'Sun': 'சூரியன்',
        'Moon': 'சந்திரன்',
        'Mars': 'செவ்வாய்',
        'Mercury': 'புதன்',
        'Jupiter': 'குரு',
        'Venus': 'சுக்கிரன்',
        'Saturn': 'சனி',
        'Rahu': 'ராகு',
        'Ketu': 'கேது',

        # Nakshatras
        'Ashwini': 'அஸ்வினி',
        'Bharani': 'பரணி',
        'Krittika': 'கிருத்திகை',
        'Rohini': 'ரோகிணி',
        'Mrigashira': 'மிருகசீரிஷம்',
        'Ardra': 'திருவாதிரை',
        'Punarvasu': 'புனர்பூசம்',
        'Pushya': 'பூசம்',
        'Ashlesha': 'ஆயில்யம்',
        'Magha': 'மகம்',
        'Purva Phalguni': 'பூரம்',
        'Uttara Phalguni': 'உத்திரம்',
        'Hasta': 'ஹஸ்தம்',
        'Chitra': 'சித்திரை',
        'Swati': 'சுவாதி',
        'Vishakha': 'விசாகம்',
        'Anuradha': 'அனுஷம்',
        'Jyeshtha': 'கேட்டை',
        'Mula': 'மூலம்',
        'Purva Ashadha': 'பூராடம்',
        'Uttara Ashadha': 'உத்திராடம்',
        'Shravana': 'திருவோணம்',
        'Dhanishta': 'அவிட்டம்',
        'Shatabhisha': 'சதயம்',
        'Purva Bhadrapada': 'பூரட்டாதி',
        'Uttara Bhadrapada': 'உத்திரட்டாதி',
        'Revati': 'ரேவதி',

        # Lords and sub-lords
        'Star Lord': 'நட்சத்திர அதிபதி',
        'Sub Lord': 'உப அதிபதி',
        'Sub-Sub Lord': 'உப-உப அதிபதி',
        'Sub-Sub-Sub Lord': 'உப-உப-உப அதிபதி',
        'Day Lord': 'கிழமை அதிபதி',
        'Hora Lord': 'ஹோரை அதிபதி',

        # Time related
        'Sunrise': 'சூரியோதயம்',
        'Sunset': 'சூரியாஸ்தமனம்',
        'Duration': 'காலஅளவு',

        # Days of week
        'Sunday': 'ஞாயிறு',
        'Monday': 'திங்கள்',
        'Tuesday': 'செவ்வாய்',
        'Wednesday': 'புதன்',
        'Thursday': 'வியாழன்',
        'Friday': 'வெள்ளி',
        'Saturday': 'சனி',

        # Astrological terms
        'Nakshatra': 'நட்சத்திரம்',
        'Pada': 'பாதம்',
        'Tithi': 'திதி',
        'Yoga': 'யோகம்',
        'Karana': 'கரணம்',
        'Rasi': 'ராசி',
        'Lagna': 'லக்னம்',
        'Bhava': 'பாவம்',
        'Graha': 'கிரகம்',

        # Zodiac signs
        'Aries': 'மேஷம்',
        'Taurus': 'ரிஷபம்',
        'Gemini': 'மிதுனம்',
        'Cancer': 'கடகம்',
        'Leo': 'சிம்மம்',
        'Virgo': 'கன்னி',
        'Libra': 'துலாம்',
        'Scorpio': 'விருச்சிகம்',
        'Sagittarius': 'தனுசு',
        'Capricorn': 'மகரம்',
        'Aquarius': 'கும்பம்',
        'Pisces': 'மீனம்',

        # Directions
        'North': 'வடக்கு',
        'South': 'தெற்கு',
        'East': 'கிழக்கு',
        'West': 'மேற்கு',
        'Northeast': 'வடகிழக்கு',
        'Northwest': 'வடமேற்கு',
        'Southeast': 'தென்கிழக்கு',
        'Southwest': 'தென்மேற்கு',

        # Status messages
        'Calculating...': 'கணக்கிடுகிறது...',
        'Error': 'பிழை',
        'Success': 'வெற்றி',
        'Loading': 'ஏற்றுகிறது',
        'Please wait': 'காத்திருக்கவும்',
        'Complete': 'முடிந்தது',

        # UI elements
        'Submit': 'சமர்ப்பி',
        'Reset': 'மீட்டமை',
        'Calculate': 'கணக்கிடு',
        'Generate PDF': 'PDF உருவாக்கு',
        'Print': 'அச்சிடு',
        'Save': 'சேமி',
        'Close': 'மூடு',
        'Back': 'பின்செல்',
        'Next': 'அடுத்து',
    }

    @classmethod
    def translate(cls, text: str) -> str:
        """Translate text from English to Tamil"""
        return cls.TRANSLATIONS.get(text, text)

    @classmethod
    def translate_dict(cls, data: dict) -> dict:
        """Recursively translate all values in a dictionary"""
        translated = {}
        for key, value in data.items():
            if isinstance(value, dict):
                translated[cls.translate(key)] = cls.translate_dict(value)
            elif isinstance(value, list):
                translated[cls.translate(key)] = [cls.translate(item) if isinstance(item, str) else item for item in value]
            elif isinstance(value, str):
                translated[cls.translate(key)] = cls.translate(value)
            else:
                translated[cls.translate(key)] = value
        return translated
