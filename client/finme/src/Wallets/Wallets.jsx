import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CreateCard from './CreateCard';

const Wallets = () => {
  return (
    <div className='h-screen flex bg-black'>
        <Sidebar />
        <div className='flex items-center justify-around'>
            <div className='flex flex-row gap-10 p-20 items-center justify-evenly flex-wrap'>
            <CreateCard
                bankAccountName = 'Bank of America'
                bankAccountBalance = '$22,509'
                bankAccountType = 'Checking Account'
                bankCardNumber = '**** **** **** 7158'
            />
            <CreateCard
                bankAccountName = 'Chase Bank'
                bankAccountBalance = '$516'
                bankAccountType = 'Credit Card'
                bankCardNumber = '**** **** **** 0692'
            />
            <CreateCard
                bankAccountName = 'Citi Bank'
                bankAccountBalance = '$7,419'
                bankAccountType = 'Savings Account'
                bankCardNumber = '**** **** **** 1267'
            />
            <CreateCard
                bankAccountName = 'Bank of America'
                bankAccountBalance = '$1,288'
                bankAccountType = 'Checking Account'
                bankCardNumber = '**** **** **** 2164'
            />
            </div>
        </div>
    </div>
  )
}

export default Wallets;
