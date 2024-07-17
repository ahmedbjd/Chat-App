import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";
import UseSendMessage from '../../hooks/UseSendMessage';
import { useAuth } from '../../context/AuthContext';

const SendMessage = () => {
  const {sendMessage, loading} = UseSendMessage();
  const [message, setMessage] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <div className='m-4 relative'>
    <form onSubmit={handleSubmit}>
      <input type="text" className='w-full bg-gray-800 border border-gray-500 rounded-lg py-2 px-5 text-white pr-10 focus:border-gray-300 focus:outline-none' 
          placeholder='Send a message' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      <button className={`absolute right-5 top-3 text-gray-400 text-lg hover:text-white ${loading ? 'right-4 top-2' : ''}`}>
        {loading ? <span className="loading loading-spinner loading-md"></span> 
          :  <BsSend />}
      </button>
    </form>

  </div>
  )
}

export default SendMessage
