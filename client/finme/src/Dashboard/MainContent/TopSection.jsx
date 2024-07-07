import React from 'react';

const TopSection = () => {
  return (
    <div className='flex space-x-6'>
        <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>$25,000</h3>
                <span className='text-gray-400'>July, 2024</span>
            </div>
            <div className='mt-4'>
                <p>Target Achieved: $12,500</p>
                <p>Monthly Target: $18,000</p>
                <div className='mt-4'>
                    <p>Target vs Achievement</p>
                    <div className='relative pt-1'>
                        <div className='overlflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200'>
                            <div style={{ width: '60%' }} className='shadow-none flex flex-col text-center
                            whitespace-nowrap text-white justify-center bg-pink-500'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection;
