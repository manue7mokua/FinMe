import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'

const ExpensesChart = () => {
  return (
    <div className='w-full max-w-xl my-6 mx-auto'>
        <Bar data/>
    </div>
  )
}

export default ExpensesChart;
