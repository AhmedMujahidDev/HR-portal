// import React from "react"
// import { Routes, Route } from "react-router-dom"

// import AdminLayout from "./Admin/layout/adminlayout"
// import Dashboard from "./Admin/pages/dashboard"
// import Employee from "./Employee/pages/dashboard"

// const App = () => {
//   return (
//     <>
//     <Routes>
//       <Route path="" element={<AdminLayout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="employee" element={<Employee />} />
//       </Route>
//     </Routes>
//     </>
//   )
// }

// export default App

import React from 'react'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return <AppRoutes />
}

export default App