import React from 'react';
import profileImage from '../../assets/profile.jpg';

const ProfileSection = () => {
  return (
    <div className='flex items-center space-x-4'>
        <img src={profileImage} alt='profile image' className='w-16 h-16 rounded-full' />
        <div>
            <h2 className='text-xl font-bold'>Manuel</h2>
            <p className='text-sm text-gray-400'>crackedeman@gmail.com</p>
        </div>
    </div>
  )
}

export default ProfileSection;
