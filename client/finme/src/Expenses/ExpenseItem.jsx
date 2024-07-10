import React from 'react';

const ExpenseItem = ({
    categoryIcon,
    categoryTitle,
    expenseDate,
    expenseDay,
    expenseAmount
}) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-200">
      <div className="flex items-center">
        <div className="text-2xl">{categoryIcon}</div>
        <div className="ml-3">
          <p className="font-bold">{categoryTitle}</p>
          <span className="text-sm text-gray-500">{expenseDate} • {expenseDay}</span>
        </div>
      </div>
      <div className="font-bold">{expenseAmount}</div>
    </div>
  )
}

export default ExpenseItem;
