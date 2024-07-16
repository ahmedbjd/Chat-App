import React from 'react';

const Conversation = ({ conversation }) => {
  return (
    <div className='flex items-center gap-2 p-3 border-t-2 border-gray-400 hover:bg-sky-400'>
      <img src={conversation.profilePic} alt={`${conversation.fullName}'s profile`} className='h-9 w-9 rounded-full' />
      <h1 className='text-white'>{conversation.fullName}</h1>
    </div>
  );
}

export default Conversation;
