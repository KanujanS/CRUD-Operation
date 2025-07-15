import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Crud from './pages/Crud'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/crud-operation' element={<Crud/>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App