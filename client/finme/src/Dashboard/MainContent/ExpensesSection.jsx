import React from 'react';

const ExpensesSection = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
        <h3 className='text-xl font-bold'>Expenses</h3>
        <ul className='mt-4 space-y-4'>
            <li className='flex justify-between'>
                <span>Utilities</span>
                <span>$650.00</span>
            </li>
            <li className='flex justify-between'>
                <span>Housing</span>
                <span>$1150.00</span>
            </li>
            <li className='flex justify-between'>
                <span>Subscriptions</span>
                <span>$350.00</span>
            </li>
            <li className='flex justify-between'>
                <span>Self-care</span>
                <span>$420.00</span>
            </li>
            <li className='flex justify-between'>
                <span>Food</span>
                <span>$150.00</span>
            </li>
            <li className='flex justify-between'>
                <span>Trips</span>
                <span>$3650.00</span>
            </li>
        </ul>
    </div>
  )
}

export default ExpensesSection;
