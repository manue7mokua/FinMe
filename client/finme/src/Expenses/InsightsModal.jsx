import React, { useState, useEffect } from 'react';
import './insightsAnimation.scss';

const InsightsModal = ({ isOpen, onClose, onGenerate, insights }) => {
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [localInsights, setLocalInsights] = useState(null);

  const handleMonthChange = (e) => {
    const { value, checked } = e.target;
    setSelectedMonths((prev) =>
      checked ? [...prev, value] : prev.filter((month) => month !== value)
    );
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onGenerate(selectedMonths, selectedCategories);
      setLocalInsights(insights);
    }, 5000); // 5-second delay
  };

  useEffect(() => {
    if (!isOpen) {
      setLoading(false);
      setLocalInsights(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center w-full">
      <div className="bg-white p-5 rounded-lg flex flex-col max-w-md w-full">
        {!loading && <h2 className="text-2xl font-semibold mb-4">Generate Insights</h2>}
        {loading ? (
          <div className="container flex justify-center items-center">
            {[...Array(36)].map((_, i) => (
              <div key={i} className={`baton-${i}`}>
                <div className="metronome">
                  <div className="baton"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Select Months:</label>
              <div className="grid grid-cols-3 gap-2">
                {['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06', '2024-07'].map((month) => (
                  <label key={month} className="flex items-center">
                    <input
                      type="checkbox"
                      value={month}
                      onChange={handleMonthChange}
                      className="mr-2"
                    />
                    {month}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Select Categories:</label>
              <div className="grid grid-cols-2 gap-2">
                {['Food', 'Transport', 'Bills', 'Personal', 'Entertainment'].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      onChange={handleCategoryChange}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Generate Insights
              </button>
              <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-lg">
                Close
              </button>
            </div>
            {localInsights && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Insights</h3>
                <div className="space-y-4">
                  {localInsights.map((insight, index) => (
                    <div key={index} className="p-2 bg-white rounded-lg shadow-md border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                      <span className="text-orange-600 text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
            </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InsightsModal;