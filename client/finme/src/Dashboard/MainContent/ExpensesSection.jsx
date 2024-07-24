import React, { useState, useEffect } from 'react';
import ExpenseListItem from './ExpenseListItem';
import downArrow from '../../assets/downarrow.svg';
import upArrow from '../../assets/uparrow.svg';
import transporticon from '../../assets/transport.png';
import billsicon from '../../assets/bills.png';
import personalicon from '../../assets/personal.png';
import foodicon from '../../assets/food.png';
import entertainmenticon from '../../assets/entertainment.png';
import axios from 'axios';

const ExpensesSection = () => {
  const [expenses, setExpenses] = useState([]);
  const [previousMonthExpenses, setPreviousMonthExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

      try {
        const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/student`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setExpenses(response.data);
        } else {
          console.error(`Error fetching expenses: ${response.data.message}`);
        }
      } catch (error) {
        console.error(`Error fetching expenses: ${error}`);
      }
    };

    const fetchPreviousMonthExpenses = async () => {
      const token = localStorage.getItem('token');
      const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

      try {
        const response = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/previousMonth`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setPreviousMonthExpenses(response.data);
        } else {
          console.error(`Error fetching previous month expenses: ${response.data.message}`);
        }
      } catch (error) {
        console.error(`Error fetching previous month expenses: ${error}`);
      }
    };

    fetchExpenses();
    fetchPreviousMonthExpenses();
  }, []);

  // Define the function before using it
  const getIconForCategory = (category) => {
    switch (category) {
        case 'Food':
            return foodicon;
        case 'Entertainment':
            return entertainmenticon;
        case 'Transport':
            return transporticon;
        case 'Bills':
            return billsicon;
        case 'Personal':
            return personalicon
      default:
        return foodicon;
    }
  };

  // Group expenses by category and calculate the total amount for each category
  const groupExpenses = (expenses) => {
    return expenses.reduce((acc, expense) => {
      const category = expense.expenseType;
      if (!acc[category]) {
        acc[category] = { amount: 0, icon: getIconForCategory(category) };
      }
      acc[category].amount += parseFloat(expense.expenseAmount);
      return acc;
    }, {});
  };

  const groupedExpenses = groupExpenses(expenses);
  const groupedPreviousMonthExpenses = groupExpenses(previousMonthExpenses);

  const calculatePercentageChange = (currentAmount, previousAmount) => {
    if (previousAmount === 0) return 0;
    return ((currentAmount - previousAmount) / previousAmount) * 100;
  };

  return (
    <div className='flex flex-col w-full h-full items-start gap-[15px] px-6 py-5 relative bg-white rounded-[17px]'>
      <div className='relative top-0 left-0 font-semibold text-[#262a41] text-[40px] leading-[50px]'>
        Expenses
      </div>
      <div className='flex flex-col items-center justify-evenly w-full h-full'>
        {Object.keys(groupedExpenses).map((category, index) => {
          const currentAmount = groupedExpenses[category].amount;
          const previousAmount = groupedPreviousMonthExpenses[category] ? groupedPreviousMonthExpenses[category].amount : 0;
          const percentageChange = calculatePercentageChange(currentAmount, previousAmount);
          const indicator = percentageChange >= 0 ? upArrow : downArrow;

          return (
            <ExpenseListItem
              key={index}
              icon={groupedExpenses[category].icon}
              category={category}
              amount={`$${currentAmount.toFixed(2)}`}
              percentageChange={`${percentageChange.toFixed(2)}%`}
              indicator={indicator}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpensesSection;
