import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import CategoryWeighting from './CategoryWeighting';
import BotQuery from '../Dashboard/MainContent/BotQuery';

const Expenses = () => {
  return (
    <div className='h-screen flex bg-black'>
        <Sidebar />
        <div className="container mx-auto p-5">
            
            <div className="flex flex-col lg:flex-row">

                <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-5 lg:mt-0">
                    <CategoryWeighting />
                    <BotQuery />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Expenses;
