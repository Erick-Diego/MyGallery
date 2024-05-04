import React from 'react';
import { Title } from './styles';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Title>Navbar</Title>
      <Link to='/login'> Login </Link>
      <Link to='/register'> Register </Link>
    </>
  )
}

export default Nav