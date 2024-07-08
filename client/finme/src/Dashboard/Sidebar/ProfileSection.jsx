import React from 'react';
import profileImage from '../../assets/profile.jpg';

const ProfileSection = () => {
  return (
    <div className='flex flex-col items-start space-x-4 justify-start'>
            <img src={profileImage} alt='profile image' className='w-[100px] h-[120px] rounded-full' />
            <h2 className='text-white text-3xl font-semibold font-["Poppins"] leading-[35px] mt-2'>Manuel</h2>
            <p className='opacity-60 text-white text-[17px] font-normal font-["Poppins"] leading-[27px]'>crackedeman@gmail.com</p>
    </div>
  )
}

export default ProfileSection;
