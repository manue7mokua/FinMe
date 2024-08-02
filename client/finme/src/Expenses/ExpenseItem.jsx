import React from 'react';
import transporticon from '../assets/transport.png';
import billsicon from '../assets/bills.png';
import personalicon from '../assets/personal.png';
import foodicon from '../assets/food.png';
import entertainmenticon from '../assets/entertainment.png';
import deleteicon from '../assets/delete.png';

const ExpenseItem = ({ expenseId, categoryTitle, categoryName, expenseDate, expenseDay, expenseAmount, onDelete }) => {
  const categoryIcons = {
    'Transport': transporticon,
    'Bills': billsicon,
    'Personal': personalicon,
    'Food': foodicon,
    'Entertainment': entertainmenticon,
  };  

  const icon = categoryIcons[categoryTitle] || '💸';

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <span className="w-10 h-10 rounded-full"><img src={icon} className='w-8'></img></span>
        <div>
          <div className='flex flex-row gap-2'>
            <p className="font-bold text-yellow-800">{categoryTitle}</p>
            <p className="font-semibold">-</p>
            <p className="font-semibold">{categoryName}</p>
          </div>
          <p className="text-sm text-gray-500">{expenseDay} - {expenseDate}</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between gap-4'>
        <p className="font-semibold text-red-600">{expenseAmount}</p>
        <button onClick={() => onDelete(expenseId)}>
          <img src={deleteicon} alt="Delete" className="w-6 h-6" />
        </button>
      </div>
      
    </div>
  );
}

export default ExpenseItem;

