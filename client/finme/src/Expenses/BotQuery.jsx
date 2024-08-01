import React, { useState } from 'react';
import InsightsModal from './InsightsModal';
import wizardLogo from '../assets/wizard.png';

const BotQuery = ({ onButtonClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className='w-full h-full bg-white rounded-lg flex flex-col justify-evenly items-center'>
      <img src={wizardLogo} alt='image of a wizard' className='size-32'></img>
        <div className='w-[80%] px-8 [font-family:"Poppins-Semibold", Helvetica] font-semibold text-[#2c2c2c] flex flex-wrap items-center justify-center'>
          <p>Unveil the Mysteries of Your</p>
          <p>Fiscal Fortunes :)</p>
        </div>
        <div className='w-[152px] p-2.5 bg-black rounded-lg flex justify-center'>
            <button onClick={onButtonClick} className='[font-family:"Poppins-Semibold", Helvetica] font-semibold text-white text-[13px] tracking-[1.50px] leading-normal'>GET INSIGHTS</button>
        </div>
        <InsightsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  );
};

export default BotQuery;