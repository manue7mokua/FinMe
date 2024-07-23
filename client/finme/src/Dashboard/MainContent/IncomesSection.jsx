import React, { useState, useEffect } from 'react';
import IncomeListItem from './IncomeListItem';
import AddIncomeModal from './AddIncomeModal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const IncomesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);

  const refreshIncomes = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}/incomeInfo`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setIncomes(response.data);
    } catch (err) {
      console.error('Failed to fetch incomes', err);
    }
  };

  useEffect(() => {
    refreshIncomes();
  }, []);

  return (
    <div className='flex flex-col w-full h-full items-start gap-4 p-5 bg-white rounded-lg overflow-auto'>
      <div className="text-2xl font-semibold text-gray-900 flex flex-row items-center justify-between w-full">
        <div>
          Incomes
        </div>
        <div className="flex justify-end w-full mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Add New
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-center w-full">
        <div className="text-sm font-semibold text-gray-600">NAME</div>
        <div className="text-sm font-semibold text-gray-600">TYPE</div>
        <div className="text-sm font-semibold text-gray-600">DATE RANGE</div>
        <div className="text-sm font-semibold text-gray-600 text-right">AMOUNT</div>
      </div>
      <div className='flex flex-col gap-3 w-full'>
        {incomes.map((income, index) => (
          <IncomeListItem
            key={index}
            incomeName={income.incomeName}
            incomeType={income.incomeType}
            incomeDateRange={`${new Date(income.incomeStartDate).toLocaleDateString()} - ${new Date(income.incomeEndDate).toLocaleDateString()}`}
            incomeAmount={income.incomeAmount}
          />
        ))}
      </div>
      
      <AddIncomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshIncomes={refreshIncomes}
      />
    </div>
  );
};

export default IncomesSection;