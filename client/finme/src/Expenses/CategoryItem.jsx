import React from 'react';

const CategoryItem = ({
    categoryName,
    categoryAmount,
    percentageWidth
}) => {
  return (
    <div className="flex flex-col justify-between items-center p-5 border-b border-gray-200">
        <div className='w-full flex flex-row items-center justify-between'>
            <p className='font-bold'>{categoryName}</p>
            <span className="text-right text-gray-800 block mt-1">{categoryAmount}</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: percentageWidth }}></div>
        </div>
    </div>
  )
}

export default CategoryItem;
