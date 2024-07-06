import React, {useState} from 'react';
import SignInImage from '../assets/cafe3.jpg';
import SocialSignInBtn from './components/SocialSignInBtn';
import SignInForm from './components/SignInForm';

const SignIn = () => {

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="h-[75vh] flex ">
      <div className="w-7/12 bg-gray-900 flex items-center justify-center">
        <img src={SignInImage} alt="Decorative" className="h-full object-cover" />
      </div>
      <div className="w-7/12 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className='text-2xl font-bold '>Sign In</h1>
          <div className="mb-4">
            <SocialSignInBtn provider="Google" />
            <SocialSignInBtn provider="Linked In" />
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
    </div>

  )
}

export default SignIn;
