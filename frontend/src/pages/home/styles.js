import styled, {createGlobalStyle} from 'styled-components';
import banner from '../../assets/banner.jpg'

export const BodyStyle = createGlobalStyle`
    body{
        background-image: url(${banner});
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: top;
        backdrop-filter: brightness(0.6);
    }
`

export const SecondNav = styled.nav`
    width: 100%;
    height: 3pc;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
    top: 100px;
`

export const Marquee = styled.div`
    p{
        color: white;
        font-size: 16px;
        letter-spacing: 2px;
        font-family: "Outfit", sans-serif;
        border-right: 4px solid;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        padding-right: 4px;
        animation: 
            typing 2s steps(50),
            cursor .4s step-end infinite alternate
        ;
    }

    @keyframes cursor {
        50% { border-color: transparent }
    }

    @keyframes typing {
        from { width: 0% }
    }
`;

export const ConteinerHome = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const ButtonStarted = styled.div`
    width: auto;
`;

export const ConteinerTexto = styled.div`
    width: 40%;
    color: white;
    font-family: "Outfit", sans-serif;
    text-align: center;
`;

export const ConteinerApresent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;