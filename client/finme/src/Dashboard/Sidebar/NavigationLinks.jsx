import React from 'react';

const NavigationLinks = () => {
  return (
    <nav className='mt-6'>
        <ul className='space-y-14'>
            <li className='font-bold text-lg'>Dashboard</li>
            <li className='text-gray-400'>Expenses</li>
            <li className='text-gray-400'>Wallets</li>
            <li className='text-gray-400'>Incomes</li>
            <li className='text-gray-400'>Plan</li>
            <li className='text-gray-400'>Settings</li>
        </ul>
    </nav>
  )
}

export default NavigationLinks;
