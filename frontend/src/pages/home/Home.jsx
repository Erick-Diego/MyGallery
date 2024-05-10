import React from 'react';
import { 
  BodyStyle, 
  SecondNav, 
  Marquee, 
  ButtonStarted, 
  ConteinerHome, 
  ConteinerTexto, 
  ConteinerApresent 
} from './styles';
import Nav from '../../components/navbar/Nav';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button'

const Home = () => {
  return (
    <>
      <BodyStyle/>
      <Nav/>
      <SecondNav>
        <Marquee>
          <p>
            Aqui sua Criatividade pode Florecer! Crie e Compartilhe suas Galerias!
          </p>
        </Marquee>
      </SecondNav>
      <ConteinerHome>
        <ConteinerApresent>
          <ConteinerTexto>
            Junte-se a nós hoje e comece a sua jornada artística no MyGallery! Faça login se já é parte da família MyGallery, ou crie uma conta agora mesmo para começar a criar suas próprias galerias de arte. Estamos ansiosos para ver o que você vai criar!
          </ConteinerTexto>
          <ButtonStarted>
            <Link to="/login">
              <Button/>
            </Link>
          </ButtonStarted>
        </ConteinerApresent>
      </ConteinerHome>
      <Footer/>
    </>
  )
}

export default Home;