import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const ProfileSection = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      try {
        const response = await axios.get(`http://localhost:5000/users/profile/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data)
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center bg-black p-4 rounded-lg'>
      {profile && (
        <>
          <img src={profile.profileImage} alt='profile' className='w-[100px] h-[120px] rounded' />
          <h2 className='text-white mt-10 text-3xl font-semibold font-["Poppins"] leading-[35px] mt-2'>
            {profile.firstName} {profile.lastName}
          </h2>
          <p className='opacity-60 mt-5 text-white text-[17px] font-normal font-["Poppins"] leading-[27px] overflow-wrap break-words'>
            {profile.email}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileSection;
