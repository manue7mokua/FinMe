import React from 'react';

const NavigationLinks = () => {
  return (
    <nav className='w-[119px] h-[292px] relative flex flex-col justify-evenly pt-20 '>
        <div className='text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Dashboard</a></div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Expenses</a></div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Wallets</a></div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Incomes</a></div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Plan</a></div>
        <div className='opacity-50 text-white text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4'><a href='#'>Settings</a></div>
    </nav>
  )
}

export default NavigationLinks;
