import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          {/* <Route index element={<HomePage/>}/> */}
          <Route index element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>

          {/* <Route path='/' element={#}/> */}
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes