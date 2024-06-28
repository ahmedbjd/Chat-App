import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [error, seError] = useState();
    const [loading, setLoading] = useState();

    const setErrorState = (error) => {
        seError(error);
    }

    const setLoadingState = (loading) => {
        setLoading(loading);
    }

    return(
        <AuthContext.Provider value={{ loading, error, setErrorState, setLoadingState }}>
            {children}
        </AuthContext.Provider>
    )
}   

export const useAuth = () => useContext(AuthContext);