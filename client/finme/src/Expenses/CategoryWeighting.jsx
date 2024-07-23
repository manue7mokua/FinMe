import React from 'react';
import CategoryItem from './CategoryItem';
import transporticon from '../assets/busicon.svg';
import billsicon from '../assets/houseicon.svg';
import personalicon from '../assets/Shopping.svg';
import foodicon from '../assets/foodicon.svg';
import entertainmenticon from '../assets/entertainment.svg';

const CategoryWeighting = ({ categorySums }) => {
  const calculatePercentageWidth = (amount, maxAmount) => {
    return `${(amount / maxAmount) * 100}%`;
  };

  const maxAmount = Math.max(...categorySums.map(category => category._sum.expenseAmount)) * 2;

  return (
    <div className='bg-gray-200 p-5 rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Where your money goes?</h2>
      {categorySums.map((category, index) => (
        <CategoryItem 
          key={index}
          categoryName={category.expenseType}
          categoryAmount={category._sum.expenseAmount.toFixed(2)}
          percentageWidth={calculatePercentageWidth(category._sum.expenseAmount, maxAmount)}
        />
      ))}
    </div>
  );
}

export default CategoryWeighting;

