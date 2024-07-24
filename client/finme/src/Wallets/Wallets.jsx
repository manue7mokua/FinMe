import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CreateCard from './CreateCard';
import AddBankAccountModal from './AddBankAccountModal';
import axios from 'axios';

const Wallets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Delay of 2 seconds
      } else {
        console.error(`Error fetching accounts: ${response.data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching accounts: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className='h-screen flex bg-black'>
      <Sidebar />
      <div className='flex flex-col w-full p-6'>
        <div className='w-full flex justify-center mt-20 mb-4'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-blue-500 px-4 py-2 rounded-lg text-white'
          >
            Add Bank Account
          </button>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-row gap-10 p-10 items-center justify-center flex-wrap'>
            {loading ? (
              <div className="text-white text-4xl">Loading Your Data :) ...</div>
            ) : (
              accounts.map((account, index) => (
                <CreateCard
                  key={index}
                  bankAccountName={account.accountName}
                  bankAccountBalance={`$${account.accountBalance}`}
                  bankAccountType='Checking Account' // Assuming all are checking accounts
                  bankCardNumber={`**** **** **** ${account.accountNumber.slice(-4)}`}
                />
              ))
            )}
          </div>
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