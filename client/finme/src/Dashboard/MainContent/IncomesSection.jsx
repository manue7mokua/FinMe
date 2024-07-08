import React from 'react';

const IncomesSection = () => {
  return (
    <div className='flex flex-col w-[438px] h-[538px] items-start gap-[15px] pl-6 pr-[34px] py-5 relative bg-white rounded-[17px]'>
    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#262a41] text-[40px] tracking-[0.67px] leading-[50px] whitespace-nowrap">
        Incomes
    </div>
    <div className="relative w-[462px] h-[498px] mb-[-65.00px] mr-[-82.00px]">
        <div className="absolute w-[456px] h-[39px] top-0 left-0">
            <div className="absolute w-[109px] h-[39px] top-0 left-[276px]">
                <div className="w-[109px] h-9 top-0 bg-[#dc3434] rounded-[10px] absolute left-0" />
                <div className="p-2.5 absolute top-0 left-1.5 rounded-[10px] inline-flex items-center justify-center gap-2.5">
                    <div className="relative flex-[0_0_auto] inline-flex items-center justify-center gap-2.5">
                      <button className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-backgroundsprimary text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        ADD NEW
                      </button>
                    </div>
                </div>
            </div>
            <div className="absolute w-[43px] h-[27px] top-0 left-0">
                <div className="absolute w-[19px] top-0 left-[11px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#dc3434] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    All
                </div>
                <div className="w-[41px] h-0.5 top-[25px] bg-[#dc3434] rounded-[10px] absolute left-0" />
            </div>
            <div className="absolute w-[33px] top-0 left-[63px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#157afe] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Paid
            </div>
        </div>
        <table className='mt-10 w-full'>
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
    </div>
  )
}

export default IncomesSection;
