import React from 'react';
import busicon from '../assets/busicon.svg';
import houseicon from '../assets/houseicon.svg';
import addnewicon from '../assets/addicon.svg';
import foodicon from '../assets/foodicon.svg';
import ExpensesChart from './ExpensesChart';

const ExpensesHeader = () => {
  const token = localStorage.getItem('token');
  const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

  return (
    <div className='flex flex-col gap-0'>
      <div className='flex flex-row p-5 bg-white w-fit'>
      <div className="flex flex-col items-start p-5 bg-white">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <p className="mt-2">01 - 25 March, 2020</p>
      </div>
      <div className="flex gap-2 mt-3">
          <img src={houseicon} alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src={busicon} alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src={foodicon} alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src={addnewicon} alt="category-icon" className="w-10 h-10 rounded-full" />
        </div>
      </div>
      <ExpensesChart userId={userId}/>
    </div>
  )
}

export default ExpensesHeader;
