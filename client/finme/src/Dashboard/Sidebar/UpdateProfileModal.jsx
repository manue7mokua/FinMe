import React, { useState, useEffect } from 'react';

const UpdateProfileModal = ({ show, handleClose, profile, handleProfileUpdate }) => {
  const [firstName, setFirstName] = useState(profile?.firstName || '');
  const [lastName, setLastName] = useState(profile?.lastName || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [profileImages, setProfileImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(profile?.profileImage || '');

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setEmail(profile.email)
      setSelectedImage(profile.profileImage);
    }
  }, [profile]);

  useEffect(() => {
    const fetchProfileImages = async () => {
      const images = [];
      for (let i = 0; i < 20; i++) {
        const seed = Math.random().toString(36).substring(7);
        const avatarUrl = `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`;
        images.push(avatarUrl);
      }
      setProfileImages(images);
    };

    fetchProfileImages();
  }, []);

  const handleSubmit = () => {
    handleProfileUpdate({ firstName, lastName, email, profileImage: selectedImage });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">Update Profile</h2>
        <label className="block mb-2 text-black">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2 text-black">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2 text-black">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <div className="grid grid-cols-4 gap-2 my-4">
          {profileImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="profile"
              className={`w-16 h-16 rounded-full cursor-pointer ${selectedImage === image ? 'border-4 border-blue-500' : 'border'}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
