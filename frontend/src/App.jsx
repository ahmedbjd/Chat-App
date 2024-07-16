import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useAuth } from './context/AuthContext';  // Adjusted import path

const App = () => {
  const { authUser } = useAuth();

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
