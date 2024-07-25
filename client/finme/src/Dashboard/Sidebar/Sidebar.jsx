import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileSection from './ProfileSection';
import NavigationLinks from './NavigationLinks';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }
  return (
    <div className='w-1/6 bg-black text-white p-6 flex flex-col justify-between'>
      <ProfileSection />
      <NavigationLinks />
      <button
        onClick={handleLogout} 
        className='mt-6 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-800'
      >
          Log Out
        </button>     
    </div>
  )
}

export default Sidebar;

