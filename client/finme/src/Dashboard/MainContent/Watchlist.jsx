import React, { useState } from 'react';
import plusIcon from '../../assets/addicon.svg';
import StockListItem from './StockListItem';
import amazonIcon from '../../assets/amazon-icon.svg';
import cocacolaIcon from '../../assets/coca-cola.svg';
import bmwIcon from '../../assets/bmw.svg';
import microsoftIcon from '../../assets/microsoft.svg';
import AddCompanyModal from './AddCompanyToWatchList';

const Watchlist = () => {
    const apiKey = process.env.FINME_FMP_API_KEY;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stockList, setStockList] = useState([]);

    const fetchCompanyData = async (companyName) => {
        try {
            const companyResponse = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${companyName}&limit=1&exchange=NASDAQ&apikey=${apiKey}`);
            const companyData = await companyResponse.json();
 
            if (companyData && companyData.length > 0) {
                const companySymbol = companyData[0].symbol;
                const stockResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${apiKey}`);
                const stockData = await stockResponse.json();
 
                if (stockData && stockData.length > 0) {
                    const newCompany = {
                        companyIcon: {microsoftIcon}, // Add the appropriate icon if available
                        companyName: companyData[0].name,
                        companyAbbrev: companyData[0].symbol,
                        stockPrice: `$${stockData[0].price}`,
                        performancePercentage: `${stockData[0].changes}%`
                    };
 
                    setStockList((prevList) => [...prevList, newCompany]);
                }
            }
        } catch (error) {
            res.status(404).send(`Error fetching company data: ${error}`);
        }
    };

    const handleAddCompany = (companyName) => {
        fetchCompanyData(companyName);
    };

    return (
        <div className='relative w-[380px] h-[267px] bg-white rounded-lg overflow-scroll'>
            <div className='inline-flex flex-row h-3.5 justify-center gap-1.5 p-2 pb-4'>
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
