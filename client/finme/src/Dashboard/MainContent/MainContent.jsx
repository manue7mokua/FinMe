import React from 'react';
import TopSection from './TopSection';
import IncomesSection from './IncomesSection';
import ExpensesSection from './ExpensesSection';
import Watchlist from './Watchlist';
import IncomeComparisonChart from './IncomeComparisonChart';
import BotQuery from './BotQuery';

const MainContent = () => {
  return (
    <>
    <div className='flex-1 p-6 bg-black text-black overflow-auto flex'>
      <div className='flex flex-row gap-10 flex-grow'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-10'>
              <TopSection/>
              <Watchlist/>
            </div>
            <IncomesSection className='flex-grow'/>
          </div>
          <IncomeComparisonChart/>
        </div>
        <div className='flex flex-col gap-10'>
          <ExpensesSection/>
          <BotQuery/>
        </div>
      </div>
    </div>
    </>

  )
}

export default MainContent;
