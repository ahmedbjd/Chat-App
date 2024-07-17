import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='flex-1 overflow-auto custom-scrollbar'>
      <Message />
    </div>
  )
}

export default Messages
