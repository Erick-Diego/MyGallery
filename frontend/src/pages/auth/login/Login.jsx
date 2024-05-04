import React from 'react';
import { Title } from './styles';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Title>Login</Title>
      <Link to='/'>Voltar</Link>
    </>
  )
}

export default Login