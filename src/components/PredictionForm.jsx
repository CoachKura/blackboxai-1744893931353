import React, { useState } from 'react';

const PredictionForm = ({ language, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    birthDate: '',
    birthTime: '',
    location: {
      area: '',
      city: '',
      district: '',
      state: '',
      country: 'India'
    },
    timezone: 'Asia/Kolkata',
    events: [{ type: 'marriage', date: '' }]
  });

  const content = {
    en: {
      title: "KP Astrology Calculator",
      name: "Full Name",
      gender: "Gender",
      birthDate: "Birth Date",
      birthTime: "Birth Time",
      location: {
        area: "Area/Street",
        city: "City/Town",
        district: "District",
        state: "State",
        country: "Country"
      },
      timezone: "Timezone",
      marriage: "Marriage Date (Optional - for birth time rectification)",
      submit: "Calculate Chart",
      reset: "Reset"
    },
    ta: {
      title: "கே.பி ஜோதிட கணிப்பான்",
      name: "முழு பெயர்",
      gender: "பாலினம்",
      birthDate: "பிறந்த தேதி",
      birthTime: "பிறந்த நேரம்",
      location: {
        area: "பகுதி/தெரு",
        city: "நகரம்/ஊர்",
        district: "மாவட்டம்",
        state: "மாநிலம்",
        country: "நாடு"
      },
      timezone: "நேர மண்டலம்",
      marriage: "திருமண தேதி (விருப்பம் - பிறப்பு நேர திருத்தத்திற்கு)",
      submit: "கணிப்பை உருவாக்கு",
      reset: "மீட்டமை"
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      gender: 'male',
      birthDate: '',
      birthTime: '',
      location: {
        area: '',
        city: '',
        district: '',
        state: '',
        country: 'India'
      },
      timezone: 'Asia/Kolkata',
      events: [{ type: 'marriage', date: '' }]
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8 font-serif">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.birthDate}</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.gender}</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.birthTime}</label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="md:col-span-2 mt-8">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 font-serif">Birth Place Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.location.area}</label>
                  <input
                    type="text"
                    name="location.area"
                    value={formData.location.area}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.location.district}</label>
                  <input
                    type="text"
                    name="location.district"
                    value={formData.location.district}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.location.country}</label>
                  <input
                    type="text"
                    name="location.country"
                    value={formData.location.country}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                    required
                    readOnly
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.location.city}</label>
                  <input
                    type="text"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.location.state}</label>
                  <input
                    type="text"
                    name="location.state"
                    value={formData.location.state}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.timezone}</label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                  >
                    <option value="Asia/Kolkata">India (IST)</option>
                    <option value="Asia/Dubai">Dubai (GST)</option>
                    <option value="Asia/Singapore">Singapore (SGT)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Marriage Date */}
          <div className="md:col-span-2 mt-6">
            <label className="block text-gray-700 font-medium mb-2">{t.marriage}</label>
            <input
              type="date"
              name="marriageDate"
              value={formData.events[0].date}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                events: [{ ...prev.events[0], date: e.target.value }]
              }))}
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-center space-x-6 mt-10">
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
          >
            {t.reset}
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
          >
            {t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
