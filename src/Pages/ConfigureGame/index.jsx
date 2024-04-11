import styled from 'styled-components';
import { useState } from 'react';
import { Container, Title, SectionButtons, SectionTitle, StylizedOptionButton, StylizedStartButton } from './ConfigureGame.styles';
import { VscDebugStart } from "react-icons/vsc";
const ConfigureGame = () => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [startEnabled, setStartEnabled] = useState(false);
    const handleSelectNumber = (number) => {
        setSelectedNumber(number);
        checkStartEnabled(number, selectedDifficulty);
    };

    const handleSelectDifficulty = (difficulty) => {
        setSelectedDifficulty(difficulty);
        checkStartEnabled(selectedNumber, difficulty);
    };

    const checkStartEnabled = (number, difficulty) => {
        if (number !== null && difficulty !== null) {
            setStartEnabled(true);
        } else {
            setStartEnabled(false);
        }
    };

    const handleStartGame = () => {
       
    };

    return (
        <Container>
            <Title>Configurações do jogo</Title>
            <SectionButtons>
                <SectionTitle>Quantidade de cards</SectionTitle>
                <StylizedOptionButton className={selectedNumber === 6 ? 'selected' : ''} onClick={() => handleSelectNumber(6)}>6</StylizedOptionButton>
                <StylizedOptionButton className={selectedNumber === 8 ? 'selected' : ''} onClick={() => handleSelectNumber(8)}>8</StylizedOptionButton>
                <StylizedOptionButton className={selectedNumber === 10 ? 'selected' : ''} onClick={() => handleSelectNumber(10)}>10</StylizedOptionButton>
            </SectionButtons>
            <SectionButtons>
                <SectionTitle>Dificuldade</SectionTitle>
                <StylizedOptionButton className={selectedDifficulty === 'Fácil' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Fácil')}>Fácil</StylizedOptionButton>
                <StylizedOptionButton className={selectedDifficulty === 'Médio' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Médio')}>Médio</StylizedOptionButton>
                <StylizedOptionButton className={selectedDifficulty === 'Difícil' ? 'selected' : ''} onClick={() => handleSelectDifficulty('Difícil')}>Difícil</StylizedOptionButton>
            </SectionButtons>
            <StylizedStartButton disabled={!startEnabled} onClick={handleStartGame}>
                <VscDebugStart size={30} />
                <p>Iniciar</p>
            </StylizedStartButton>
        </Container>
    );
};

export default ConfigureGame;
