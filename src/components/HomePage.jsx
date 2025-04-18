import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      {/* Navigation */}
      <nav className="bg-purple-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-yellow-400">AstroBalendar</a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-yellow-400 transition">Home</a>
              <a href="#predictions" className="text-white hover:text-yellow-400 transition">KP Predictions</a>
              <a href="#matchmaking" className="text-white hover:text-yellow-400 transition">Matchmaking</a>
              <a href="#prasna" className="text-white hover:text-yellow-400 transition">Prasna</a>
              <a href="#calendar" className="text-white hover:text-yellow-400 transition">Calendar</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="text-yellow-400">KP Astrology</span> Platform
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover your destiny with our comprehensive KP system astrology platform. Get accurate predictions, compatibility analysis, and auspicious timing guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a href="#predictions" className="bg-purple-800 text-white p-4 rounded-lg hover:bg-purple-700 transition text-center">
                <i className="fas fa-chart-line text-2xl text-yellow-400 mb-2"></i>
                <h3 className="font-semibold">KP Predictions</h3>
              </a>
              <a href="#matchmaking" className="bg-purple-800 text-white p-4 rounded-lg hover:bg-purple-700 transition text-center">
                <i className="fas fa-heart text-2xl text-yellow-400 mb-2"></i>
                <h3 className="font-semibold">Matchmaking</h3>
              </a>
              <a href="#prasna" className="bg-purple-800 text-white p-4 rounded-lg hover:bg-purple-700 transition text-center">
                <i className="fas fa-question-circle text-2xl text-yellow-400 mb-2"></i>
                <h3 className="font-semibold">Prasna</h3>
              </a>
              <a href="#calendar" className="bg-purple-800 text-white p-4 rounded-lg hover:bg-purple-700 transition text-center">
                <i className="fas fa-calendar-alt text-2xl text-yellow-400 mb-2"></i>
                <h3 className="font-semibold">Calendar</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KP Predictions Section */}
      <section id="predictions" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">KP Predictions</h2>
            <p className="text-gray-600">Advanced predictive astrology using the KP Newcomb system</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-purple-600 mb-4">
                <i className="fas fa-star text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Birth Chart Analysis</h3>
              <p className="text-gray-600">Comprehensive birth chart analysis using KP system with detailed predictions.</p>
              <a href="#contact" className="inline-block mt-4 text-purple-600 hover:text-purple-800">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-purple-600 mb-4">
                <i className="fas fa-chart-line text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">KP Newcomb System</h3>
              <p className="text-gray-600">Precise predictions using advanced KP Newcomb calculations and techniques.</p>
              <a href="#contact" className="inline-block mt-4 text-purple-600 hover:text-purple-800">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-purple-600 mb-4">
                <i className="fas fa-calendar-check text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Yearly Predictions</h3>
              <p className="text-gray-600">Detailed year-ahead forecasts based on KP astrological principles.</p>
              <a href="#contact" className="inline-block mt-4 text-purple-600 hover:text-purple-800">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AstroBalendar</h2>
            <p className="text-gray-300">Your personalized astrological calendar and timing guide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-purple-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Daily Planetary Positions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-sun text-yellow-400 mr-3"></i>
                  <span>Sun Transit and Daily Aspects</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-moon text-yellow-400 mr-3"></i>
                  <span>Moon Phases and Nakshatras</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-3"></i>
                  <span>Auspicious Timings</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-yellow-400 mr-3"></i>
                  <span>Daily Muhurtha</span>
                </li>
              </ul>
              <button className="mt-6 bg-yellow-400 text-purple-900 px-6 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                View Calendar
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-800 p-6 rounded-lg text-center">
                <i className="fas fa-calendar-alt text-3xl text-yellow-400 mb-3"></i>
                <h4 className="font-semibold">Monthly View</h4>
              </div>
              <div className="bg-purple-800 p-6 rounded-lg text-center">
                <i className="fas fa-list text-3xl text-yellow-400 mb-3"></i>
                <h4 className="font-semibold">Daily Details</h4>
              </div>
              <div className="bg-purple-800 p-6 rounded-lg text-center">
                <i className="fas fa-bell text-3xl text-yellow-400 mb-3"></i>
                <h4 className="font-semibold">Reminders</h4>
              </div>
              <div className="bg-purple-800 p-6 rounded-lg text-center">
                <i className="fas fa-cog text-3xl text-yellow-400 mb-3"></i>
                <h4 className="font-semibold">Preferences</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matchmaking Section */}
      <section id="matchmaking" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">KP Matchmaking</h2>
            <p className="text-gray-600">Advanced compatibility analysis using KP astrology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Comprehensive Match Analysis</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-yellow-400 mr-3"></i>
                  <span>KP House Compatibility</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-yellow-400 mr-3"></i>
                  <span>Planetary Strength Analysis</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-yellow-400 mr-3"></i>
                  <span>Relationship Longevity</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-yellow-400 mr-3"></i>
                  <span>Dasha Period Compatibility</span>
                </li>
              </ul>
              <button className="mt-6 bg-yellow-400 text-purple-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
                Check Compatibility
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Detailed Reports Include</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-star text-yellow-400 mr-3"></i>
                  <span>Mental Compatibility Score</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-star text-yellow-400 mr-3"></i>
                  <span>Financial Harmony Analysis</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-star text-yellow-400 mr-3"></i>
                  <span>Children & Family Life</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-star text-yellow-400 mr-3"></i>
                  <span>Auspicious Marriage Timing</span>
                </li>
              </ul>
              <button className="mt-6 bg-yellow-400 text-purple-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
                Get Detailed Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prasna Section */}
      <section id="prasna" className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prasna (Horary)</h2>
            <p className="text-gray-300">Get instant answers to your pressing questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-question-circle text-4xl text-yellow-400"></i>
                <h3 className="text-xl font-semibold mt-2">Quick Questions</h3>
              </div>
              <p className="text-gray-300">Get immediate insights for simple yes/no questions</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-search text-4xl text-yellow-400"></i>
                <h3 className="text-xl font-semibold mt-2">Detailed Analysis</h3>
              </div>
              <p className="text-gray-300">In-depth analysis for complex life situations</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-clock text-4xl text-yellow-400"></i>
                <h3 className="text-xl font-semibold mt-2">Timing Guidance</h3>
              </div>
              <p className="text-gray-300">Know the best time for important decisions</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition">
              Ask a Question Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to discover what the stars have in store for you? Contact us for personalized astrological guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-yellow-400"></i>
                  <span>contact@kpastro.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone mr-3 text-yellow-400"></i>
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-yellow-400"></i>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-purple-800 border border-purple-600 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-purple-800 border border-purple-600 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                  <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded-md bg-purple-800 border border-purple-600 focus:outline-none focus:border-yellow-400"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-purple-900 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://facebook.com" className="hover:text-yellow-400 transition"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="hover:text-yellow-400 transition"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="hover:text-yellow-400 transition"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" className="hover:text-yellow-400 transition"><i className="fab fa-youtube"></i></a>
            </div>
            <p>&copy; 2023 KP Astro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
