import { useState } from "react";
import { motion } from "framer-motion";

export default function LatestCurrentAffairs() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [showPdf, setShowPdf] = useState(false);

  const handleSelectMonth = (event) => {
    setSelectedMonth(event.target.value);
    setShowPdf(false);
  };

  const handleViewPdf = (date) => {
    let pdfPath = "";

    if (selectedMonth === "December") {
      pdfPath = "/december/december.pdf";
    } else {
      const formattedDate = `2025-${selectedMonth === "January" ? "01" : "02"}-${
        date < 10 ? "0" + date : date
      }.pdf`;
      pdfPath = `/${selectedMonth.toLowerCase()}/${formattedDate}`;
    }

    setPdfUrl(pdfPath);
    setShowPdf(true);
  };

  const generateDates = () => {
    const days = selectedMonth === "February" ? 28 : 31;
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black min-h-screen flex flex-col items-center text-white px-6 py-12">
      <motion.div 
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-center mb-8">
          📅 Monthly Current Affairs
        </h1>

        {/* Month Selector */}
        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <select
            className="bg-gray-900 text-white border-2 border-blue-500 p-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            onChange={handleSelectMonth}
            value={selectedMonth}
          >
            <option value="">Select Month</option>
            <option value="December">December 2024</option>
            <option value="January">January 2025</option>
            <option value="February">February 2025</option>
          </select>
        </motion.div>

        {/* Display PDF Options */}
        {selectedMonth && (
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {selectedMonth === "December" ? (
              <motion.div 
                className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-blue-500/50 text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleViewPdf()}
              >
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  December 2024 - Full Month Current Affairs
                </h2>
                <button className="text-blue-400 hover:text-blue-300 underline">
                  📄 View December PDF
                </button>
              </motion.div>
            ) : (
              generateDates().map((date) => (
                <motion.div 
                  key={date} 
                  className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-blue-500/50 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleViewPdf(date)}
                >
                  <h2 className="text-2xl font-semibold text-blue-300">
                    {`${selectedMonth} ${date}, 2025`}
                  </h2>
                  <button className="mt-4 text-blue-400 hover:text-blue-300 underline">
                    📄 View PDF
                  </button>
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {/* Show PDF Viewer */}
        {showPdf && (
          <motion.div 
            className="mt-8 opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">
              📖 Viewing PDF
            </h2>
            <iframe
              src={pdfUrl}
              width="100%"
              height="600px"
              className="border-2 border-gray-500 rounded-lg"
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
