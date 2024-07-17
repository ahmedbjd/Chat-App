import React from 'react';
import { useAuth } from '../../context/AuthContext';
import useConversations from '../../zustand/useConversations';

const Message = ({ message, senderId, time }) => {
  const { authUser } = useAuth();
  const {selectedConversation} = useConversations();
  const senderUser = authUser?._id === senderId;
  const receiverUser = selectedConversation?._id === senderId; 

  // Function to format the time
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className='m-3'>
      {senderUser ? (
        <div className="chat chat-end">
          <div className="chat-image avatar online">
            <div className="w-12 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={authUser?.profilePic}
              />
            </div>
          </div>
          <div className="chat-bubble bg-blue-500 text-white">{message}</div>
          <time className="chat-footer text-gray-300">{formatTime(time)}</time>
        </div>
      ) : receiverUser ? (
      <div className="chat chat-start">
        <div className="chat-image avatar online">
          <div className="w-12 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={selectedConversation?.profilePic} />
          </div>
        </div>
        <div className="chat-bubble text-white">{message}</div>
        <time className="chat-footer text-gray-300">{formatTime(time)}</time>
    </div>
    ) : <></>
      }
    </div>
  );
};

export default Message;
