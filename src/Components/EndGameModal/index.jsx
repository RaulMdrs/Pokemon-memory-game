import React from 'react';
import { ModalContent, ModalOverlay, CloseButton, StylizedImg, StylizedText } from './EndGameModal.styles';
import { useNavigate } from 'react-router-dom';
import gif from '../../assets/gifs/umbreon.gif';
import duskull from '../../assets/images/duskull.png';


const Modal = ({ isOpen, points, victory = true, name = 'player', addLeaderboard, difficulty = 'easy', pairs = 6}) => {
    const navigate = useNavigate();

    const backToMenu = () => {
        if(victory) {
            const objectLeaderBoard = {
                name: name,
                points: points,
                difficulty: difficulty,
                pairs: pairs
            }
            addLeaderboard(objectLeaderBoard);
        }
        navigate('/');
    }

    const returnModalInfo = () => {
        if (victory) {
            return(
                <ModalContent>
                    <StylizedImg src={gif} />
                    <StylizedText>Parabéns, você venceu!</StylizedText>
                    <StylizedText>Adicionamos seu score de {points} pontos ao placar de líderes.</StylizedText>
                    <CloseButton onClick={backToMenu}>Voltar para o menu</CloseButton>
                </ModalContent>)
        } else {
            return( 
                <ModalContent>
                    <StylizedImg src={duskull} />
                    <StylizedText>Infelizmente voce perdeu!</StylizedText>
                    <StylizedText>Seu score foi de {points} pontos.</StylizedText>
                    <CloseButton onClick={backToMenu}>Voltar para o menu</CloseButton>
                </ModalContent>
            )
        }

    }

    return (
        isOpen && (
            <ModalOverlay>
                { returnModalInfo() }
            </ModalOverlay>
        )
    );
}

export default Modal;
