import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Container, Title, SectionButtons, SectionTitle, StylizedOptionButton, StylizedStartButton, StylizedInput } from './ConfigureGame.styles';
import { VscDebugStart } from "react-icons/vsc";
import { BackButton } from '../../Components';
import { useNavigate } from 'react-router-dom';
const ConfigureGame = ({defineNumberOfPairs, setDifficulty, name, setName}) => {
    const [startEnabled, setStartEnabled] = useState(false);
    const [numberOfPairs, setNumberOfPairs] = useState(null);
    const [difficultyLevel, setDifficultyLevel] = useState(null);

    const  navigate = useNavigate();
    const handleSelectNumber = (number) => {
        defineNumberOfPairs(number);
        setNumberOfPairs(number);
    };

    const handleSelectDifficulty = (difficulty) => {
        setDifficulty(difficulty);
        setDifficultyLevel(difficulty);
    };

    const checkStartEnabled = (pairs, difficulty) => {
        if (pairs !== null && difficulty !== null && name !== '') {
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

    useEffect(() => {
        checkStartEnabled(numberOfPairs, difficultyLevel);
    },[numberOfPairs, difficultyLevel]);

    return (
        <Container>
            <BackButton/>
            <Title>Configurações do jogo</Title>
            <StylizedInput type="text" value={name} placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}/>
            <SectionButtons>
                <SectionTitle>Quantidade de cards</SectionTitle>
                <StylizedOptionButton className={numberOfPairs === 6 ? 'selected' : ''} onClick={() => handleSelectNumber(6)}>6</StylizedOptionButton>
                <StylizedOptionButton className={numberOfPairs === 8 ? 'selected' : ''} onClick={() => handleSelectNumber(8)}>8</StylizedOptionButton>
                <StylizedOptionButton className={numberOfPairs === 10 ? 'selected' : ''} onClick={() => handleSelectNumber(10)}>10</StylizedOptionButton>
            </SectionButtons>
            <SectionButtons>
                <SectionTitle>Dificuldade</SectionTitle>
                <StylizedOptionButton className={difficultyLevel === 'easy' ? 'selected' : ''} onClick={() => handleSelectDifficulty('easy')}>Fácil</StylizedOptionButton>
                <StylizedOptionButton className={difficultyLevel === 'normal' ? 'selected' : ''} onClick={() => handleSelectDifficulty('normal')}>Médio</StylizedOptionButton>
                <StylizedOptionButton className={difficultyLevel === 'hard' ? 'selected' : ''} onClick={() => handleSelectDifficulty('hard')}>Difícil</StylizedOptionButton>
            </SectionButtons>
            <StylizedStartButton disabled={!startEnabled} onClick={handleStartGame}>
                <VscDebugStart size={30} />
                <p>Iniciar</p>
            </StylizedStartButton>
        </Container>
    );
};

export default ConfigureGame;
