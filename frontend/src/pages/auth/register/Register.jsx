import React, { useState } from 'react';
import { Title, ConteinerForm, ConteinerFoto, FotoPerfil, ButtonAddFoto  } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import fotobase from '../../../../../backend/src/upload/foto-user/user_icon-icons.com_66546.png';
import epi from '../../../services/epi';
 
const Register = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ photo, setFotoPerfil] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('fotoPerfil', photo);
    formData.append('nome', name);
    formData.append('email', email);
    formData.append('senha', password);
    formData.append('senha2', password2);
    
    const response = await epi.post('/register', formData);

    setName('')
    setEmail('')
    setPassword('')
    setPassword2('')
    setFotoPerfil(null);

    localStorage.setItem('token', response.data.token);
    const shouldRedirect = true;

      if (shouldRedirect) {
        navigate('/principal');
      }
  };

  const handleFotoPerfilChange = (e) => {
    const file = e.target.files[0];
    setFotoPerfil(file);
  };

  return (
    <>
      <Title>Register</Title>
      <Link to='/'>Voltar</Link>

      <ConteinerForm>
        <form onSubmit={handleSubmit}>
          <ConteinerFoto>
          <FotoPerfil><img src={photo ? URL.createObjectURL(photo) : fotobase} alt="" /></FotoPerfil>
            <ButtonAddFoto>
              <label htmlFor="foto">
                <input type="file" name="foto" id="foto" onChange={handleFotoPerfilChange} />
              </label>
            </ButtonAddFoto>  
          </ConteinerFoto>
          <input type="text" name="nome" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" name="senha" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="password" name="senha2" placeholder="Confirmar Senha" value={password2} onChange={e => setPassword2(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>
      </ConteinerForm>  
    </>
  )
}

export default Register