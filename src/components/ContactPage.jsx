import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Contact Us</h1>
        <p className="text-xl text-gray-300 text-center mb-12">Get in touch for personalized astrological guidance</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a subject</option>
                  <option value="birth-chart">Birth Chart Analysis</option>
                  <option value="matchmaking">Matchmaking</option>
                  <option value="predictions">KP Predictions</option>
                  <option value="calendar">AstroBalendar</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-purple-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-envelope text-yellow-400 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">contact@astrobalendar.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone text-yellow-400 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-yellow-400 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-purple-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Follow Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://facebook.com/astrobalendar" className="flex items-center bg-purple-700 p-4 rounded-lg hover:bg-purple-600 transition">
                  <i className="fab fa-facebook text-yellow-400 text-2xl mr-3"></i>
                  <span className="text-white">Facebook</span>
                </a>
                <a href="https://twitter.com/astrobalendar" className="flex items-center bg-purple-700 p-4 rounded-lg hover:bg-purple-600 transition">
                  <i className="fab fa-twitter text-yellow-400 text-2xl mr-3"></i>
                  <span className="text-white">Twitter</span>
                </a>
                <a href="https://instagram.com/astrobalendar" className="flex items-center bg-purple-700 p-4 rounded-lg hover:bg-purple-600 transition">
                  <i className="fab fa-instagram text-yellow-400 text-2xl mr-3"></i>
                  <span className="text-white">Instagram</span>
                </a>
                <a href="https://youtube.com/astrobalendar" className="flex items-center bg-purple-700 p-4 rounded-lg hover:bg-purple-600 transition">
                  <i className="fab fa-youtube text-yellow-400 text-2xl mr-3"></i>
                  <span className="text-white">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
