import React from 'react';
import { useAuth } from '../../context/AuthContext';
import useConversations from '../../zustand/useConversations';

const Message = ({ message }) => {
  const { authUser } = useAuth();
  const {selectedConversation} = useConversations();
  const fromMe = authUser?._id === message.senderId;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic ;

  // Function to format the time
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className='m-3'>
        <div className={`chat ${chatClassName}`}>
          <div className="chat-image avatar online">
            <div className="w-12 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={profilePic}
              />
            </div>
          </div>
          <div className={`chat-bubble text-white ${fromMe ? 'bg-blue-500' : ''}`}>{message.message}</div>
          <time className="chat-footer text-gray-300">{formatTime(message.createdAt)}</time>
        </div>
    </div>
  );
};

export default Message;
