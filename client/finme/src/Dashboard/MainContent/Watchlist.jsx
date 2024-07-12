import React from 'react';
import StockListItem from './StockListItem';
import amazonIcon from '../../assets/amazon-icon.svg';
import cocacolaIcon from '../../assets/coca-cola.svg';
import bmwIcon from '../../assets/bmw.svg';
import microsoftIcon from '../../assets/microsoft.svg';

const Watchlist = () => {
  return (
    <div className='relative w-[380px] h-[267px] bg-white rounded-lg overflow-scroll'>
        <div className='inline-flex flex-row h-3.5 justify-center gap-1.5 p-2 pb-4'>
            <div className='relative w-fit mt-[4px] mb-[-2.18px] [font-family:"Everett-Medium", Helvetica] font-bold text-[#2c2c2c] text-lg text-center tracking-[0] leading-normal'>
                Watchlist
            </div>
        </div>
        <div className='p-4 inline-flex flex-col w-[380px] h-[291px] items-start justify-center gap-4 absolute top-[30px] left-0 overflow-scroll'>
            <StockListItem
                companyIcon={amazonIcon}
                companyName={'Amazon.com, Inc'}
                companyAbbrev={'AMZN'}
                stockPrice={'$102.24'}
                performancePercentage={'+3.02'}
            />
            <StockListItem
                companyIcon={cocacolaIcon}
                companyName={'Coca-Cola Co'}
                companyAbbrev={'KO'}
                stockPrice={'$60.49'}
                performancePercentage={'+0.32'}
            />
            <StockListItem
                companyIcon={bmwIcon}
                companyName={'Bayerische Motoren Werke AG'}
                companyAbbrev={'BMW'}
                stockPrice={'$92.94'}
                performancePercentage={'+0.59'}
            />
            <StockListItem
                companyIcon={microsoftIcon}
                companyName={'Microsoft Corp'}
                companyAbbrev={'MSFT'}
                stockPrice={'$248.16'}
                performancePercentage={'+0.16'}
            />
        </div>
    </div>
  )
}

export default Watchlist;
