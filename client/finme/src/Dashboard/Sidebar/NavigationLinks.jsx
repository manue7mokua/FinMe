import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <nav className='w-[119px] h-[292px] relative flex flex-col justify-evenly pt-20 '>
        <div className='text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/expenses'>Expenses</Link>
        </div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/wallets'>Wallets</Link>
        </div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/incomes'>Incomes</Link>
        </div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/plan'>Plan</Link>
        </div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'>
          <Link to='/settings'>Settings</Link>
        </div>
    </nav>
  )
}

export default NavigationLinks;

