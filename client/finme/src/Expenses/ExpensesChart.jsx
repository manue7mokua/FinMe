import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'

const ExpensesChart = () => {
    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
        datasets: [{
          label: 'Expenses',
          data: [12, 19, 3, 5, 2, 3, 10, 5, 8, 9, 7, 4, 3, 10, 5, 12, 15, 8, 9, 4, 3, 10, 5, 12, 15],
          backgroundColor: '#4CAF50',
        }]
      };
  return (
    <div className='w-full max-w-xl my-6 mx-auto bg-white'>
        <Bar data={data}/>
    </div>
  )
}

export default ExpensesChart;
