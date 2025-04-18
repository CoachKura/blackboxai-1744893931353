import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePageNew';
import PredictionsPage from './components/PredictionsAdvanced';
import MatchmakingPage from './components/MatchmakingPage';
import CalendarPage from './components/CalendarPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-900">
        {/* Navigation */}
        <nav className="bg-purple-900 border-b border-purple-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center text-yellow-400 font-bold text-xl">
                  AstroBalendar
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/predictions" className="text-white hover:text-yellow-400 transition">
                  KP Predictions
                </Link>
                <Link to="/matchmaking" className="text-white hover:text-yellow-400 transition">
                  Matchmaking
                </Link>
                <Link to="/calendar" className="text-white hover:text-yellow-400 transition">
                  Calendar
                </Link>
                <Link to="/contact" className="text-white hover:text-yellow-400 transition">
                  Contact
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button className="text-white hover:text-yellow-400">
                  <i className="fas fa-bars text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/predictions" className="block text-white hover:text-yellow-400 transition px-3 py-2">
                KP Predictions
              </Link>
              <Link to="/matchmaking" className="block text-white hover:text-yellow-400 transition px-3 py-2">
                Matchmaking
              </Link>
              <Link to="/calendar" className="block text-white hover:text-yellow-400 transition px-3 py-2">
                Calendar
              </Link>
              <Link to="/contact" className="block text-white hover:text-yellow-400 transition px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
          <Route path="/matchmaking" element={<MatchmakingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-purple-900 border-t border-purple-800">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">About Us</h3>
                <p className="text-gray-300">Advanced KP system astrology platform for accurate predictions and guidance.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/predictions" className="text-gray-300 hover:text-yellow-400">KP Predictions</Link></li>
                  <li><Link to="/matchmaking" className="text-gray-300 hover:text-yellow-400">Matchmaking</Link></li>
                  <li><Link to="/calendar" className="text-gray-300 hover:text-yellow-400">Calendar</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/astrobalendar" className="text-gray-300 hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
                  <a href="https://twitter.com/astrobalendar" className="text-gray-300 hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
                  <a href="https://instagram.com/astrobalendar" className="text-gray-300 hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
                  <a href="https://youtube.com/astrobalendar" className="text-gray-300 hover:text-yellow-400"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Newsletter</h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-md w-full focus:outline-none"
                  />
                  <button className="bg-yellow-400 text-purple-900 px-4 rounded-r-md hover:bg-yellow-500">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-800 text-center">
              <p className="text-gray-300">&copy; 2024 AstroBalendar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
