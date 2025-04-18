import React, { useState } from 'react';

const PredictionsPageNew = () => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ta' for Tamil

  const content = {
    en: {
      title: "KP Predictions",
      subtitle: "Advanced predictive astrology using the KP Newcomb system",
      birthChart: {
        title: "Birth Chart Analysis",
        description: "Comprehensive birth chart analysis using KP system with detailed predictions.",
        features: ["Planetary Positions", "House Analysis", "Dasha Predictions"],
        button: "Get Analysis"
      },
      kpSystem: {
        title: "KP Newcomb System",
        description: "Advanced predictive techniques using the KP Newcomb system.",
        features: ["Precise Calculations", "Transit Analysis", "Timing Predictions"],
        button: "Learn More"
      },
      yearly: {
        title: "Yearly Predictions",
        description: "Detailed year-ahead forecasts based on KP astrological principles.",
        features: ["Career Outlook", "Relationship Guidance", "Financial Forecasts"],
        button: "Get Forecast"
      }
    },
    ta: {
      title: "கே.பி. கணிப்புகள்",
      subtitle: "கே.பி. நியூகோம்ப் முறையில் மேம்பட்ட ஜோதிட கணிப்புகள்",
      birthChart: {
        title: "ஜாதக பகுப்பாய்வு",
        description: "கே.பி. முறையில் விரிவான ஜாதக பகுப்பாய்வு மற்றும் விரிவான கணிப்புகள்.",
        features: ["கிரக நிலைகள்", "வீட்டு பகுப்பாய்வு", "தசா கணிப்புகள்"],
        button: "பகுப்பாய்வு பெறுக"
      },
      kpSystem: {
        title: "கே.பி. நியூகோம்ப் முறை",
        description: "கே.பி. நியூகோம்ப் முறையில் மேம்பட்ட கணிப்பு நுட்பங்கள்.",
        features: ["துல்லியமான கணக்கீடுகள்", "பரிவர்த்தனை பகுப்பாய்வு", "நேர கணிப்புகள்"],
        button: "மேலும் அறிக"
      },
      yearly: {
        title: "வருடாந்திர கணிப்புகள்",
        description: "கே.பி. ஜோதிட கோட்பாடுகளின் அடிப்படையில் விரிவான ஆண்டு கணிப்புகள்.",
        features: ["தொழில் வாய்ப்புகள்", "உறவு வழிகாட்டல்", "நிதி கணிப்புகள்"],
        button: "கணிப்பு பெறுக"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Language Selector */}
        <div className="flex justify-end mb-8">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-purple-800 text-white px-4 py-2 rounded-md"
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">{t.title}</h1>
        <p className="text-xl text-gray-300 text-center mb-12">{t.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Birth Chart Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-star text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.birthChart.title}</h3>
            <p className="text-gray-600 mb-4">{t.birthChart.description}</p>
            <ul className="space-y-2 mb-4">
              {t.birthChart.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              {t.birthChart.button}
            </button>
          </div>

          {/* KP Newcomb System */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.kpSystem.title}</h3>
            <p className="text-gray-600 mb-4">{t.kpSystem.description}</p>
            <ul className="space-y-2 mb-4">
              {t.kpSystem.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              {t.kpSystem.button}
            </button>
          </div>

          {/* Yearly Predictions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-calendar-check text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.yearly.title}</h3>
            <p className="text-gray-600 mb-4">{t.yearly.description}</p>
            <ul className="space-y-2 mb-4">
              {t.yearly.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              {t.yearly.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionsPageNew;
