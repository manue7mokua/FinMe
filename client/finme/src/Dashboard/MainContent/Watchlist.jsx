import React, { useState, useEffect } from 'react';
import axios from 'axios';
import plusIcon from '../../assets/addicon.svg';
import StockListItem from './StockListItem';
import AddCompanyToWatchlist from './AddCompanyToWatchList';
import { jwtDecode } from 'jwt-decode';

const Watchlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWatchlist = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      const response = await axios.get(`http://localhost:5000/api/watchlist/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setStockList(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Delay of 2 seconds
      } else {
        console.error(`Error fetching watchlist: ${response.data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching watchlist: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

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
      {loading ? (
          <div className="text-black text-4xl">Loading Your Data :) ...</div>
        ) : (
          stockList.map((stock, index) => (
            <StockListItem
              key={index}
              companyIcon={stock.companyIcon}
              companyName={stock.companyName}
              companyAbbrev={stock.companyAbbrev}
              stockPrice={`${stock.stockPrice}`}
              performancePercentage={`${stock.performancePercentage}`}
            />
          ))
        )}
      </div>
      <AddCompanyToWatchlist
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshWatchlist={fetchWatchlist}
      />
    </div>
  );
};

export default Watchlist;

