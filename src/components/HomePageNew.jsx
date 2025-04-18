import React from 'react';
import { Link } from 'react-router-dom';

const HomePageNew = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced <span className="text-yellow-400">KP Astrology</span> Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover your destiny with our comprehensive KP system astrology
            platform. Get accurate predictions, compatibility analysis, and auspicious
            timing guidance.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link to="/predictions" className="bg-purple-800 rounded-lg p-8 text-center hover:bg-purple-700 transition">
            <h2 className="text-2xl font-semibold text-white mb-4">KP Predictions</h2>
            <p className="text-gray-300">Advanced predictive astrology using the KP Newcomb system</p>
          </Link>

          <Link to="/matchmaking" className="bg-purple-800 rounded-lg p-8 text-center hover:bg-purple-700 transition">
            <h2 className="text-2xl font-semibold text-white mb-4">Matchmaking</h2>
            <p className="text-gray-300">Comprehensive compatibility analysis for relationships</p>
          </Link>

          <Link to="/calendar" className="bg-purple-800 rounded-lg p-8 text-center hover:bg-purple-700 transition">
            <h2 className="text-2xl font-semibold text-white mb-4">Calendar</h2>
            <p className="text-gray-300">Daily planetary positions and auspicious timings</p>
          </Link>

          <Link to="/contact" className="bg-purple-800 rounded-lg p-8 text-center hover:bg-purple-700 transition">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-gray-300">Get personalized astrological guidance</p>
          </Link>
        </div>

        {/* Features Section */}
        <div className="bg-purple-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-star text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Accurate Predictions</h3>
              <p className="text-gray-300">Using advanced KP system calculations</p>
            </div>
            <div className="text-center">
              <i className="fas fa-user-friends text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300">Professional astrologers at your service</p>
            </div>
            <div className="text-center">
              <i className="fas fa-clock text-yellow-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Timely Support</h3>
              <p className="text-gray-300">24/7 customer support available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Discover Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8">Get started with our comprehensive astrological services today.</p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageNew;
