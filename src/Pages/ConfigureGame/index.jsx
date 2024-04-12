import styled from 'styled-components';
import { useState } from 'react';
import { Container, Title, SectionButtons, SectionTitle, StylizedOptionButton, StylizedStartButton } from './ConfigureGame.styles';
import { VscDebugStart } from "react-icons/vsc";
import { BackButton } from '../../Components';
import { useNavigate } from 'react-router-dom';
const ConfigureGame = ({pairs, defineNumberOfPairs, difficulty, setDifficulty}) => {
    const [startEnabled, setStartEnabled] = useState(false);
    const  navigate = useNavigate();
    const handleSelectNumber = (number) => {
        defineNumberOfPairs(number);
        checkStartEnabled(number, difficulty);
    };

    const handleSelectDifficulty = (difficulty) => {
        setDifficulty(difficulty);
        checkStartEnabled(pairs, difficulty);
    };

    const checkStartEnabled = (pairs, difficulty) => {
        if (pairs !== null && difficulty !== null) {
            setStartEnabled(true);
        } else {
            setStartEnabled(false);
        }
    };

    const handleStartGame = () => {
        if (startEnabled) {
            navigate('/game');
        }
    };

    return (
        <Container>
            <BackButton/>
            <Title>Configurações do jogo</Title>
            <SectionButtons>
                <SectionTitle>Quantidade de cards</SectionTitle>
                <StylizedOptionButton className={pairs === 6 ? 'selected' : ''} onClick={() => handleSelectNumber(6)}>6</StylizedOptionButton>
                <StylizedOptionButton className={pairs === 8 ? 'selected' : ''} onClick={() => handleSelectNumber(8)}>8</StylizedOptionButton>
                <StylizedOptionButton className={pairs === 10 ? 'selected' : ''} onClick={() => handleSelectNumber(10)}>10</StylizedOptionButton>
            </SectionButtons>
            <SectionButtons>
                <SectionTitle>Dificuldade</SectionTitle>
                <StylizedOptionButton className={difficulty === 'Fácil' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Fácil')}>Fácil</StylizedOptionButton>
                <StylizedOptionButton className={difficulty === 'Médio' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Médio')}>Médio</StylizedOptionButton>
                <StylizedOptionButton className={difficulty === 'Difícil' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Difícil')}>Difícil</StylizedOptionButton>
            </SectionButtons>
            <StylizedStartButton disabled={!startEnabled} onClick={handleStartGame}>
                <VscDebugStart size={30} />
                <p>Iniciar</p>
            </StylizedStartButton>
        </Container>
    );
};

export default ConfigureGame;
