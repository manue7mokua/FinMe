import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/users/login', { email, password });

      const data = response.data;

      // Store token in local storage
      localStorage.setItem('token', data.token);

      // Success message on successful sign-in
      setSuccess('Sign in successful');
      setError('');

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        // Server does not respond with a 200 Status Code
        setError(err.response.data.message || 'Sign-in failed');
      } else {
        // Request made but no response
        setError(err.request || 'No response from server');
      }
    }
  };

  return (
    <div>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Email'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError('');
            setSuccess('');
          }}
        />

        <FormInput
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError('');
            setSuccess('');
          }}
        />
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
        <button type='submit' className='w-full p-2 bg-black text-white rounded-lg'>
          Sign In
        </button>
        <div className='text-center'>
          <a href='#' className='text-sm text-gray-600'>Forgot your password?</a>
        </div>
        <div className='text-center'>
          <a href='/signup' className='text-sm text-gray-600'>Don't have an account? Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

