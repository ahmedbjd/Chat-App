import React from 'react';
import Messages from './Messages';
import SendMessage from './SendMessage';

const MessagesContainer = () => {
  return (
    <div className='w-2/3 flex flex-col'>
      <div className='bg-gray-400 px-5 py-1'>
        <h1 className='text-gray-300'>To:  <span className='text-gray-800 font-bold ml-1 text-lg'>Hello world</span></h1>
      </div>
      
          <Messages />
      
        <SendMessage />
    </div>
  )
}

export default MessagesContainer
