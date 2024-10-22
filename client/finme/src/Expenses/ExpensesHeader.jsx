import React, { useState } from 'react';
import transporticon from '../assets/transport.png';
import billsicon from '../assets/bills.png';
import personalicon from '../assets/personal.png';
import foodicon from '../assets/food.png';
import entertainmenticon from '../assets/entertainment.png';
import ExpensesChart from './ExpensesChart';

const ExpensesHeader = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const now = new Date();
  const year = now.getFullYear();
  const startDate = new Date(year, selectedMonth, 1);
  const endDate = new Date(year, selectedMonth + 1, 0);

  return (
    <div className='flex flex-row w-full h-full items-center justify-center gap-6'>
      <div className='flex flex-col w-[280px] h-full items-center p-5 bg-white rounded-lg shadow-md'>
        <h1 className="text-2xl font-bold">Expenses</h1>
        <p className="mt-2">{`${startDate.getDate()} - ${endDate.getDate()} ${months[selectedMonth]}, ${year}`}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          <img src={entertainmenticon} alt="category-icon" className="w-16 h-16 rounded-full" />
          <img src={transporticon} alt="category-icon" className="w-16 h-16 rounded-full" />
          <img src={foodicon} alt="category-icon" className="w-16 h-16 rounded-full" />
          <img src={billsicon} alt="category-icon" className="w-16 h-16 rounded-full" />
          <img src={personalicon} alt="category-icon" className="w-16 h-16 rounded-full" />
        </div>
        <div className="mt-7 w-full h-full">
          <label className="mr-2">Select Month:</label>
          <select value={selectedMonth} onChange={handleMonthChange} className="p-2 border rounded">
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <ExpensesChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default ExpensesHeader;

