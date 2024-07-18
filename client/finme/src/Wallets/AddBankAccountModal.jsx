import React, { useState } from 'react';
import axios from 'axios';

const AddBankAccountModal = ({ isOpen, onClose, refreshAccounts }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [cardExpiresOn, setCardExpiresOn] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

    try {
      const response = await axios.post(`http://localhost:5000/accounts/${userId}/addAccount`, {
        accountNumber,
        accountName,
        accountBalance,
        cardExpiresOn
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setSuccess('Bank account added successfully');
        refreshAccounts();
        onClose();
      } else {
        setError('Failed to add bank account');
      }
    } catch (err) {
      setError('Failed to add bank account');
      console.error('Error adding bank account:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Bank Account</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="text"
            placeholder="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="number"
            placeholder="Account Balance"
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="text"
            placeholder="Card Expiry Date (YYYY MM)"
            value={cardExpiresOn}
            onChange={(e) => setCardExpiresOn(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Add Bank Account</button>
        </form>
        <button onClick={onClose} className="w-full p-2 bg-red-500 text-white rounded-lg mt-2">Close</button>
      </div>
    </div>
  );
};

export default AddBankAccountModal;
