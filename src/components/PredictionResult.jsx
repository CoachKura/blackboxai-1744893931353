import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const PredictionResult = ({ language, data }) => {
  const content = {
    en: {
      title: "KP Astrology Chart Analysis",
      birthDetails: "Birth Details",
      coordinates: "Coordinates",
      localTime: "Local Time Details",
      localMeanTime: "Local Mean Time",
      timezoneOffset: "Timezone Offset",
      ayanamsa: "Ayanamsa",
      planetaryPositions: "Planetary Positions",
      rulingPlanets: "Ruling Planets",
      dasaBhukti: "Dasa Bhukti",
      birthTimeRect: "Birth Time Rectification",
      rectifiedTime: "Rectified Time",
      confidence: "Confidence",
      logicalLife: "Logical Life Analysis",
      sentimentalLife: "Sentimental Life Analysis",
      downloadPdf: "Download PDF Report"
    },
    ta: {
      title: "கே.பி. ஜோதிட விளக்க பகுப்பாய்வு",
      birthDetails: "பிறப்பு விவரங்கள்",
      coordinates: "அட்சரேகை/தீர்க்கரேகை",
      localTime: "உள்ளூர் நேர விவரங்கள்",
      localMeanTime: "உள்ளூர் சராசரி நேரம்",
      timezoneOffset: "நேர மண்டல வித்தியாசம்",
      ayanamsa: "அயனாம்சம்",
      planetaryPositions: "கிரக நிலைகள்",
      rulingPlanets: "ஆளும் கிரகங்கள்",
      dasaBhukti: "தசா புக்தி",
      birthTimeRect: "பிறப்பு நேர திருத்தம்",
      rectifiedTime: "திருத்தப்பட்ட நேரம்",
      confidence: "நம்பகத்தன்மை",
      logicalLife: "தர்க்க ரீதியான வாழ்க்கை பகுப்பாய்வு",
      sentimentalLife: "உணர்வு ரீதியான வாழ்க்கை பகுப்பாய்வு",
      downloadPdf: "PDF அறிக்கையை பதிவிறக்கு"
    }
  };

  const t = content[language];

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(t.title, 105, 20, { align: 'center' });

    // Birth Details
    doc.setFontSize(16);
    doc.text(t.birthDetails, 20, 40);
    
    const birthDetails = [
      ['Name', data.birth_details.name],
      ['Date', data.birth_details.date],
      ['Time', data.birth_details.time],
      ['Place', `${data.birth_details.location.area}, ${data.birth_details.location.city}`],
      [t.coordinates, `${data.birth_details.location.coordinates.latitude}°N, ${data.birth_details.location.coordinates.longitude}°E`]
    ];
    
    doc.autoTable({
      startY: 45,
      body: birthDetails,
      theme: 'plain',
      styles: { fontSize: 12 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 40 },
        1: { cellWidth: 130 }
      }
    });

    // Local Time Details
    doc.setFontSize(16);
    doc.text(t.localTime, 20, doc.autoTable.previous.finalY + 20);

    const timeDetails = [
      [t.localMeanTime, data.local_time_details.local_mean_time],
      [t.timezoneOffset, data.local_time_details.timezone_offset],
      [t.ayanamsa, data.ayanamsa]
    ];

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 25,
      body: timeDetails,
      theme: 'plain',
      styles: { fontSize: 12 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 60 },
        1: { cellWidth: 110 }
      }
    });

    // Planetary Positions
    doc.setFontSize(16);
    doc.text(t.planetaryPositions, 20, doc.autoTable.previous.finalY + 20);

    const planetaryPositions = Object.entries(data.planetary_positions).map(([planet, position]) => [
      planet.charAt(0).toUpperCase() + planet.slice(1),
      position
    ]);

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 25,
      body: planetaryPositions,
      theme: 'grid',
      styles: { fontSize: 12 },
      columnStyles: {
        0: { fontStyle: 'bold' }
      }
    });

    // Dasa Bhukti
    doc.setFontSize(16);
    doc.text(t.dasaBhukti, 20, doc.autoTable.previous.finalY + 20);

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 25,
      head: [['Period', 'Start Date', 'End Date']],
      body: data.dasa_bhukti.map(period => [
        period.dasa,
        period.start_date,
        period.end_date
      ]),
      theme: 'grid',
      styles: { fontSize: 12 }
    });

    // Life Analysis
    if (data.logical_life && data.sentimental_life) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text(t.logicalLife, 20, 20);
      doc.text(t.sentimentalLife, 20, 120);

      // Add bar charts for life analysis
      const drawBarChart = (data, startY) => {
        data.forEach((item, index) => {
          const y = startY + (index * 10);
          doc.setFillColor(200, 200, 200);
          doc.rect(50, y, 100, 6, 'F');
          doc.setFillColor(
            item.percentage >= 70 ? 39 : item.percentage >= 50 ? 255 : 66,
            item.percentage >= 70 ? 174 : item.percentage >= 50 ? 193 : 139,
            item.percentage >= 70 ? 96 : item.percentage >= 50 ? 7 : 202
          );
          doc.rect(50, y, item.percentage, 6, 'F');
          doc.text(item.planet, 20, y + 5);
          doc.text(`${item.percentage}%`, 155, y + 5);
        });
      };

      drawBarChart(data.logical_life, 40);
      drawBarChart(data.sentimental_life, 140);
    }

    // Save PDF
    doc.save('kp-astrology-report.pdf');
  };

  if (!data) return null;

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-8 font-serif">{t.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Birth Details */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.birthDetails}</h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">Name:</span>
              <span className="text-gray-800">{data.birth_details.name}</span>
            </div>
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">Date:</span>
              <span className="text-gray-800">{data.birth_details.date}</span>
            </div>
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">Time:</span>
              <span className="text-gray-800">{data.birth_details.time}</span>
            </div>
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">Place:</span>
              <span className="text-gray-800">{data.birth_details.location.area}, {data.birth_details.location.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">{t.coordinates}:</span>
              <span className="text-gray-800">
                {data.birth_details.location.coordinates.latitude}°N, {data.birth_details.location.coordinates.longitude}°E
              </span>
            </div>
          </div>
        </div>

        {/* Local Time Details */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.localTime}</h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">{t.localMeanTime}:</span>
              <span className="text-gray-800">{data.local_time_details.local_mean_time}</span>
            </div>
            <div className="flex justify-between border-b border-purple-100 pb-2">
              <span className="text-gray-600 font-medium">{t.timezoneOffset}:</span>
              <span className="text-gray-800">{data.local_time_details.timezone_offset}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">{t.ayanamsa}:</span>
              <span className="text-gray-800">{data.ayanamsa}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Planetary Positions */}
      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.planetaryPositions}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(data.planetary_positions).map(([planet, position]) => (
            <div key={planet} className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium capitalize">{planet}</span>
              <span className="text-gray-800">{position}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ruling Planets */}
      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.rulingPlanets}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.ruling_planets).map(([house, planet]) => (
            <div key={house} className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium capitalize">{house}</span>
              <span className="text-gray-800">{planet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dasa Bhukti */}
      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.dasaBhukti}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-3 text-left font-medium text-gray-700">Period</th>
                <th className="p-3 text-left font-medium text-gray-700">Start Date</th>
                <th className="p-3 text-left font-medium text-gray-700">End Date</th>
              </tr>
            </thead>
            <tbody>
              {data.dasa_bhukti.map((period, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                  <td className="p-3 border-t border-purple-100">{period.dasa}</td>
                  <td className="p-3 border-t border-purple-100">{period.start_date}</td>
                  <td className="p-3 border-t border-purple-100">{period.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Life Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Logical Life Analysis */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.logicalLife}</h3>
          <div className="space-y-4">
            {data.logical_life.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm text-gray-600">{item.planet}</div>
                <div className="flex-grow">
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div 
                      className={`h-4 rounded-full ${
                        item.percentage >= 70 ? 'bg-green-500' :
                        item.percentage >= 50 ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm text-gray-600">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sentimental Life Analysis */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-serif">{t.sentimentalLife}</h3>
          <div className="space-y-4">
            {data.sentimental_life.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm text-gray-600">{item.planet}</div>
                <div className="flex-grow">
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div 
                      className={`h-4 rounded-full ${
                        item.percentage >= 70 ? 'bg-green-500' :
                        item.percentage >= 50 ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm text-gray-600">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={generatePDF}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium"
        >
          {t.downloadPdf}
        </button>
      </div>
    </div>
  );
};

export default PredictionResult;
