import React, { useState, useEffect } from 'react';
import { Title } from './styles';
import { getUserInfo } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Principal = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUserInfo();
        console.log('Dados do usuário recebidos:', user);
        if (user && Object.keys(user).length !== 0) {
          setUserInfo(user);
        } else {
          console.log('Nenhum dado de usuário recebido');
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
        navigate('/login');
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : 'Não encontrado';
  };

  return (
    <>
      {userInfo ? (
        <div>
          <Title>Principal</Title>
          <div>
            <img src={userInfo.fotoPerfil} alt="Foto do perfil" />
            <p>Nome: {getFirstName(userInfo.nome)}</p>
            <p>Email: {userInfo.email}</p>
            <p>{userInfo.fotoPerfil}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default Principal;
