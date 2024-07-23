import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import IncomesSection from './IncomesSection';

const Incomes = () => {
  return (
    <div className='h-screen flex bg-black'>
        <Sidebar />
        <div className='w-full flex items-center justify-center'>
            <IncomesSection />
        </div>

    </div>
  )
}

export default Incomes;
