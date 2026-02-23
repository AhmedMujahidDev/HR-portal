import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/pages/Login.jsx'
import Signup from '../auth/pages/signup.jsx'
import ForgotPassword from '../auth/pages/forgotPassword.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path ='/' element={<Signup />} />
        <Route path ='/login' element={<Login />} />

        <Route path='/forgot-password' element={<ForgotPassword />}/>
    </Routes>
  )
}

export default AppRoutes