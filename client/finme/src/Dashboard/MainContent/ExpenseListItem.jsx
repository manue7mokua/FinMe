import React from 'react';
import PropTypes from 'prop-types';

const ExpenseListItem = ({ icon, category, amount, percentageChange, indicator }) => {
  return (
    <div className='inline-flex items-start gap-4 px-4 py-2 relative rounded-lg'>
        <div className='inline-flex h-14 items-center justify-center gap-2 p-2 relative flex-[0_0_auto] bg-specialbg rounded-lg'>
        <img src={icon} alt={`${category} icon`} />
        </div>
        <div className='flex flex-col items-start justify-center relative flex-[0_0_auto]'>
            <div className='relative w-[88px] h-[18px] mt-[-1.00px] font-medium-12-16 font-[number:var(--medium-12-16-font-weight)] text-gray-02 text-[length:var(--medium-12-16-font-size)] tracking-[var(--medium-12-16-letter-spacing)] leading-[var(--medium-12-16-line-height)] whitespace-nowrap [font-style:var(--medium-12-16-font-style)]'>
                {category}
            </div>
            <div className='relative w-[88px] font-bold-16-24 font-[number:var(--bold-16-24-font-weight)] text-default-black text-[length:var(--bold-16-24-font-size)] tracking-[var(--bold-16-24-letter-spacing)] leading-[var(--bold-16-24-line-height)] [font-style:var(--bold-16-24--font-style)]'>
                {amount}
            </div>
            <div className='inline-flex items-center gap-2 relative flex-[0_0_auto] rounded-2xl'>
            <div className='relative w-fit mt-[-1.00px] font-medium-12-16 font-[number:var(--medium-12-16-font-weight)] text-gray-03 text-[length:var(--medium-12-16-font-size)] tracking-[var(--medium-12-16-letter-spacing)] leading-[var9--medium-12-16-line-height)] whitespace-nowrap [font-style:var(--medium-12-16-font-style)]'>
                {percentageChange}
            </div>
            <img src={indicator} alt="change indicator" />
            </div>
        </div>

    </div>
  )
}

ExpenseListItem.propTypes = {
    category: PropTypes.string,
    amount: PropTypes.string,
    percentageChange: PropTypes.string
}

export default ExpenseListItem;
