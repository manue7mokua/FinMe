import React from 'react';
import ExpenseItem from './ExpenseItem';
import transporticon from '../assets/busicon.svg';
import billsicon from '../assets/houseicon.svg';
import personalicon from '../assets/Shopping.svg';
import foodicon from '../assets/foodicon.svg';
import entertainmenticon from '../assets/entertainment.svg';

const WeeklyExpenses = ({ expenses }) => {
  const now = new Date();
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  const twoWeeksAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);

  const expensesThisWeek = expenses
    .filter(expense => new Date(expense.expenseDate) >= oneWeekAgo)
    .sort((a, b) => b.expenseAmount - a.expenseAmount)
    .slice(0, 5);

  const expensesLastWeek = expenses
    .filter(expense => {
      const expenseDate = new Date(expense.expenseDate);
      return expenseDate >= twoWeeksAgo && expenseDate < oneWeekAgo;
    })
    .sort((a, b) => b.expenseAmount - a.expenseAmount)
    .slice(0, 5);

  return (
    <div className="p-5 bg-white">
      <h2 className="text-xl font-bold mb-4">This Week</h2>
      <div className="h-48 overflow-y-scroll">
        {expensesThisWeek.map((expense, index) => (
          <ExpenseItem
            key={index}
            categoryIcon={expense.categoryIcon || '💸'} // Add a default icon
            categoryTitle={expense.expenseName}
            expenseDate={new Date(expense.expenseDate).toLocaleTimeString()}
            expenseDay={new Date(expense.expenseDate).toLocaleDateString('en-US', { weekday: 'long' })}
            expenseAmount={`-$${expense.expenseAmount}`}
          />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6 mb-4">Last Week</h2>
      <div className="h-48 overflow-y-scroll">
        {expensesLastWeek.map((expense, index) => (
          <ExpenseItem
            key={index}
            categoryIcon={expense.categoryIcon || '💸'} // Add a default icon
            categoryTitle={expense.expenseName}
            expenseDate={new Date(expense.expenseDate).toLocaleTimeString()}
            expenseDay={new Date(expense.expenseDate).toLocaleDateString('en-US', { weekday: 'long' })}
            expenseAmount={`-$${expense.expenseAmount}`}
          />
        ))}
      </div>
    </div>
  );
}

export default WeeklyExpenses;


