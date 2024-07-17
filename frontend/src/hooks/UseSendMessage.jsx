import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios';
import useConversations from '../zustand/useConversations';

const UseSendMessage = () => {
    const {setErrorState} = useAuth();
    const {selectedConversation,messages, setMessages} = useConversations();
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await axios.post(`/api/messages/send/${selectedConversation._id}`, {message});
            if (response.error){
                throw new Error(response.error);
            }
            const data = response.data;
            setMessages([...messages, data.message]);
        } catch (error) {
            setErrorState(error.message);
        }finally{
            setLoading(false);
        }
    }
  return {sendMessage, loading}
}

export default UseSendMessage
