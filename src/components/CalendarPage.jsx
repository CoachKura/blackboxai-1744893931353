import React from 'react';

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">AstroBalendar</h1>
        <p className="text-xl text-gray-300 text-center mb-12">Your personalized astrological calendar and timing guide</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Daily Planetary Positions */}
          <div className="bg-purple-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Daily Planetary Positions</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <i className="fas fa-sun text-yellow-400 text-2xl mr-4"></i>
                <div>
                  <h3 className="text-white font-semibold">Sun Transit</h3>
                  <p className="text-gray-300">Daily aspects and planetary influences</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-moon text-yellow-400 text-2xl mr-4"></i>
                <div>
                  <h3 className="text-white font-semibold">Moon Phases</h3>
                  <p className="text-gray-300">Lunar phases and Nakshatra positions</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400 text-2xl mr-4"></i>
                <div>
                  <h3 className="text-white font-semibold">Auspicious Timings</h3>
                  <p className="text-gray-300">Best times for important activities</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-yellow-400 text-2xl mr-4"></i>
                <div>
                  <h3 className="text-white font-semibold">Daily Muhurtha</h3>
                  <p className="text-gray-300">Auspicious time periods each day</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 bg-yellow-400 text-purple-900 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
              View Today's Positions
            </button>
          </div>

          {/* Calendar Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-calendar-alt text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Monthly View</h3>
              <p className="text-gray-300">Comprehensive monthly calendar with all astrological events</p>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition">
                Open Calendar
              </button>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-list text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Daily Details</h3>
              <p className="text-gray-300">Detailed daily astrological information and guidance</p>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition">
                View Details
              </button>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-bell text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Reminders</h3>
              <p className="text-gray-300">Set alerts for important astrological events</p>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition">
                Set Reminders
              </button>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-cog text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Preferences</h3>
              <p className="text-gray-300">Customize your calendar settings and notifications</p>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="mt-12 bg-gradient-to-r from-purple-800 to-purple-700 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <i className="fas fa-sync text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-white font-semibold mb-2">Auto-Sync</h3>
              <p className="text-gray-300">Sync across all your devices</p>
            </div>
            <div className="text-center">
              <i className="fas fa-file-export text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-white font-semibold mb-2">Export Calendar</h3>
              <p className="text-gray-300">Export to other calendar apps</p>
            </div>
            <div className="text-center">
              <i className="fas fa-chart-bar text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-white font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-300">Detailed astrological patterns</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
