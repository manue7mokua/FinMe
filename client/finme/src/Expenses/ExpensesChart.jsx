import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const ExpensesChart = ({ userId }) => {
  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);

  const fetchMonthlyExpenses = async (month) => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/student`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        const expenses = response.data;
        const filteredExpenses = expenses.filter(expense => new Date(expense.expenseDate).getMonth() === month);
        
        const dailyData = new Array(31).fill(0); // Initialize array with zeros for days in a month
        filteredExpenses.forEach(expense => {
          const expenseDate = new Date(expense.expenseDate);
          const day = expenseDate.getDate() - 1; // Get day (0-30)
          dailyData[day] += parseFloat(expense.expenseAmount);
        });

        setMonthlyExpenses(dailyData);
        setLoading(false);
      } else {
        console.error(`Error fetching expenses: ${response.data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching expenses: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonthlyExpenses(selectedMonth);
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1), // Labels for days 1 to 31
    datasets: [{
      label: `Expenses for ${months[selectedMonth]}`,
      data: monthlyExpenses,
      backgroundColor: '#4CAF50',
    }]
  };

  return (
    <div className='w-full max-w-xl my-6 mx-auto bg-white p-5 rounded-lg'>
      <div className="mb-4">
        <label className="mr-2">Select Month:</label>
        <select value={selectedMonth} onChange={handleMonthChange} className="p-2 border rounded">
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Bar data={data} />
      )}
    </div>
  );
};

export default ExpensesChart;

