import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryWeighting = () => {
    const allCategories = [
        { categoryName: 'Food and Drinks', categoryAmount: '872.40', percentageWidth: '80%' },
        { categoryName: 'Shopping', categoryAmount: '1,378.20', percentageWidth: '90%' },
        { categoryName: 'Housing', categoryAmount: '928.50', percentageWidth: '70%' },
        { categoryName: 'Transportation', categoryAmount: '420.70', percentageWidth: '50%' },
        { categoryName: 'Car', categoryAmount: '520.00', percentageWidth: '60%' },
      ];

  return (
    <div className='bg-gray-200 p-5 rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Where your money goes?</h2>
        {allCategories.map((category, index) => (
        <CategoryItem key={index} {...category} />
      ))}
    </div>
  )
}

export default CategoryWeighting;
