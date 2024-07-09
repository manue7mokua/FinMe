import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CreateCard from './CreateCard';

const Wallets = () => {
  return (
    <div className='h-screen flex bg-black'>
        <Sidebar />
        <div className='flex flex-row gap-10 p-20 items-start justify-center'>
           <CreateCard />
        </div>

    </div>
  )
}

export default Wallets;
