import React from 'react';
import profileImage from '../../assets/profile.jpg';

const ProfileSection = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black p-4 rounded-lg'>
      <img src={profileImage} alt='profile' className='w-[100px] h-[120px] rounded' />
      <h2 className='text-white mt-10 text-3xl font-semibold font-["Poppins"] leading-[35px] mt-2'>Manuel</h2>
      <p className='opacity-60 mt-5 text-white text-[17px] font-normal font-["Poppins"] leading-[27px] overflow-wrap break-words'>
        crackedeman@gmail.com
      </p>
    </div>
  )
}

export default ProfileSection;