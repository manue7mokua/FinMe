import React from 'react';
import PropTypes from 'prop-types';
import deleteicon from '../../assets/delete.png'

const StockListItem = ({ stockId, companyIcon, companyName, companyAbbrev, stockPrice, performancePercentage, onDelete }) => {
  return (
    <div className='flex justify-between items-center w-full bg-gray-100 p-3 rounded-lg'>
        <div className='flex items-center gap-2'>
            <img src={companyIcon} alt={`${companyName} icon`} className='w-6 h-6' />
            <div>
                <div className='text-sm font-medium text-gray-900'>{companyName}</div>
                <div className='text-xs text-gray-500'>{companyAbbrev}</div>
            </div>
        </div>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='text-sm font-medium text-gray-900'>{stockPrice}</div>
                <div className='text-xs text-green-500'>{performancePercentage}</div>
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
