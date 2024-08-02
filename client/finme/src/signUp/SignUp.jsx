import React from 'react';
import ImageSection from './components/ImageSection';
import SignUpForm from './components/SignUpForm';
import SignUpImage from '../assets/expensecalc.jpg';

const SignUp = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${SignUpImage})` }}>
      <div className="w-full flex items-center justify-center">
        <div className="bg-green-800 bg-opacity-50  p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className='text-2xl font-bold'>Create an account</h1>
          <p className='my-2 text-neutral-500'>Already have an account? <a href="/login" className="text-amber-700">Log in</a></p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;