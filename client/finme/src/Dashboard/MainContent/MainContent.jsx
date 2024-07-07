import React from 'react';
import TopSection from './TopSection';
import IncomesSection from './IncomesSection';
import ExpensesSection from './ExpensesSection';

const MainContent = () => {
  return (
    <div className='flex-1 p-6 bg-gray-100'>
        <TopSection />
        <div className='flex space-x-6 mt-6'>
            <IncomesSection />
            <ExpensesSection />
        </div>
        <div>
            {/* Watchlist */}
            {/* IncomeComparisonChart */}
        </div>
    </div>
  )
}

export default MainContent;
