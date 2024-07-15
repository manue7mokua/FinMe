import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AddCompanyToWatchlist = ({ isOpen, onClose, refreshWatchlist }) => {
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  const userId = decoded.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');

    try {
      const companyResponse = await axios.get(`http://localhost:5000/api/company/${companyName}`);
      const companyData = companyResponse.data;
      console.log(companyData)

      const response = await axios.post(`http://localhost:5000/api/add/${userId}`, {
        companyIcon: companyData.companyIcon,
        companyName: companyData.companyName,
        companyAbbrev: companyData.companyAbbrev,
        stockPrice: companyData.stockPrice,
        performancePercentage: companyData.performancePercentage
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setSuccess('Company added to watchlist');
        refreshWatchlist();
        onClose();
      } else {
        setError('Failed to add company');
      }
    } catch (err) {
      setError('Failed to add company');
      console.error('Error adding company:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Company</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Add Company</button>
        </form>
        <button onClick={onClose} className="w-full p-2 bg-red-500 text-white rounded-lg mt-2">Close</button>
      </div>
    </div>
  );
};

export default AddCompanyToWatchlist;

