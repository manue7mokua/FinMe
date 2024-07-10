import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CategoryWeighting from './CategoryWeighting';
import BotQuery from '../Dashboard/MainContent/BotQuery';
import ExpensesHeader from './ExpensesHeader';
import ExpensesChart from './ExpensesChart';
import WeeklyExpenses from './WeeklyExpenses';

const Expenses = () => {
  return (
    <div className='h-screen flex bg-black'>
        <Sidebar />
        <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0 container mx-auto p-5">
            <ExpensesHeader />
            <WeeklyExpenses />
            <WeeklyExpenses />
        </div>
        <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0">
            <CategoryWeighting />
            <BotQuery />
        </div>
    </div>
  )
}

export default Expenses;
