import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import axios from 'axios';
import '../loadingAnimation.css';

const WeeklyExpenses = ({ expenses, refreshExpenses }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const now = new Date();
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  const twoWeeksAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);

  const expensesThisWeek = expenses
    .filter(expense => new Date(expense.expenseDate) >= oneWeekAgo)
    .sort((a, b) => b.expenseAmount - a.expenseAmount)
    .slice(0, 5);

  const expensesLastWeek = expenses
    .filter(expense => {
      const expenseDate = new Date(expense.expenseDate);
      return expenseDate >= twoWeeksAgo && expenseDate < oneWeekAgo;
    })
    .sort((a, b) => b.expenseAmount - a.expenseAmount)
    .slice(0, 5);

  const deleteExpense = async (expenseId) => {
      const token = localStorage.getItem('token');
      const userId = JSON.parse(atob(token.split('.')[1])).id;
  
      try {
        await axios.delete(`http://localhost:5000/expenses/${userId}/deleteExpense`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          data: {
            expenseId
          }
        });
        refreshExpenses();
      } catch (err) {
        console.error('Failed to delete expense', err);
      }
    };

  return (
    <div className="p-5 bg-white">
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
        <>
          <h2 className="text-xl font-bold mb-4">This Week</h2>
          <div className="h-48 overflow-y-scroll">
            {expensesThisWeek.map((expense, index) => (
              <ExpenseItem
                key={index}
                expenseId={expense.id}
                categoryTitle={expense.expenseType}
                categoryName={expense.expenseName}
                expenseDate={new Date(expense.expenseDate).toLocaleTimeString()}
                expenseDay={new Date(expense.expenseDate).toLocaleDateString('en-US', { weekday: 'long' })}
                expenseAmount={`-$${expense.expenseAmount}`}
                onDelete={deleteExpense}
              />
            ))}
          </div>
          <h2 className="text-xl font-bold mt-6 mb-4">Last Week</h2>
          <div className="h-48 overflow-y-scroll">
            {expensesLastWeek.map((expense, index) => (
              <ExpenseItem
                key={index}
                expenseId={expense.id}
                categoryTitle={expense.expenseType}
                categoryName={expense.expenseName}
                expenseDate={new Date(expense.expenseDate).toLocaleTimeString()}
                expenseDay={new Date(expense.expenseDate).toLocaleDateString('en-US', { weekday: 'long' })}
                expenseAmount={`-$${expense.expenseAmount}`}
                onDelete={deleteExpense}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeeklyExpenses;