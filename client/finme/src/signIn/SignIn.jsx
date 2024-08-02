import React, {useState} from 'react';
import SignInImage from '../assets/expensecalc.jpg';
import SocialSignInBtn from './components/SocialSignInBtn';
import SignInForm from './components/SignInForm';

const SignIn = () => {

  return (
    <div className="h-full w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${SignInImage})` }}>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="bg-green-800 bg-opacity-50 p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className='text-2xl font-bold'>Sign In</h1>
          <div className="mb-4">
            <SocialSignInBtn provider="Google" />
            <SocialSignInBtn provider="Linked In" />
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default SignIn;
