import styled from 'styled-components';

export const HeaderTop = styled.header`
    width: 100%;
    height: 6.5pc;
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
`;

export const ConteinerMenu = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`;

export const ConteinerButtonMenu = styled.div`
`;

export const ConteinerListMenu = styled.div`
`;

export const ConteinerLogo = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`;

export const Title = styled.h1`
    color: black;
    font-family: "Satisfy", cursive;
    font-weight: 400;
    font-style: normal;
`;

export const ConteinerUnLogged = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a{
        color: black;
        font-size: 22px;
        font-family: "Outfit", sans-serif;
        letter-spacing: 2px;
    }
`;

export const ConteinerLogged = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const ConteinerButtonUser = styled.button`
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
`;

export const ConteinerProfileImage = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
`;

export const ConteinerProfileName = styled.div`
    font-size: 22px;
    color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    span{
        font-size: 16px;
    }
`;

export const ConteinerLogout = styled.div`
    display: flex;
`;

export const ButtonLogOut = styled.button`
    background-color: red;
    width: 120px;
    height: 40px;
    border: none;
    color: white;
`;
