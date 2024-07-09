import React from 'react';

const BotQuery = () => {
  return (
    <div className='w-[244px] h-[183px] bg-white rounded-lg flex flex-col justify-evenly items-center'>
        <div className='w-[152px] [font-family:"Poppins-Semibold", Helvetica] font-semibold text-[#2c2c2c] text-base tracking-[0.34px] leading-normal'>
            Got any questions?
        </div>
        <div className=' w-[152px] p-2.5 bg-black rounded-lg'>
            <button className='[font-family:"Poppins-Semibold", Helvetica] font-semibold text-white text-[13px] tracking-[1.50px] leading-normal'>TALK TO DONNA</button>
        </div>
    </div>
  )
}

export default BotQuery;
