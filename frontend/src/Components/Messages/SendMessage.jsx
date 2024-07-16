import React from 'react';
import { BsSend } from "react-icons/bs";

const SendMessage = () => {
  return (
    <div className='m-4 relative'>
    <input type="text" className='w-full bg-gray-800 border border-gray-500 rounded-lg py-2 px-5 text-white pr-10 focus:border-gray-300 focus:outline-none' placeholder='Send a message' />
    <button className='absolute right-5 top-3 text-gray-400 text-lg hover:text-white'>
      <BsSend />
    </button>
  </div>
  )
}

export default SendMessage
