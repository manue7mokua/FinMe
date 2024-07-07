import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='min-h-screen flex'>
        <Sidebar />
        {/* MainContent sub-component */}
    </div>
  )
}

export default Dashboard;
