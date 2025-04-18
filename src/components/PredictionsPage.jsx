import React from 'react';

const PredictionsPage = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">KP Predictions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Birth Chart Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-star text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Birth Chart Analysis</h3>
            <p className="text-gray-600 mb-4">Comprehensive birth chart analysis using KP system with detailed predictions.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Planetary Positions</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>House Analysis</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Dasha Predictions</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              Get Analysis
            </button>
          </div>

          {/* KP Newcomb System */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">KP Newcomb System</h3>
            <p className="text-gray-600 mb-4">Advanced predictive techniques using the KP Newcomb system.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Precise Calculations</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Transit Analysis</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Timing Predictions</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              Learn More
            </button>
          </div>

          {/* Yearly Predictions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 mb-4">
              <i className="fas fa-calendar-check text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Yearly Predictions</h3>
            <p className="text-gray-600 mb-4">Detailed year-ahead forecasts based on KP astrological principles.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Career Outlook</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Relationship Guidance</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                <span>Financial Forecasts</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              Get Forecast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionsPage;
