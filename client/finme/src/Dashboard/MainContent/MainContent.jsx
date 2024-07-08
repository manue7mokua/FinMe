import React from 'react';
import TopSection from './TopSection';
import IncomesSection from './IncomesSection';
import ExpensesSection from './ExpensesSection';
import Watchlist from './Watchlist';
import IncomeComparisonChart from './IncomeComparisonChart';

const MainContent = () => {
  return (
    <div className='flex-1 p-6 bg-gray-100 overflow-auto'>
        <div className='flex space-x-6 mt-6'>
            <TopSection />
            <IncomesSection />
            <ExpensesSection />
        </div>
        <div className='flex space-x-6 mt-6'>
            <Watchlist />
            <IncomeComparisonChart />
        </div>
    </div>
  )
}

export default MainContent;
