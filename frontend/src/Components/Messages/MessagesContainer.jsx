import React, { useState } from 'react';
import Messages from './Messages';
import SendMessage from './SendMessage';
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {

  const [selectedConversation, setSelectedConversation] = useState(true);

  return (
    <div className='w-2/3 flex flex-col'>
       {selectedConversation ? (
           <NoChatSelected />
        ) :
          <>
           <div className='bg-gray-400 px-5 py-1'>
             <h1 className='text-gray-300'>To:  <span className='text-gray-800 font-bold ml-1 text-lg'>Hello world</span></h1>
           </div>
          
           <Messages />
           <SendMessage />
          </>
        }
    </div>
  )
}

export default MessagesContainer

const NoChatSelected = () => {

  return(
    <div className='flex items-center justify-center h-full'>
    <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
    <p>Welcome 👋 Ahmed bjd ❄</p>
    <p>Select a chat to start messaging</p>
    <TiMessages className='text-3xl md:text-6xl text-center' />
  </div>
</div>
  )
}