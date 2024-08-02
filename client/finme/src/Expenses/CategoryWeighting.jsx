import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import '../loadingAnimation.css';

const CategoryWeighting = ({ categorySums }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const calculatePercentageWidth = (amount, maxAmount) => {
    return `${(amount / maxAmount) * 100}%`;
  };

  const maxAmount = Math.max(...categorySums.map(category => category._sum.expenseAmount)) * 2;

  return (
    <div className='bg-white w-full h-full p-5 rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Where your money goes?</h2>
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="cube">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col'>
          {categorySums.map((category, index) => (
          <CategoryItem 
            key={index}
            categoryName={category.expenseType}
            categoryAmount={category._sum.expenseAmount.toFixed(2)}
            percentageWidth={calculatePercentageWidth(category._sum.expenseAmount, maxAmount)}
          />
        ))}
        </div>
        
      )}
    </div>
  );
}

export default CategoryWeighting;