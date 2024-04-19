import React from 'react';
import colors from '../../colors';
import styled from 'styled-components';
import duskull from '../../../src/assets/images/duskull.png';

const NotFoundPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.background};
    color: ${colors.white};
`;

const StylizedImg = styled.img`
    height: 30%;
    width: auto;
`

const StylizedText = styled.h1`
    font-size: 2rem;
    color: ${colors.title};
    text-align: center;
`

const StylizedP = styled.p`
    font-size: 1.5rem;
    color: ${colors.secondary};
    text-align: center;
`

const NotFound = () => {
  return (
    <NotFoundPage>
      <StylizedImg src={duskull} alt="Duskull" />
      <StylizedText>404 - Página não encontrada</StylizedText>
      <StylizedP>Infelizmente não encontramos a página que voce solicitou.</StylizedP>
    </NotFoundPage>
  );
}

export default NotFound;