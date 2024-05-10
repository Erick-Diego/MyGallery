import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import User from './pages/user/User';
import Principal from './pages/Principal/Principal';
import { GlobalStyle } from './global';
import NotFound from './pages/404/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/principal' element={<Principal/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  )
}

export default App