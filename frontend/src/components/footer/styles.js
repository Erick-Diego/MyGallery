import styled from 'styled-components';

export const HorizontallineBlack = styled.div`
    width: 100%;
    height: 10px;
    background-color: black;
`;

export const FooterBottom = styled.footer`
    width: 100%;
    background-color: #ffffff;
    padding: 2% 0;
    display: grid;
    place-items: center;
`;

export const ConteinerItemsFooter = styled.div`
    width: 65%;
`;

export const ConteinerTopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ConteinerSocialMidias = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a{
        color: black;
    }
`;

export const Title = styled.h1`
    color: black;
    font-family: "Satisfy", cursive;
    font-weight: 400;
    font-style: normal;
`;

export const Horizontalline = styled.div`
    height: 1px;
    width: 100%;
    margin: 20px 0;
`;

export const ConteinerMidFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        color: black;
        font-family: "Outfit", sans-serif;
        font-size: 18px;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export const ConteinerBottom = styled.div`
    display: flex;
    font-family: "Outfit", sans-serif;
    justify-content: space-between;
    align-items: center;
    color: gray;
    font-size: 16px;
`;