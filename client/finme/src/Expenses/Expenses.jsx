import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CategoryWeighting from './CategoryWeighting';
import BotQuery from '../Dashboard/MainContent/BotQuery';
import ExpensesHeader from './ExpensesHeader';
import ExpensesChart from './ExpensesChart';
import WeeklyExpenses from './WeeklyExpenses';
import AddExpenseModal from './AddExpenseModal';
import axios from 'axios';

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

    try {
      const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/student`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setExpenses(response.data);
      } else {
        console.error(`Error fetching expenses: ${response.data.message}`);
      }
    } catch (error) {
      console.error(`Error fetching expenses: ${error}`);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className='h-screen flex bg-black'>
      <Sidebar />
      <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0 container mx-auto p-5">
        <ExpensesHeader />
        <WeeklyExpenses expenses={expenses} />
        <button
          onClick={() => setIsModalOpen(true)}
          className='mt-6 bg-blue-500 px-4 py-2 rounded-lg text-white'
        >
          Add Expense
        </button>
      </div>
      <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0">
        <CategoryWeighting />
        <BotQuery />
      </div>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshExpenses={fetchExpenses}
      />
    </div>
  )
}

export default Expenses;

