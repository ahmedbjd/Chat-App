import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

    const { setLoadingState, setErrorState } = useAuth();
    const navigate = useNavigate();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setErrorState(null);
        setLoadingState(true);
        try {console.log({username, password})
           const response = await axios.post('http://localhost:4000/api/auth/login', {username, password});
           const data = response.data;
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

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}