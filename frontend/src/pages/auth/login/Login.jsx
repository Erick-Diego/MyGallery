import React, { useState } from 'react';
import { Title } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { ConteinerForm } from '../register/styles';
import epi from '../../../services/epi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const response = await epi.post('/login', {
        email: email,
        senha: password
      });
  
      setEmail('');
      setPassword('');
  
      localStorage.setItem('token', response.data.token);
      navigate('/principal');
    } catch (error) {
      console.error('Error:', error);
    }
  }  

  return (
    <>
      <Title>Login</Title>
      <Link to='/'>Voltar</Link>
      <ConteinerForm>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </ConteinerForm>
    </>
  );
};

export default Login;
