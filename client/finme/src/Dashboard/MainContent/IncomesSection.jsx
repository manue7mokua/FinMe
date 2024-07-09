import React from 'react';

const IncomesSection = () => {
  return (
    <div className='flex flex-col w-[438px] h-[538px] items-start gap-[15px] pl-6 pr-[34px] py-5 relative bg-white rounded-[17px] overflow-scroll'>
    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#262a41] text-[40px] tracking-[0.67px] leading-[50px] whitespace-nowrap">
        Incomes
    </div>
    <div className="relative w-[462px] h-[498px] mb-[-65.00px] mr-[-82.00px]">
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
        {/* First list item */}
        <div className="w-[427px] h-[58px] top-[155px] absolute left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                Bananas One
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                ogbananas.com
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                $200
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                USD
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
        {/* Second list item */}
        <div className="w-[427px] h-[58px] top-[213px] absolute left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                Bananas Two
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                ogbananas.com
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                $250
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                USD
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
        {/* Third list item */}
        <div className="w-[427px] h-[58px] top-[270px] absolute left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                Bananas Three
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                ogbananas.com
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                $300
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                USD
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
        {/* Fourth list item */}
        <div className="w-[427px] h-[58px] top-[326px] absolute left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                Bananas Four
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                ogbananas.com
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                $350
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                USD
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
        {/* Fifth list item */}
        <div className="w-[427px] h-[58px] top-[383px] absolute left-0 rounded-[10px]">
          <div className="absolute w-96 h-[57px] top-0 left-0 overflow-hidden">
            <div className="relative w-[1100px] h-[60px]">
              <div className="absolute w-[1100px] h-[60px] top-0 left-0">
                <div className="relative w-96 h-[50px] top-[7px]">
                  <div className="absolute w-5 h-5 top-[13px] left-5 rounded-[3px] border-[1.5px] border-solid border-fontsprimary-icon" />
                </div>
              </div>
              <div className="absolute w-[200px] top-2.5 left-[105px] [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] leading-[normal]">
                Bananas Five
              </div>
              <div className="absolute w-[200px] top-8 left-[105px] [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-sm tracking-[0.70px] leading-[normal]">
                ogbananas.com
              </div>
              <div className="absolute w-[15px] h-[15px] top-[23px] left-[60px] bg-[url(/union.svg)] bg-[100%_100%]" />
              <div className="w-20 top-1.5 left-72 [font-family:'Inter-Medium',Helvetica] font-medium text-fontsprimary text-sm tracking-[0] absolute text-right leading-[normal]">
                $400
              </div>
              <div className="top-[31px] left-[281px] absolute w-20 [font-family:'Inter-Regular',Helvetica] font-normal text-fontsprimary-variant text-xs text-right tracking-[0.60px] leading-[normal]">
                USD
              </div>
            </div>
          </div>
          <div className="w-96 h-px top-[57px] bg-[#d9d5ec] absolute left-0" />
        </div>
    </div>
    </div>
  )
}

export default IncomesSection;
