import React from 'react'
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const UseGetConversations = () => {
    const {setLoadingState, setErrorState} = useAuth();

    const getAllUsers = async () => {
       setLoadingState(true);
       try {
         const response = await axios.get('/api/users');
         const data = response.data;
         console.log(data);
       } catch (error) {
         setErrorState(error.message);
       }finally{
        setLoadingState(false);
       }
    }

  return {getAllUsers};
}

export default UseGetConversations
