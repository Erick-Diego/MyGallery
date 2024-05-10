import React, { useState, useEffect } from 'react';
import {
  HeaderTop,
  ConteinerMenu,
  ConteinerButtonMenu,
  ConteinerListMenu,
  ConteinerLogo, 
  Title, 
  ConteinerLogged,
  ConteinerButtonUser,
  ConteinerProfileImage, 
  ConteinerProfileName, 
  ConteinerUnLogged,
  ConteinerLogout,
  ButtonLogOut
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import epi from '../../services/epi';
import { getUserInfo } from '../../services/authService';
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [userProfileImageURL, setUserProfileImageURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUserInfo();
        if (user && Object.keys(user).length !== 0) {
          setUserInfo(user);
          if (user.fotoPerfil) {
            const fileName = user.fotoPerfil.split('\\').pop();
            const response = await epi.get(`user-profile-image/${fileName}`);
            setUserProfileImageURL(response.data.imageURL);
            setUserLogged(true);
          }
        } else {
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
      <HeaderTop>
        <ConteinerMenu>
          <ConteinerButtonMenu>
            <HiMenuAlt1
              size={35}
            />
          </ConteinerButtonMenu>
          <ConteinerListMenu>
              {userLogged ? (
                <ConteinerLogout>
                  <ButtonLogOut onClick={handleLogout}>
                    LogOut
                  </ButtonLogOut>
                </ConteinerLogout>
              ) : (
                <></>
              )
              }
          </ConteinerListMenu>
        </ConteinerMenu>
        <ConteinerLogo>
          <Title>MyGallery</Title>
        </ConteinerLogo>
          {userLogged ? (
            <ConteinerLogged>
              <ConteinerButtonUser type='button'>
                <Link to='/user'>
                  <ConteinerProfileImage>
                    {userProfileImageURL ? (
                      <img src={userProfileImageURL} alt="Foto do perfil" width={50} />
                    ) : (
                      <p>Foto do perfil não encontrada</p>
                    )}
                  </ConteinerProfileImage>
                  <ConteinerProfileName>
                    <span>Seja Bem Vindo!</span>
                    <p>{getFirstName(userInfo.nome)}</p>
                  </ConteinerProfileName>
                </Link>
              </ConteinerButtonUser>
            </ConteinerLogged> 
            ) : (
              <ConteinerUnLogged>
                <Link to='/login'> Entrar </Link>
                <Link to='/register'> Cadastrar </Link>
              </ConteinerUnLogged>
            )
          }
      </HeaderTop>
    </>
  )
}

export default Nav