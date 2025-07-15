import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Crud from './pages/Crud'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/crud-operation' element={<Crud/>} />
      </Routes>
    </div>
  )
}

export default App