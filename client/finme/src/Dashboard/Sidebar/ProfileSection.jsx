import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import UpdateProfileModal from './UpdateProfileModal';

const ProfileSection = () => {
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      const response = await axios.get(`http://localhost:5000/users/details/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };
  
  const updateProfile = async (updatedProfile) => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      const response = await axios.put(`http://localhost:5000/users/profile/update/${userId}`, updatedProfile, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setShowModal(false);
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center bg-black p-4 rounded-lg'>
      {profile && (
        <>
          <img src={profile.profileImage} alt='profile' className='w-[100px] h-[120px] rounded' />
          <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='flex flex-col items-center justify-evenly'>
              <h5 className='text-white text-3xl font-semibold font-["Poppins"] leading-[35px] mt-2'>
                {profile.firstName}
              </h5>
              <h5 className='text-white text-3xl font-semibold font-["Poppins"] leading-[35px] mt-2'>
                {profile.lastName}
              </h5>
            </div>
            <p className='opacity-60 mt-5 text-white text-[17px] font-normal font-["Poppins"] leading-[27px] overflow-wrap break-words'>
              {profile.email}
            </p>
              <button
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
              onClick={() => setShowModal(true)}
              >
                Update Profile
              </button>
          </div>
        </>
      )}
      <UpdateProfileModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        profile={profile}
        handleProfileUpdate={updateProfile}
      />
    </div>
  );
};

export default ProfileSection;
