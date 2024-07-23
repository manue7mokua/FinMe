import React from 'react';

const ExpenseItem = ({ categoryIcon, categoryTitle, expenseDate, expenseDay, expenseAmount }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <span className="text-2xl mr-2">{categoryIcon}</span>
        <div>
          <p className="font-semibold">{categoryTitle}</p>
          <p className="text-sm text-gray-500">{expenseDay} - {expenseDate}</p>
        </div>
      </div>
      <p className="font-semibold text-red-500">{expenseAmount}</p>
    </div>
  );
}

export default ExpenseItem;

