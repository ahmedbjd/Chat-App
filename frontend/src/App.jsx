import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <AuthProvider>
        <Router>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App
