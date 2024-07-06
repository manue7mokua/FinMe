import React, { useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/users/signup', { firstName, lastName, email, password });
      const data = response.data;

      // Store token in local storage
      localStorage.setItem('token', data.token);

      // Success message on sign-up
      setSuccess(`Welcome ${firstName} :)`);
      setError('');

    } catch (err) {
      setError('Sign-up failed');
      console.error('Sign-up failed', err);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
            setFirstName(event.target.value)
            setError('');
            setSuccess('');
        }}
      />
      <FormInput
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => {
            setLastName(event.target.value)
            setError('');
            setSuccess('');
        }}
      />
      <FormInput
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => {
            setEmail(event.target.value);
            setError('');
            setSuccess('');
           }}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}
      <p className="text-sm text-gray-600">Use 8 or more characters with a mix of letters, numbers & symbols</p>
      <button type="submit" className="w-full p-2 bg-pink-500 text-white rounded-lg">Create account</button>
      <div className="text-center">
        <a href="/login" className="text-sm text-gray-600">Already have an account? Log in</a>
      </div>
    </form>
  );
};

export default SignUpForm;
