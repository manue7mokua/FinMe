import React from 'react';
import ExpenseItem from './ExpenseItem';

const WeeklyExpenses = ({ expenses }) => {
  const expensesThisWeek = expenses.filter(expense => {
    const expenseDate = new Date(expense.expenseDate);
    const now = new Date();
    const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
    return expenseDate >= oneWeekAgo;
  });

  const expensesLastWeek = expenses.filter(expense => {
    const expenseDate = new Date(expense.expenseDate);
    const now = new Date();
    const twoWeeksAgo = new Date(now.setDate(now.getDate() - 14));
    const oneWeekAgo = new Date(now.setDate(now.getDate() + 7));
    return expenseDate >= twoWeeksAgo && expenseDate < oneWeekAgo;
  });

  return (
    <div className="p-5 bg-white">
      <h2 className="text-xl font-bold mb-4">This week...</h2>
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
      <h2 className="text-xl font-bold mt-6 mb-4">Last Week</h2>
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
  )
}

export default WeeklyExpenses;

