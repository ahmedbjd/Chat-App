import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
     <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
         </Routes>
     </Router>
    </div>
  )
}

export default App
