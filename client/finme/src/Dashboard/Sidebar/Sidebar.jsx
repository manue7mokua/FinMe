import React from 'react';
import ProfileSection from './ProfileSection';

const Sidebar = () => {
  return (
    <div className='w-1/4 bg-gray-900 text-white p-6 flex flex-col justify-between'>
        <div>
            <ProfileSection />
            {/* Navigation Links Section Here */}
        </div>
        <button className='mt-6 bg-red-500 px-4 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Sidebar;
