import React from 'react';

const BotQuery = ({ onButtonClick }) => {
  return (
    <div className='w-[244px] h-[183px] bg-white rounded-lg flex flex-col justify-evenly items-center'>
        <div className='w-full px-8 [font-family:"Poppins-Semibold", Helvetica] font-semibold text-[#2c2c2c] flex flex-wrap items-center justify-center'>
            How you are doing :)
        </div>
        <div className='w-[152px] p-2.5 bg-black rounded-lg flex justify-center'>
            <button onClick={onButtonClick} className='[font-family:"Poppins-Semibold", Helvetica] font-semibold text-white text-[13px] tracking-[1.50px] leading-normal'>GET INSIGHTS</button>
        </div>
    </div>
  );
};

export default BotQuery;