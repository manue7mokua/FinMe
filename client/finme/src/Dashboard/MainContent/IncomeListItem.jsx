import React from 'react';

const IncomeListItem = ({
  incomeName,
  incomeType,
  incomeDateRange,
  incomeAmount,
  incomeCurrencyDenomination
}) => {
  return (
    <div className="w-[427px] h-[58px] top-[155px] relative left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                {incomeName}
              </div>
              <div className="absolute w-[200px] top-2.5 left-[305px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
              {incomeType}
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                {incomeDateRange}
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                {incomeAmount}
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                {incomeCurrencyDenomination}
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
  )
}

export default IncomeListItem;
