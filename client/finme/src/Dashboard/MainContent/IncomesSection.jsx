import React, { useState, useEffect } from 'react';
import IncomeListItem from './IncomeListItem';
import AddIncomeModal from './AddIncomeModal';
import axios from 'axios';

const IncomesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);

  const refreshIncomes = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const userId = decoded.id;

    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}/incomeInfo`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setIncomes(response.data);
    } catch (err) {
      console.error('Failed to fetch incomes', err);
    }
  };

  useEffect(() => {
    refreshIncomes();
  }, []);

  return (
    <div className='flex flex-col w-full h-full items-start gap-[15px] pl-6 pr-[34px] py-5 relative bg-white rounded-[17px] overflow-scroll'>
      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#262a41] text-[40px] tracking-[0.67px] leading-[50px] whitespace-nowrap">
        Incomes
      </div>
      <div className="relative w-full h-full mb-[-65.00px] mr-[-82.00px]">
        <div className="absolute w-[87px] top-[127px] left-[105px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-fontsprimary-variant text-xs tracking-[0.60px] leading-[normal] whitespace-nowrap">
          NAME
        </div>
        <div className="w-[88px] top-[127px] left-[291px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-fontsprimary-variant text-xs tracking-[0.60px] whitespace-nowrap absolute text-right leading-[normal]">
          AMOUNT
        </div>
        <div className="absolute w-[456px] h-[39px] top-0 left-0">
          <div className="absolute w-[109px] h-[39px] top-0 left-[276px]">
            <div className="w-[109px] h-9 top-0 bg-[#dc3434] rounded-[10px] absolute left-0" />
            <div className="p-2.5 absolute top-0 left-1.5 rounded-[10px] inline-flex items-center justify-center gap-2.5">
              <div className="relative flex-[0_0_auto] inline-flex items-center justify-center gap-2.5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-backgroundsprimary text-base tracking-[0] leading-[normal] whitespace-nowrap"
                >
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
        <div className='flex flex-col gap-1'>
          {incomes.map((income, index) => (
            <IncomeListItem
              key={index}
              incomeName={income.incomeName}
              incomeDateRange={income.incomeDateRange}
              incomeAmount={income.incomeAmount}
              incomeCurrencyDenomination={income.incomeCurrencyDenomination}
            />
          ))}
        </div>
      </div>
      <AddIncomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshIncomes={refreshIncomes}
      />
    </div>
  );
};

export default IncomesSection;