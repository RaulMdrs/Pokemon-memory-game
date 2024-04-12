import styled from "styled-components";
import back from '../../assets/cards/back.png';

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