import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../../Components';
import backgroundImage from '../../assets/36955_pokemon.jpg';
import { useNavigate } from 'react-router-dom';

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

    useEffect(() => {
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
        switch (index) {
            case 0:
                goTo('/configure-game');
                break;
            case 1:
                goTo('/about');
                break;
            case 2:
                goTo('/help');
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
                    title={'Sobre'}
                    isFocused={currentButtonIndex === 1}
                />
                <MenuButton
                    onClick={() => handleButtonClick(2)}
                    onFocus={() => handleFocus(2)}
                    title={'Ajuda'}
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
