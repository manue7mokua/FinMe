import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../../loadingAnimation.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ExpenseComparisonChart = () => {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            const userId = decoded.id;

            try {
                const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/weekly`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const expensesThisWeek = response.data.thisWeek.reduce((acc, expense) => {
                    const day = new Date(expense.expenseDate).getDay();
                    acc[day] = (acc[day] || 0) + parseFloat(expense.expenseAmount);
                    return acc;
                }, Array(7).fill(0));

                const expensesLastWeek = response.data.lastWeek.reduce((acc, expense) => {
                    const day = new Date(expense.expenseDate).getDay();
                    acc[day] = (acc[day] || 0) + parseFloat(expense.expenseAmount);
                    return acc;
                }, Array(7).fill(0));

                const maxExpenseThisWeek = Math.max(...expensesThisWeek);
                const maxExpenseLastWeek = Math.max(...expensesLastWeek);

                const ctx = document.createElement('canvas').getContext('2d');

                const gradientThisWeek = ctx.createLinearGradient(0, 0, 0, 400);
                gradientThisWeek.addColorStop(0, 'rgba(255, 99, 132, 0.8)');
                gradientThisWeek.addColorStop(1, 'rgba(255, 99, 132, 0)');

                const gradientLastWeek = ctx.createLinearGradient(0, 0, 0, 400);
                gradientLastWeek.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
                gradientLastWeek.addColorStop(1, 'rgba(54, 162, 235, 0)');

                setChartData({
                    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'This week',
                            backgroundColor: gradientThisWeek,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 2,
                            fill: true,
                            data: expensesThisWeek
                        },
                        {
                            label: 'Last week',
                            backgroundColor: gradientLastWeek,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 2,
                            fill: true,
                            data: expensesLastWeek
                        }
                    ]
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        setTimeout(fetchData, 3000);
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Weekly Expense Comparison'
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuad'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className='w-full h-full bg-white p-6 rounded-lg shadow-md flex items-center justify-center'>
            {loading ? (
                <div className="flex justify-center items-center w-full h-full">
                    <div className="cube">
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h3 className='text-xl font-bold'>Weekly Expense Comparison</h3>
                    <Line data={chartData} options={options} />
                </div>
            )}
        </div>
    );
}

export default ExpenseComparisonChart;