import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    const [error, seError] = useState();
    const [loading, setLoading] = useState();

    const setErrorState = (error) => {
        seError(error);
    }

    const setLoadingState = (loading) => {
        setLoading(loading);
    }

    return(
        <AuthContext.Provider value={{ authUser, loading, error, setAuthUser, setErrorState, setLoadingState }}>
            {children}
        </AuthContext.Provider>
    )
}   

export const useAuth = () => useContext(AuthContext);