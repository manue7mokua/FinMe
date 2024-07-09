import React from 'react';
import arrowUpRight from '../assets/arrow-up-right.svg';
import mastercardIcon from '../assets/Mastercard-Logo.png';

const CreateCard = ({
    bankAccountName,
    bankAccountBalance,
    bankAccountType,
    bankCardNumber
}) => {
  return (
    <div className='relative flex flex-col w-[352px] h-[267px] items-start gap-2'>
        <div className={`w-full flex flex-col items-start justify-start pt-0 px-0 pb-[35px] box-border gap-[8px] leading-[normal] tracking-[normal] text-left text-3xl text-gray-02 font-bold-16-24`}>
      <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit">
        Bank of America
      </h3>
      <section className="self-stretch shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] rounded-lg bg-white flex flex-col items-start justify-start py-5 px-6 text-left text-3xl text-default-black font-bold-16-24">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-2.5 gap-[20px] border-b-[1px] border-solid border-gray-06">
            <div className="relative leading-[32px] capitalize font-extrabold inline-block min-w-[80px] whitespace-nowrap">
              $2,549
            </div>
            <a className="[text-decoration:none] relative text-sm leading-[20px] capitalize font-medium text-secondary text-right inline-block min-w-[54px]">
              Balance
            </a>
          </div>
          <div className="self-stretch rounded bg-darkgoldenrod flex flex-row items-center justify-between p-4 gap-[8px] text-sm text-special-bg2">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[120px] relative leading-[20px] capitalize font-medium inline-block">
                Account type
              </div>
              <b className="w-[120px] relative text-base leading-[24px] capitalize inline-block text-white">
                Debit Card
              </b>
              <div className="relative leading-[20px] capitalize font-medium">
                **** **** **** 2598
              </div>
            </div>
            <div className="w-32 flex flex-col items-end justify-center gap-[12px] text-right text-base text-white">
              <div className="h-7 flex flex-row items-center justify-center py-0 px-0 box-border">
                <img
                  className="h-8 w-12 relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src={mastercardIcon}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <b className="flex-1 relative leading-[24px] capitalize whitespace-nowrap">
                  $2,549
                </b>
                <div className="h-6 w-6 rounded-[20px] bg-white flex flex-row items-start justify-start p-1 box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={arrowUpRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default CreateCard
