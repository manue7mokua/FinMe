import React from 'react';
import transporticon from '../assets/transport.png';
import billsicon from '../assets/bills.png';
import personalicon from '../assets/personal.png';
import foodicon from '../assets/food.png';
import entertainmenticon from '../assets/entertainment.png';

const ExpenseItem = ({ categoryTitle, categoryName, expenseDate, expenseDay, expenseAmount }) => {
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
          <p className="font-semibold">{categoryName}</p>
          <p className="text-sm text-gray-500">{expenseDay} - {expenseDate}</p>
        </div>
      </div>
      <p className="font-semibold text-red-500">{expenseAmount}</p>
    </div>
  );
}

export default ExpenseItem;

