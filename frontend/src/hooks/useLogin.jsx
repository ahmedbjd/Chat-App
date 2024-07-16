import React from 'react'
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

    const { setLoadingState, setErrorState, setAuthUser } = useAuth();
    const navigate = useNavigate();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password ,setErrorState);
        if (!success) return;
        setErrorState(null);
        setLoadingState(true);
        try {
           const response = await axios.post('/api/auth/login', {username, password});
           const data = response.data;
           if (response.error){
            throw new Error(response.error)
           }
           localStorage.setItem("chat-user", JSON.stringify(data));
           await setAuthUser(data);
           navigate('/');
        } catch (error) {
            setErrorState(error.response?.data?.error || 'Login failed');
        }finally{
            setLoadingState(false);
        }
    }

    return {login};
}

export default useLogin

function handleInputErrors(username, password, setErrorState) {
	if (!username || !password) {
		setErrorState("Please fill in all fields");
		return false;
	}

	return true;
}