import React, { useState } from 'react';
import plusIcon from '../../assets/addicon.svg';
import StockListItem from './StockListItem';
import amazonIcon from '../../assets/amazon-icon.svg';
import cocacolaIcon from '../../assets/coca-cola.svg';
import bmwIcon from '../../assets/bmw.svg';
import microsoftIcon from '../../assets/microsoft.svg';
import AddCompanyModal from './AddCompanyToWatchList';

const Watchlist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stockList, setStockList] = useState([
        {
            companyIcon: amazonIcon,
            companyName: 'Amazon.com, Inc',
            companyAbbrev: 'AMZN',
            stockPrice: '$102.24',
            performancePercentage: '+3.02'
        },
        {
            companyIcon: cocacolaIcon,
            companyName: 'Coca-Cola Co',
            companyAbbrev: 'KO',
            stockPrice: '$60.49',
            performancePercentage: '+0.32'
        },
        {
            companyIcon: bmwIcon,
            companyName: 'Bayerische Motoren Werke AG',
            companyAbbrev: 'BMW',
            stockPrice: '$92.94',
            performancePercentage: '+0.59'
        },
        {
            companyIcon: microsoftIcon,
            companyName: 'Microsoft Corp',
            companyAbbrev: 'MSFT',
            stockPrice: '$248.16',
            performancePercentage: '+0.16'
        }
    ]);

    const fetchCompanyData = async (companyName) => {
        try {
            const response = await fetch(`/fetchCompanyData?companyName=${companyName}`);
            const companyData = await response.json();

            if (companyData) {
                const newCompany = {
                    companyIcon: '', // Add the appropriate icon
                    companyName: companyData.name,
                    companyAbbrev: companyData.symbol,
                    stockPrice: `$${companyData.price}`,
                    performancePercentage: `${companyData.change}%`
                };

                setStockList((prevList) => [...prevList, newCompany]);
            }
        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    };

    const handleAddCompany = (companyName) => {
        fetchCompanyData(companyName);
    };

    return (
        <div className='relative w-[380px] h-[267px] bg-white rounded-lg overflow-scroll'>
            <div className='inline-flex flex-row justify-evenly h-3.5  gap-1.5 p-2 pb-4'>
                <div className='relative w-fit mt-[4px] mb-[-2.18px] [font-family:"Everett-Medium", Helvetica] font-bold text-[#2c2c2c] text-lg text-center tracking-[0] leading-normal'>
                    Watchlist
                </div>
                <button onClick={() => setIsModalOpen(true)} className='ml-auto'>
                    <img src={plusIcon} alt='Add new company' />
                </button>
            </div>
            <div className='p-4 inline-flex flex-col w-[380px] h-[291px] items-start justify-center gap-4 absolute top-[30px] left-0 overflow-scroll'>
                {stockList.map((stock, index) => (
                    <StockListItem
                        key={index}
                        companyIcon={stock.companyIcon}
                        companyName={stock.companyName}
                        companyAbbrev={stock.companyAbbrev}
                        stockPrice={stock.stockPrice}
                        performancePercentage={stock.performancePercentage}
                    />
                ))}
            </div>
            <AddCompanyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddCompany={handleAddCompany}
            />
        </div>
    );
};

export default Watchlist;
