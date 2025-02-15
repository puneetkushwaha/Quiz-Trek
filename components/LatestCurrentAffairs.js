import { useState } from 'react';

export default function LatestCurrentAffairs() {
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('January'); // Track selected month

  // Function to handle showing PDF in iframe
  const handleViewPdf = (url) => {
    setPdfUrl(url);
    setShowPdf(true); // Show the PDF iframe
  };

  // Function to change the selected month
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setShowPdf(false); // Hide the PDF when changing months
  };

  // Generate the PDFs based on the selected month
  const getMonthPdfLinks = () => {
    const monthDays = selectedMonth === 'January' ? 26 : 28; // Example: January has 26 days, February has 28
    return Array.from({ length: monthDays }, (_, index) => {
      const day = index + 1;
      const pdfName = `current-affair (${day}).pdf`;
      return (
        <div key={day} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-700">
            {selectedMonth} {day}, 2025
          </h2>
          <button
            onClick={() => handleViewPdf(`/${pdfName}`)} // Accessing from the public folder
            className="mt-4 text-blue-500 hover:underline"
          >
            View PDF
          </button>
        </div>
      );
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Monthly Current Affairs - {selectedMonth} 2025
        </h1>

        {/* Month switcher */}
        <div className="text-center mb-6">
          <button
            onClick={() => handleMonthChange('January')}
            className={`px-4 py-2 mr-4 text-white rounded-md ${selectedMonth === 'January' ? 'bg-blue-600' : 'bg-blue-400'}`}
          >
            January
          </button>
          <button
            onClick={() => handleMonthChange('February')}
            className={`px-4 py-2 text-white rounded-md ${selectedMonth === 'February' ? 'bg-blue-600' : 'bg-blue-400'}`}
          >
            February
          </button>
        </div>

        {/* Display PDFs for the selected month */}
        <div className="space-y-4">
          {getMonthPdfLinks()}
        </div>

        {/* Show the embedded PDF only if showPdf is true */}
        {showPdf && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Viewing PDF</h2>
            <iframe
              src={pdfUrl}
              width="100%"
              height="600px"
              className="border-2 border-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}
