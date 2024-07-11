import React from 'react';
import ExpenseItem from './ExpenseItem';

const WeeklyExpenses = () => {
  const expensesThisWeek = [
    { categoryIcon: '🛒', categoryTitle: 'Grocery', expenseDate: '2:15 pm', expenseDay: 'Sunday', expenseAmount: '-326.80' },
    { categoryIcon: '🚗', categoryTitle: 'Transportation', expenseDate: '9:12 am', expenseDay: 'Friday', expenseAmount: '-15.00' },
    { categoryIcon: '💡', categoryTitle: 'Utilities', expenseDate: '5:47 pm', expenseDay: 'Thursday', expenseAmount: '-185.75' }
  ];

  const expensesLastWeek = [
    { categoryIcon: '🍽️', categoryTitle: 'Food and Drink', expenseDate: '5:12 pm', expenseDay: 'Friday', expenseAmount: '-156.00' },
    { categoryIcon: '🎬', categoryTitle: 'Entertainment', expenseDate: '5:12 pm', expenseDay: 'Saturday', expenseAmount: '-35.20' }
  ];
  return (
    <div className="p-5 bg-white">
      <h2 className="text-xl font-bold mb-4">This week...</h2>
      {expensesThisWeek.map((expense, index) => (
        <ExpenseItem key={index} {...expense} />
      ))}
      <h2 className="text-xl font-bold mt-6 mb-4">Last Week, (20th - 27th March)</h2>
      {expensesLastWeek.map((expense, index) => (
        <ExpenseItem key={index} {...expense} />
      ))}
    </div>
  )
}

export default WeeklyExpenses;
