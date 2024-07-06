import React from 'react';
import ImageSection from './components/ImageSection';
import SignUpForm from './components/SignUpForm';
import SignUpImage from '../assets/cafe3.jpg';

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className="h-[75vh] flex">
      <ImageSection image={SignUpImage} />
      <div className="w-7/12 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className='text-2xl font-bold'>Create an account</h1>
          <p>Already have an account? <a href="/login" className="text-blue-500">Log in</a></p>
          <SignUpForm />
        </div>
      </div>
    </div>
    </div>

  );
};

export default SignUp;
