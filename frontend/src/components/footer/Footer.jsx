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

const Footer = () => {
  return (
    <>
      <HorizontallineBlack/>
      <FooterBottom>
        <ConteinerItemsFooter>
          <ConteinerTopFooter>
            <Title>MyGallery</Title>
            <ConteinerSocialMidias>
              <li>😀</li>
              <li>😁</li>
              <li>😂</li>
              <li>🤣</li>
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