import React from 'react';
import useConversations from '../../zustand/useConversations';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation }) => {
  const {selectedConversation, setSelectedConversation} = useConversations();
  const {onlineUsers} = useSocketContext(); 
  const isOnline = onlineUsers.includes(conversation._id); 
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div className={`flex items-center gap-2 p-3 border-t-2 border-gray-400 ${isSelected ? 'bg-sky-400' : ''} hover:bg-sky-400`}
      onClick={() => setSelectedConversation(conversation)}
      >
      <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
      <div className="w-12 rounded-full">
         <img src={conversation.profilePic} alt={`${conversation.fullName}'s profile`} />
        </div>
      </div>
      <h1 className='text-white'>{conversation.fullName}</h1>
    </div>
  );
}

export default Conversation;
