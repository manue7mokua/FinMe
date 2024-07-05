import React from 'react'
import FormInput from './FormInput';


const SignInForm = () => {
  return (
    <div>
      <form className='space-y-4'>
        <FormInput type='text' placeholder='Username or Email' />
        <FormInput type='password' placeholder='Password' />
        <button className='w-full p-2 bg-pink-500 text-white rounded-lg'>
            Sign In
        </button>
        <div className='text-center'>
            <a href='#' className='text-sm text-gray-600' >Forgot your password?</a>
        </div>
        <div className='text-center'>
            <a href='#' className='text-sm text-gray-600' >Don't have an account? Sign Up</a>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;
