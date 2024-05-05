import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PalceOrder from './pages/PlaceOrder/PalceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

export default function App() {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>    
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PalceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

