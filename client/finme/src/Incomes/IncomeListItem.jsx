import React from 'react';
import deleteicon from '../assets/delete.png';

const IncomeListItem = ({
  incomeId,
  incomeName,
  incomeType,
  incomeDateRange,
  incomeAmount,
  onDelete
}) => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center w-full bg-gray-100 p-3 rounded-lg">
      <div className="text-sm font-medium text-gray-900">{incomeName}</div>
      <div className="text-sm font-medium text-gray-900">{incomeType}</div>
      <div className="text-sm font-medium text-gray-900">{incomeDateRange}</div>
      <div className="text-sm font-medium text-gray-900">{incomeAmount}</div>
      <button onClick={() => onDelete(incomeId)}>
        <img src={deleteicon} alt="Delete" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default IncomeListItem;