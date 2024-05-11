import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterBottom,
  ConteinerItemsFooter,
  ConteinerTopFooter,
  Title,
  ConteinerSocialMidias,
  Horizontalline,
  HorizontallineBlack,
  ConteinerMidFooter,
  ConteinerBottom
} from './styles';
import { FiInstagram, FiFacebook, FiLinkedin   } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <HorizontallineBlack/>
      <FooterBottom>
        <ConteinerItemsFooter>
          <ConteinerTopFooter>
            <Title>MyGallery</Title>
            <ConteinerSocialMidias>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FiInstagram/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FiFacebook/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX/>
                </a>
              </li>
            </ConteinerSocialMidias> 
          </ConteinerTopFooter>
          <Horizontalline/>  
          <ConteinerMidFooter>
            <Link to="/login">Sobre Nós</Link>
            <Link to="/login">Privacidade</Link>
            <Link to="/login">Segurança</Link>
            <Link to="/login">Cookies</Link>
            <Link to="/login">Serviços</Link>
            <Link to="/login">Termos</Link>
            <Link to="/login">Suporte</Link>
          </ConteinerMidFooter>
          <Horizontalline/>
          <ConteinerBottom>
            <p>© 2024 MyGallery | Todos os Direitos Reservados</p>
            <p>Agradecemos por sua Confiança!</p>
          </ConteinerBottom>
        </ConteinerItemsFooter>
      </FooterBottom>
    </>
  )
}

export default Footer