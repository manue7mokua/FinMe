import React from 'react';
import ProfileSection from './ProfileSection';
import NavigationLinks from './NavigationLinks';

const Sidebar = () => {
  return (
    <div className='w-1/6 bg-gray-900 text-white p-6 flex flex-col justify-between'>
        <div className='w-[119px] flex flex-col'>
            <ProfileSection />
            <NavigationLinks />
            <button className='mt-6 bg-red-500 px-4 py-2 rounded-lg'>Log Out</button>     
        </div>

    </div>
  )
}

export default Sidebar;
