import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <nav className='w-full flex flex-col justify-center items-center'>
      <NavLink
        to='/dashboard'
        className={({ isActive }) =>
          isActive ? 'text-goldenrod' : 'text-white opacity-50'
        }
      >
        <div className='text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4 hover:text-orange-400'>
          Dashboard
        </div>
      </NavLink>
      <NavLink
        to='/expenses'
        className={({ isActive }) =>
          isActive ? 'text-goldenrod' : 'text-white opacity-50'
        }
      >
        <div className='text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4 hover:text-orange-400'>
          Expenses
        </div>
      </NavLink>
      <NavLink
        to='/wallets'
        className={({ isActive }) =>
          isActive ? 'text-goldenrod' : 'text-white opacity-50'
        }
      >
        <div className='text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4 hover:text-orange-400'>
          Wallets
        </div>
      </NavLink>
      <NavLink
        to='/incomes'
        className={({ isActive }) =>
          isActive ? 'text-goldenrod' : 'text-white opacity-50'
        }
      >
        <div className='text-[25px] font-semibold font-["Poppins"] leading-[35px] mb-4 hover:text-orange-400'>
          Incomes
        </div>
      </NavLink>
    </nav>
  )
}

export default NavigationLinks;


