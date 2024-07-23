import React from 'react';
import PropTypes from 'prop-types';
import deleteicon from '../../assets/delete.png'

const StockListItem = ({ stockId, companyIcon, companyName, companyAbbrev, stockPrice, performancePercentage, onDelete }) => {
  return (
    <div className='inline-flex items-center gap-[221px] relative'>
        <div className='w-[62px] items-center gap-1.5 flex relative'>
            <img src={companyIcon} alt={`${companyName} icon`} className='relative w-6 h-6' />
            <p className='relative w-fit mt-[-1.00px] mr-[-63.00px] [font-family:"Everett-Medium", Helvetica] font-medium text-transparent text-xs tracking-[0] leading-normal'>
                <span className='text-[#2c2c2c]'>
                    {companyName}
                    <br/>
                </span>
                <span className='text-[#828282]'>{companyAbbrev}</span>
            </p>
        </div>
        <div className='flex flex-row items-center justify-between gap-4'>
          <div className='flex flex-col w-[33px] items-end justify-center relative'>
            <div className='relative w-fit mt-[-11.00px] [font-family:"Everett-Regular", Helvetica] font-normal text-[#2c2c2c] text-xs text-right tracking-[0] leading-normal whitespace-nowrap'>
                {stockPrice}
            </div>
            <div className='relative w-fit [font-family:"Everett-Regular", Helvetica] font-normal text-[#77b900] text-xs text-right tracking-[0] leading-normal whitespace-nowrap'>
                {performancePercentage}
            </div>
            </div>
            <button onClick={() => onDelete(stockId)}>
                <img src={deleteicon} alt="Delete" className="w-6 h-6" />
            </button>  
        </div>
        
    </div>
  )
}

StockListItem.propTypes = {
    companyName: PropTypes.string,
    companyAbbrev: PropTypes.string,
    stockPrice: PropTypes.string,
    performancePercentage: PropTypes.string
}

export default StockListItem;
