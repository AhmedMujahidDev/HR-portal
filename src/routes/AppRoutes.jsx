import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/pages/Login.jsx'
import Signup from '../auth/pages/signup.jsx'
import ForgotPassword from '../auth/pages/ForgotPassword.jsx'
import ResetPassword from '../auth/pages/ResetPassword.jsx'
import Dashboard from '../Admin/pages/dashboard.jsx'
import AdminLayout from '../Admin/layout/adminlayout.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public auth routes */}
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />

      {/* Admin area */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes