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
    <div>

    </div>
  )
}

export default WeeklyExpenses;
