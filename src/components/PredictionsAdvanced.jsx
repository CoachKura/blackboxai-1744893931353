import React, { useState } from 'react';
import PredictionForm from './PredictionForm';
import PredictionResult from './PredictionResult';

const PredictionsAdvanced = () => {
  const [language, setLanguage] = useState('en');
  const [predictionData, setPredictionData] = useState(null);

  const content = {
    en: {
      title: "KP Predictions",
      subtitle: "Advanced predictive astrology using the KP Newcomb system",
      features: {
        title: "Our Features",
        subSubLord: {
          title: "Sub-Sub Lord Analysis",
          description: "Precise calculations of Sub-Sub Lords using KP system"
        },
        birthTime: {
          title: "Birth Time Rectification",
          description: "Automated birth time correction using advanced algorithms"
        },
        realTime: {
          title: "Real-Time Predictions",
          description: "Dynamic calculations of ruling planets and significators"
        },
        pdf: {
          title: "Detailed PDF Reports",
          description: "Comprehensive reports with planetary positions and predictions"
        }
      }
    },
    ta: {
      title: "கே.பி. கணிப்புகள்",
      subtitle: "கே.பி. நியூகோம்ப் முறையில் மேம்பட்ட ஜோதிட கணிப்புகள்",
      features: {
        title: "எங்கள் அம்சங்கள்",
        subSubLord: {
          title: "உப-உப அதிபதி பகுப்பாய்வு",
          description: "கே.பி. முறையில் துல்லியமான உப-உப அதிபதி கணக்கீடுகள்"
        },
        birthTime: {
          title: "பிறப்பு நேர திருத்தம்",
          description: "மேம்பட்ட வழிமுறைகளைப் பயன்படுத்தி தானியங்கி பிறப்பு நேர திருத்தம்"
        },
        realTime: {
          title: "நிகழ்நேர கணிப்புகள்",
          description: "ஆளும் கிரகங்கள் மற்றும் காரகர்களின் மாறும் கணக்கீடுகள்"
        },
        pdf: {
          title: "விரிவான PDF அறிக்கைகள்",
          description: "கிரக நிலைகள் மற்றும் கணிப்புகளுடன் விரிவான அறிக்கைகள்"
        }
      }
    }
  };

  const t = content[language];

  const [error, setError] = useState(null);

  const handlePrediction = async (formData) => {
    try {
      setError(null);
      console.log('Submitting form data:', formData);

      // Format date to match backend expectation (YYYY-MM-DD)
      const date = new Date(formData.birthDate);
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

      const requestData = {
        name: formData.name,
        gender: formData.gender,
        date: formattedDate,
        time: formData.birthTime,
        location: formData.location,
        timezone: formData.timezone,
        events: formData.events
      };

      console.log('Making API request with:', requestData);

      const response = await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to calculate prediction');
      }

      const data = await response.json();
      console.log('Received prediction data:', data);
      setPredictionData(data);
    } catch (error) {
      console.error('Error calculating prediction:', error);
      setError(error.message);
    }
  };

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Prediction Form */}
          <PredictionForm language={language} onSubmit={handlePrediction} />

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <i className="fas fa-chart-line text-purple-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t.features.subSubLord.title}</h3>
              <p className="text-gray-600">{t.features.subSubLord.description}</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <i className="fas fa-clock text-purple-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t.features.birthTime.title}</h3>
              <p className="text-gray-600">{t.features.birthTime.description}</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <i className="fas fa-star text-purple-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t.features.realTime.title}</h3>
              <p className="text-gray-600">{t.features.realTime.description}</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <i className="fas fa-file-pdf text-purple-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t.features.pdf.title}</h3>
              <p className="text-gray-600">{t.features.pdf.description}</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Prediction Results */}
        {predictionData && (
          <PredictionResult language={language} data={predictionData} />
        )}
      </div>
    </div>
  );
};

export default PredictionsAdvanced;
