import React from 'react'
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const UseLogout = () => {
    const {setLoadingState, setErrorState, setAuthUser} = useAuth();

    const logout = async () => {
        setLoadingState(true);
        try {
            const response = await axios.post('/api/auth/signout');
            if (response.error){
                throw new Error(response.error)
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            setErrorState(error.message);
        }finally{
            setLoadingState(false);
        }
    }
  return {logout};
}

export default UseLogout
