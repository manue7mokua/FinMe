import React from 'react';

const IncomesSection = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
        <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Incomes</h3>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Add New</button>
        </div>
        <table className='mt-4 w-full'>
            <thead>
                <tr className='text-left text-gray-400'>
                    <th className='pb-2'>Name</th>
                    <th className='pb-2'>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='py-2'>Bananas One</td>
                    <td className='py-2'>$200 USD</td>
                </tr>
                <tr>
                    <td className='py-2'>Pineapples Two</td>
                    <td className='py-2'>$300 USD</td>
                </tr>
                <tr>
                    <td className='py-2'>Peaches three</td>
                    <td className='py-2'>$250 USD</td>
                </tr>
                <tr>
                    <td className='py-2'>Grapefruit four</td>
                    <td className='py-2'>$200 USD</td>
                </tr>
                <tr>
                    <td className='py-2'>Bananas Nine</td>
                    <td className='py-2'>$100 USD</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default IncomesSection;
