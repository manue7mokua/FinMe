import React from 'react'

const FormInput = ({type, placeholder, value, onChange}) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
    />
    </>

  )
}

export default FormInput;
