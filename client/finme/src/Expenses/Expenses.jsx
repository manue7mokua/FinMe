import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CategoryWeighting from './CategoryWeighting';
import BotQuery from '../Dashboard/MainContent/BotQuery';
import ExpensesHeader from './ExpensesHeader';
import WeeklyExpenses from './WeeklyExpenses';
import AddExpenseModal from './AddExpenseModal';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa'

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [categorySums, setCategorySums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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
      <div className="flex flex-col lg:flex-row flex-grow w-full p-5 gap-6">
        <div className="flex flex-col lg:w-2/3 bg-black p-5 rounded-lg shadow-md">
          <div className="flex flex-row justify-between items-center mb-4">
          <ExpensesHeader selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
              <button
                onClick={() => setIsModalOpen(true)}
                className='bg-blue-500 p-2 rounded-full text-white shadow-lg'
              >
                <FaPlus size={56}/>
              </button>
          </div>
        {loading ? (
          <div className="text-white text-4xl">Loading...</div>
        ) : (
          <WeeklyExpenses expenses={expenses} />
        )}
      </div>
      <div className="flex flex-col gap-6 items-center justify-center lg:w-1/3 bg:white p-5 rounded-lg shadow-md">
        <CategoryWeighting categorySums={categorySums} />
        <BotQuery />
      </div>
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

