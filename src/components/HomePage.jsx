import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AstroBalendar
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2">
                KP System Astrology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover Your Path with Precise KP Astrology Predictions
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-500 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            KP System Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="text-purple-400 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Our Mobile App
              </h2>
              <p className="text-gray-300 mb-6">
                Access KP Astrology predictions on the go. Download our mobile app for instant astrological insights and daily guidance.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <i className="fab fa-apple text-2xl"></i>
                  App Store
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <i className="fab fa-google-play text-2xl"></i>
                  Play Store
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <div className="relative">
                {/* Placeholder for mobile app mockup */}
                <div className="w-full h-[500px] bg-purple-800 bg-opacity-30 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-xl">App Preview</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prediction Tools Section */}
      <section className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            KP Prediction Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictionTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg p-6 cursor-pointer hover:transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Astrological Journey Today
            </h2>
            <p className="text-gray-300 mb-8">
              Get precise predictions and insights with our KP System tools
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: "🌟",
    title: "KP Astrology Calculator",
    description: "Calculate precise planetary positions and aspects using the KP system."
  },
  {
    icon: "🔮",
    title: "Newcombe Predictions",
    description: "Get accurate predictions based on KP Newcombe methodology."
  },
  {
    icon: "📊",
    title: "Birth Chart Analysis",
    description: "Detailed birth chart analysis using KP house system and significators."
  }
];

const predictionTools = [
  {
    title: "Birth Chart",
    description: "Generate your detailed KP birth chart with house positions"
  },
  {
    title: "Daily Predictions",
    description: "Get daily predictions based on KP transit analysis"
  },
  {
    title: "Compatibility",
    description: "Check relationship compatibility using KP system"
  },
  {
    title: "Custom Reports",
    description: "Generate comprehensive KP astrology reports"
  }
];

export default HomePage;
