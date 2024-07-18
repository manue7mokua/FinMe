import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CreateCard from './CreateCard';
import AddBankAccountModal from './AddBankAccountModal';
import axios from 'axios';

const Wallets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

    try {
      const response = await axios.get(`http://localhost:5000/accounts/${userId}/accountInfo`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setAccounts(response.data);
      } else {
        console.error(`Error fetching accounts: ${response.data.message}`);
      }
    } catch (error) {
      console.error(`Error fetching accounts: ${error}`);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className='h-screen flex bg-black'>
      <Sidebar />
      <div className='flex items-center justify-around'>
        <div className='flex flex-row gap-10 p-20 items-center justify-evenly flex-wrap'>
          {accounts.map((account, index) => (
            <CreateCard
              key={index}
              bankAccountName={account.accountName}
              bankAccountBalance={`$${account.accountBalance}`} 
              bankAccountType='Checking Account' // Assuming all are checking accounts for simplicity
              bankCardNumber={`**** **** **** ${account.accountNumber.slice(-4)}`}
            />
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className='mt-6 bg-blue-500 px-4 py-2 rounded-lg text-white'
          >
            Add Bank Account
          </button>
        </div>
      </div>
      <AddBankAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshAccounts={fetchAccounts}
      />
    </div>
  );
}

export default Wallets;

