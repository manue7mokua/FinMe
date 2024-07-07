import React from 'react';

const Watchlist = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
        <h3 className='text-xl font-bold'>Watchlist</h3>
        <ul className='mt-4 space-y-4'>
            <li className='flex justify-between'>
                <span>Amazon.com, Inc.</span>
                <span className='text-green-500'>+3.02</span>
            </li>
            <li className='flex justify-between'>
                <span>Coca-Cola Co</span>
                <span className='text-red-500'>-0.32</span>
            </li>
            <li className='flex justify-between'>
                <span>Meta Platforms, Inc.</span>
                <span className='text-green-500'>+0.59</span>
            </li>
            <li className='flex justify-between'>
                <span>Microsoft Corp</span>
                <span className='text-green-500'>+0.16</span>
            </li>
        </ul>
    </div>
  )
}

export default Watchlist;
