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
  const [categorySums, setCategorySums] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        console.error(`Error fetching expenses: ${response.data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching expenses: ${error}`);
      setLoading(false);
    }
  };

  const fetchCategorySums = async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

    try {
      const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/categorySum`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setCategorySums(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Delay of 2 seconds
      } else {
        console.error(`Error fetching category sums: ${response.data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching category sums: ${error}`);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchExpenses();
    fetchCategorySums();
  }, []);

  return (
    <div className='h-screen flex bg-black'>
      <Sidebar />
      <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0 container mx-auto p-5">
        <ExpensesHeader />
        {loading ? (
          <div className="text-white text-4xl">Loading Your Data :) ...</div>
        ) : (
          <WeeklyExpenses expenses={expenses} />
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          className='mt-6 bg-blue-500 px-4 py-2 rounded-lg text-white'
        >
          Add Expense
        </button>
      </div>
      <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0">
        <CategoryWeighting  categorySums={categorySums}/>
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

