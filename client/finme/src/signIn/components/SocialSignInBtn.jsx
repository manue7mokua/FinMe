import React from 'react'

const SocialSignInBtn = ({provider}) => {
  return (
    <button className='flex items-center justify-center w-full p-2 mb-2 border rounded-lg'>
        Continue with {provider}
    </button>
  )
}

export default SocialSignInBtn;
