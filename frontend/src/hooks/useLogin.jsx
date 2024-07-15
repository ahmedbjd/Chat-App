import React from 'react'
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

    const { setLoadingState, setErrorState } = useAuth();
    const navigate = useNavigate();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password ,setErrorState);
        if (!success) return;
        setErrorState(null);
        setLoadingState(true);
        try {
           const response = await axios.post('http://localhost:4000/api/auth/login', {username, password});
           const data = response.data;
           console.log(data);
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