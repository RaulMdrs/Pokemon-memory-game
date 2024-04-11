import styled, { keyframes } from "styled-components";
import back from '../../assets/cards/back.png';
import front from '../../assets/cards/ampharos.png';
import { useState } from "react";

const CardContainer = styled.div`
    perspective: 1000px;
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-size: cover;
`;

const FrontFace = styled(CardFace)`
    background-image: url(${front});
    transform: rotateY(180deg);
`;

const BackFace = styled(CardFace)`
    background-image: url(${back});
`;

const StylizedCardPokemon = styled.div`
    width: 250px;
    height: 350px;
    transform-style: preserve-3d;
    transition: transform 1s;
    transform: ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
    cursor: pointer;

    &:hover {
        transform: scale(1.05) ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
        box-shadow: 0 17px 50px 0 rgba(210, 29, 189, 0.19);
    }
`;

export const CardPokemon = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return(
        <CardContainer>
            <StylizedCardPokemon onClick={handleClick} isFlipped={isFlipped}>
                <FrontFace />
                <BackFace />
            </StylizedCardPokemon>
        </CardContainer>
    );
};
