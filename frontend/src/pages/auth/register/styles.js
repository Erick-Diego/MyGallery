import styled from 'styled-components';

export const Title = styled.h1`
    margin: 50px;
    color: greenyellow;
`;

export const ConteinerForm = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;

        input{
            width: 100%;
            height: 40px;
        }
    }
`;

export const ConteinerFoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const FotoPerfil = styled.div`
    width: 200px;
    height: 200px;
    background-color: gray;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 200px;
    }
`;

export const ButtonAddFoto = styled.div`
    display: flex;
    flex-direction: column;
`;