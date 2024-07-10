import React from 'react';

const ExpensesHeader = () => {
  return (
    <div className=''>
      <div className='flex flex-row p-5 bg-white w-fit'>
      <div className="flex flex-col items-start p-5 bg-white">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <p className="mt-2">01 - 25 March, 2020</p>
      </div>
      <div className="flex gap-2 mt-3">
          <img src="icon1.png" alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src="icon2.png" alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src="icon3.png" alt="category-icon" className="w-10 h-10 rounded-full" />
          <img src="icon4" alt="category-icon" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default ExpensesHeader;
