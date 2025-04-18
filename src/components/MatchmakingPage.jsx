import React from 'react';

const MatchmakingPage = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">KP Matchmaking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Compatibility Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Comprehensive Match Analysis</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-heart text-purple-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">KP House Compatibility</h3>
                  <p className="text-gray-600">Detailed analysis of house positions and their impact on relationship harmony.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-star text-purple-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Planetary Strength Analysis</h3>
                  <p className="text-gray-600">Evaluation of planetary positions and their influence on relationship dynamics.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-infinity text-purple-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Relationship Longevity</h3>
                  <p className="text-gray-600">Assessment of long-term compatibility and relationship sustainability.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-purple-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Dasha Period Compatibility</h3>
                  <p className="text-gray-600">Analysis of timing and periods favorable for relationship milestones.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition">
              Check Compatibility
            </button>
          </div>

          {/* Detailed Reports */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Detailed Reports Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <i className="fas fa-brain text-purple-600 text-3xl mb-4"></i>
                <h3 className="font-semibold text-gray-800 mb-2">Mental Compatibility</h3>
                <p className="text-gray-600">Understanding intellectual and emotional connection.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <i className="fas fa-coins text-purple-600 text-3xl mb-4"></i>
                <h3 className="font-semibold text-gray-800 mb-2">Financial Harmony</h3>
                <p className="text-gray-600">Analysis of financial compatibility and prosperity.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <i className="fas fa-home text-purple-600 text-3xl mb-4"></i>
                <h3 className="font-semibold text-gray-800 mb-2">Family Life</h3>
                <p className="text-gray-600">Insights into family dynamics and children.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <i className="fas fa-calendar-alt text-purple-600 text-3xl mb-4"></i>
                <h3 className="font-semibold text-gray-800 mb-2">Marriage Timing</h3>
                <p className="text-gray-600">Auspicious periods for marriage and ceremonies.</p>
              </div>
            </div>
            <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition">
              Get Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchmakingPage;
