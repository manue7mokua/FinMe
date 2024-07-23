import React from 'react';

const IncomeListItem = ({
  incomeName,
  incomeType,
  incomeDateRange,
  incomeAmount
}) => {
  return (
    <div className="flex justify-between items-center w-full bg-gray-100 p-3 rounded-lg">
      <div className="text-sm font-medium text-gray-900">{incomeName}</div>
      <div className="text-sm font-medium text-gray-900">{incomeType}</div>
      <div className="text-sm font-medium text-gray-900">{incomeDateRange}</div>
      <div className="text-sm font-medium text-gray-900 text-right">{incomeAmount}</div>
    </div>
  );
};

export default IncomeListItem;