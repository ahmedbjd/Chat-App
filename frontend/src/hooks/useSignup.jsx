import React from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {

    const navigate = useNavigate();
    const { setLoadingState, setErrorState } = useAuth();

    const signup = async({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender, setErrorState })
        if (!success) return;

        setLoadingState(true);
        try {
            const response = await axios.post('/api/auth/signup', {fullName, username, password, confirmPassword, gender});
            const data = response.data;
            if (data.error){
                throw new Error(data.error)
            }
            navigate("/");
        } catch (error) {
            setErrorState(error.response?.data?.error || 'SignUp failed');
        }finally{
            setLoadingState(false);
        }
    }

  return {signup}
}

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender, setErrorState }){
    if (!fullName || !username || !password || !confirmPassword || !gender) {
		setErrorState("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		setErrorState("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		setErrorState("Password must be at least 6 characters");
		return false;
	}

	return true;
}