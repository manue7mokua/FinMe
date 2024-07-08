import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

const Dashboard = () => {
  return (
    <div className='h-screen flex'>
        <Sidebar />
        <MainContent />
    </div>
  )
}

export default Dashboard;
