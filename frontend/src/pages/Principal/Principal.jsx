import React, { useState, useEffect } from 'react';
import { Title, Button } from './styles';
import { getUserInfo } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import epi from '../../services/epi';

const Principal = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userProfileImageURL, setUserProfileImageURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUserInfo();
        console.log('Dados do usuário recebidos:', user);
        if (user && Object.keys(user).length !== 0) {
          setUserInfo(user);

          if (user.fotoPerfil) {
            const fileName = user.fotoPerfil.split('\\').pop();

            const response = await epi.get(`user-profile-image/${fileName}`);
            setUserProfileImageURL(response.data.imageURL);
          }
        } else {
          console.log('Nenhum dado de usuário recebido');
          navigate('/not-found');
        }
      } catch (error) {
        navigate('/');
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : 'Não encontrado';
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        navigate('/');
        return;
      }
  
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      await epi.post('/logout', null, config);
  
      localStorage.removeItem('token');
  
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <>
      {userInfo ? (
        <div>
          <Title>Principal</Title>
          <div>
            {userProfileImageURL ? (
              <img src={userProfileImageURL} alt="Foto do perfil" />
            ) : (
              <p>Foto do perfil não encontrada</p>
            )}
            <p>Nome: {getFirstName(userInfo.nome)}</p>
            <p>Email: {userInfo.email}</p>
            
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default Principal;
