import React, { useEffect, useState } from 'react';
import useConversations from '../zustand/useConversations';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const UseGetMessages = () => {
    const {selectedConversation, messages, setMessages} = useConversations();
    const {setErrorState} = useAuth();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/messages/${selectedConversation._id}`);
                if (response.error){
                    throw new Error(response.error);
                    }
                const data = response.data;
                setMessages(data);
            } catch (error) {
                setErrorState(error.message);
            }finally{
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();

    }, [selectedConversation?._id, setMessages]);
  return {messages, loading};
}

export default UseGetMessages
