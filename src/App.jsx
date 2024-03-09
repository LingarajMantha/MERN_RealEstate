import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SignOut from './pages/SignOut';
import Signin from './pages/Signin';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/SignOut' element={<SignOut/>}/>
      <Route path='/Signin' element={<Signin/>}/>

     </Routes>
    </BrowserRouter>
  )
}

export default App;