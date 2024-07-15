import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AddIncomeModal = ({ isOpen, onClose, refreshIncomes }) => {
  const [incomeName, setIncomeName] = useState('');
  const [incomeType, setIncomeType] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      const response = await axios.post(`http://localhost:5000/users/${userId}/addIncome`, {
        incomeName,
        incomeType,
        incomeAmount,
        startDate,
        endDate
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setSuccess('Income added successfully');
        refreshIncomes();
        onClose();
      } else {
        setError('Failed to add income');
      }
    } catch (err) {
      setError('Failed to add income');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Income</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Income Name"
            value={incomeName}
            onChange={(e) => setIncomeName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="text"
            placeholder="Income Type"
            value={incomeType}
            onChange={(e) => setIncomeType(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="number"
            placeholder="Income Amount"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Add Income</button>
        </form>
        <button onClick={onClose} className="w-full p-2 bg-red-500 text-white rounded-lg mt-2">Close</button>
      </div>
    </div>
  );
};

export default AddIncomeModal;
