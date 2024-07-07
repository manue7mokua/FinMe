import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const IncomeComparisonChart = () => {
    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'This week',
                backgroundColor: 'rgba(255, 99, 132, 0.20)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Last week',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Weekly Income Comparison'
            }
        }
    };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
        <h3 className='text-xl font-bold'>Weekly Income Comparison</h3>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default IncomeComparisonChart;
