import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
