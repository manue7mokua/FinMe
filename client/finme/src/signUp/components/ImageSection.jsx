import React from 'react';

const ImageSection = ({ image }) => {
  return (
    <div className="w-5/12 bg-gray-900 flex items-center justify-center">
      <img src={image} alt="Sign-up Image" className="h-full object-cover" />
    </div>
  );
};

export default ImageSection;
