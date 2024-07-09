import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import foodIcon from '../../assets/Food.svg';
import downArrow from '../../assets/downarrow.svg';
import upArrow from '../../assets/uparrow.svg';
import shoppingIcon from '../../assets/Shopping.svg';
import transportIcon from '../../assets/transport.svg';

const ExpensesSection = () => {
  return (

    <div className='flex flex-col w-[244px] h-[641px] items-start gap-[15px] px-6 py-5 relative bg-white rounded-[17px]'>
        <div className='relative top-0 left-0 [font-family:"Poppins-Semibold", Helvetica] font-semibold text-[#262a41] text-[40px] tracking-[0.67] leading-[50px] whitespace-nowrap'>
            Expenses
        </div>
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={foodIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={downArrow}
        />
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={shoppingIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={upArrow}
        />
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={transportIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={downArrow}
        />
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={foodIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={downArrow}
        />
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={shoppingIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={upArrow}
        />
        <ExpenseListItem
            className='!absolute !top-[186px] !left-[22px]'
            icon={transportIcon}
            category='Shopping'
            amount={'$230'}
            percentageChange={'20%'}
            indicator={downArrow}
        />
    </div>
  )
}

export default ExpensesSection;
