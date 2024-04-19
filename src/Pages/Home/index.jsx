import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../../Components';
import backgroundImage from '../../assets/backgrounds/36955_pokemon.jpg';
import { useNavigate } from 'react-router-dom';
import useSound from '../../Hocks/UseSound/useSound';
import clickAudio from '../../assets/sounds/click.wav';
import selectAudio from '../../assets/sounds/select.wav';
import musicTheme from '../../assets/sounds/PokemonLavanderTown.mp3';

const StylizedMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    height: 100vh;
    padding-left: 30px;
`

const Home = () => {
    const navigate = useNavigate();
    const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const clickSound = useSound(clickAudio);
    const selectedSound = useSound(selectAudio);

    useEffect(() => {
        selectedSound();
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                setCurrentButtonIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                setCurrentButtonIndex((prevIndex) => (prevIndex + 1) % 4);
            } else if (event.key === 'Enter') {
                handleButtonClick(currentButtonIndex);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentButtonIndex]);

    const goTo = (path) => {
        navigate(path);
    }

    const handleButtonClick = (index) => {
        clickSound();
        switch (index) {
            case 0:
                goTo('/configure-game');
                break;
            case 1:
                goTo('/leaderboard');
                break;
            case 2:
                goTo('/about');
                break;
            case 3:
                goTo('/');
                break;
            default:
                break;
        }
    }

    const handleFocus = (index) => {
        setIsFocused(index);
    }

    return (
        <>

            <StylizedMain>
                <MenuButton
                    onClick={() => handleButtonClick(0)}
                    onFocus={() => handleFocus(0)}
                    title={'Jogar'}
                    isFocused={currentButtonIndex === 0}
                />
                <MenuButton
                    onClick={() => handleButtonClick(1)}
                    onFocus={() => handleFocus(1)}
                    title={'Líderes'}
                    isFocused={currentButtonIndex === 1}
                />
                <MenuButton
                    onClick={() => handleButtonClick(2)}
                    onFocus={() => handleFocus(2)}
                    title={'Como jogar'}
                    isFocused={currentButtonIndex === 2}
                />
                <MenuButton
                    onClick={() => handleButtonClick(3)}
                    onFocus={() => handleFocus(3)}
                    title={'Sair'}
                    isFocused={currentButtonIndex === 3}
                />
            </StylizedMain>
        </>
    )
}

export default Home;
