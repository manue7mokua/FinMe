import React, { useState, useEffect } from 'react';
import IncomeListItem from './IncomeListItem';
import AddIncomeModal from '../Dashboard/MainContent/AddIncomeModal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../loadingAnimation.css';

const IncomesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      console.error('Failed to fetch incomes', err);
      setLoading(false) // Ensure loading state is cleared even if there's an error
    }
  };

  const deleteIncome = async (incomeId) => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id;

    try {
      await axios.delete(`http://localhost:5000/users/${userId}/deleteIncome/${incomeId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      refreshIncomes();
    } catch (err) {
      console.error('Failed to delete income', err);
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
      
      <div className="grid grid-cols-5 gap-4 w-full mt-4">
        <div className="text-sm font-semibold text-gray-600">NAME</div>
        <div className="text-sm font-semibold text-gray-600">TYPE</div>
        <div className="text-sm font-semibold text-gray-600">DATE RANGE</div>
        <div className="text-sm font-semibold text-gray-600">AMOUNT</div>
        <div className='text-sm font-semibold text-gray-600'></div> {/* Empty header for delete button */}
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="cube">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-3 w-full'>
          {incomes.map((income, index) => (
            <IncomeListItem
              key={index}
              incomeId={income.id}
              incomeName={income.incomeName}
              incomeType={income.incomeType}
              incomeDateRange={`${new Date(income.incomeStartDate).toLocaleDateString()} - ${new Date(income.incomeEndDate).toLocaleDateString()}`}
              incomeAmount={income.incomeAmount}
              onDelete={deleteIncome}
            />
          ))}
        </div>
      )}
      
      <AddIncomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshIncomes={refreshIncomes}
      />
    </div>
  );
};

export default IncomesSection;