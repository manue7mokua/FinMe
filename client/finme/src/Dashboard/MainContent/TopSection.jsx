import React, { useState, useEffect } from 'react';
import axios from 'axios';
import award from '../../assets/Award.svg';
import edit from '../../assets/edit.svg';
import octicon from '../../assets/octicon.svg';
import meter from '../../assets/Meter.svg';
import ellipseBar from '../../assets/ellipseBar.svg';
import '../../loadingAnimation.css';

const TopSection = () => {
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalBankBalances, setTotalBankBalances] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [remainderBalance, setRemainderBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

      try {
        const incomesResponse = await axios.get(`http://localhost:5000/users/${userId}/incomeInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const accountsResponse = await axios.get(`http://localhost:5000/accounts/${userId}/accountInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const expensesResponse = await axios.get(`http://localhost:5000/expenses/${userId}/expensesInfo/student`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (incomesResponse.status === 200 && accountsResponse.status === 200 && expensesResponse.status === 200) {
          const incomes = incomesResponse.data;
          const accounts = accountsResponse.data;
          const expenses = expensesResponse.data;

          const totalIncomes = incomes.reduce((acc, income) => acc + parseFloat(income.incomeAmount), 0);
          const totalBankBalances = accounts.reduce((acc, account) => acc + parseFloat(account.accountBalance), 0);
          const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.expenseAmount), 0);
          const remainderBalance = totalIncomes + totalBankBalances - totalExpenses;

          setTotalIncomes(totalIncomes);
          setTotalBankBalances(totalBankBalances);
          setTotalExpenses(totalExpenses);
          setRemainderBalance(remainderBalance);
        } else {
          console.error(`Error fetching data: ${incomesResponse.data.message || accountsResponse.data.message || expensesResponse.data.message}`);
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      } finally {
        setTimeout(() => setLoading(false), 3000); // Delay of 3 seconds
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[380px] h-[240px] bg-white items-center gap-2.5 relative rounded-lg">
      {loading ? (
        <div className="flex justify-center items-center h-full">
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
        <div className="flex flex-col w-full h-full items-center gap-5 px-6 py-5 bg-white rounded-lg shadow-md">
        <header className="flex w-full items-center justify-between border-b border-gray-300 pb-3">
          <div className="flex items-center gap-2">
            <div className="text-black font-bold text-xl">
              ${(totalIncomes + totalBankBalances).toFixed(2)}
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
              <img src={edit} alt="edit icon" className="w-6 h-6" />
            </div>
          </div>
          <div className="text-secondary text-right">
            {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
        </header>
        <div className="flex h-32 items-start gap-4">
          <div className="flex flex-col h-full items-start justify-center gap-6">
            <div className="flex items-start gap-1">
              <img src={award} alt="award icon" className="w-6 h-6" />
              <div className="flex flex-col items-start gap-1">
                <div className="text-gray-500 text-sm">
                  Total Expenses
                </div>
                <div className="text-black font-bold text-lg">
                  ${totalExpenses.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <img src={octicon} alt="octicon" className="w-6 h-6" />
              <div className="flex flex-col items-start gap-1">
                <div className="text-gray-500 text-sm">
                  Remainder Balance
                </div>
                <div className="text-black font-bold text-lg">
                  ${remainderBalance.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img className="relative" alt="Ellipse Bar" src={ellipseBar} />
                <img className="absolute w-9 h-9 top-8 left-14" alt="Meter" src={meter} />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="text-gray-400 text-center text-xs">
                  $0
                </div>
                <div className="text-black font-semibold text-center text-sm">
                  12K
                </div>
                <div className="text-gray-400 text-right text-xs">
                  $20k
                </div>
              </div>
            </div>
            <div className="text-black text-sm text-center">
              Target vs Achievement
            </div>
          </div>
        </div>
      </div>
      )}  
    </div>
  );
};

export default TopSection;

