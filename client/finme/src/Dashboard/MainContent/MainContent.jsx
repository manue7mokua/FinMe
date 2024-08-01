import React from 'react';
import TopSection from './TopSection';
import IncomesSection from '../../Incomes/IncomesSection';
import ExpensesSection from './ExpensesSection';
import Watchlist from './Watchlist';
import ExpenseComparisonChart from './ExpenseComparisonChart';

const MainContent = () => {
  return (
    <>
    <div className='flex flex-auto p-6 bg-black text-black'>
      <div className='flex flex-row gap-7 items-center justify-center flex-grow'>
        <div className='flex flex-col items-center justify-center gap-7 h-full'>
          <div className='flex-grow flex flex-row gap-7'>
            <div className='flex flex-col gap-7 w-full'>
              <TopSection/>
              <Watchlist/>
            </div>
            <ExpensesSection/>
          </div>
          <ExpenseComparisonChart/>
        </div>
       <IncomesSection />
      </div>
    </div>
    </>

  )
}

export default MainContent;
