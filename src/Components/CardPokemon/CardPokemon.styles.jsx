import styled, {keyframes, css} from "styled-components";
import back from '../../assets/cards/back.png';

const defragmentAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(0);
    }
`;


export const CardContainer = styled.div`
    perspective: 1000px;
`;

export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-size: cover;
`;

export const FrontFace = styled(CardFace)`
    background-image: url(${props => props.frontImage});
    transform: rotateY(180deg);
`;

export const BackFace = styled(CardFace)`
    background-image: url(${back});
`;

export const StylizedCardPokemon = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    transform-style: preserve-3d;
    transition: all 1s;
    transform: ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
    cursor: pointer;

    &:hover {
        transform: scale(1.05) ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
        box-shadow: 0 10px 15px 0 rgba(255, 255, 255, 0.35);
    }

    ${({ matched }) => matched && css`
        animation: ${defragmentAnimation} 1s ease forwards;
    `}
 
`;