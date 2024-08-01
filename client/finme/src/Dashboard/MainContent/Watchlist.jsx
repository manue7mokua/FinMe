import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockListItem from './StockListItem';
import AddCompanyToWatchlist from './AddCompanyToWatchList';
import { jwtDecode } from 'jwt-decode';
import { FaPlus } from 'react-icons/fa';

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

  const deleteStock = async (stockId) => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id;

    try {
      await axios.delete(`http://localhost:5000/api/${userId}/deleteWatchlistItem/${stockId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        data: {
          itemId: stockId
        }
      });
      fetchWatchlist();
    } catch (err) {
      console.error('Failed to delete stock', err);
    }
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return (
    <div className='relative w-full h-full bg-white rounded-lg'>
      <div className='sticky top-0 z-10 bg-white flex items-center justify-between gap-2 p-2'>
        <div className='font-bold text-[#2c2c2c] text-lg'>Watchlist</div>
        <button onClick={() => setIsModalOpen(true)} className='bg-sky-600 p-2 rounded-full text-white shadow-lg'>
          <FaPlus size={24}/>
        </button>
      </div>
      <div className='p-4 flex flex-col gap-2 h-[calc(100%-56px)] overflow-y-auto'>
      {loading ? (
          <div className="text-black text-4xl">Loading Your Data :) ...</div>
        ) : (
          stockList.map((stock, index) => (
            <StockListItem
              key={index}
              stockId={stock.id}
              companyIcon={stock.companyIcon}
              companyName={stock.companyName}
              companyAbbrev={stock.companyAbbrev}
              stockPrice={`${stock.stockPrice}`}
              performancePercentage={`${stock.performancePercentage}`}
              onDelete={deleteStock}
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