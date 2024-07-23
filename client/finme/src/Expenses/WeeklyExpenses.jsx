import React from 'react';
import ExpenseItem from './ExpenseItem';

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
            categoryTitle={expense.expenseType}
            categoryName={expense.expenseName}
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
            categoryTitle={expense.expenseType}
            categoryName={expense.expenseName}
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


