import React from 'react';

const CategoryItem = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <div className='flex flex-row justify-between'>
            <p className='font-bold'>category name</p>
            <span className="text-right block mt-1">category amount</span>
        </div>

    </div>
  )
}

export default CategoryItem;
