import React from 'react';
import { ModalContent, ModalOverlay, CloseButton, StylizedImg } from './EndGameModal.styles';
import { useNavigate } from 'react-router-dom';
import gif from '../../assets/gifs/umbreon.gif';
import duskull from '../../assets/images/duskull.png';


const Modal = ({ isOpen, points, victory = true, name = 'player', addLeaderboard}) => {
    const navigate = useNavigate();

    const backToMenu = () => {
        if(victory) {
            const objectLeaderBoard = {
                name: name,
                points: points
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
                    <p>Parabéns, você venceu!</p>
                    <p>Seu score foi de {points} pontos.</p>
                    <CloseButton onClick={backToMenu}>Voltar para o menu</CloseButton>
                </ModalContent>)
        } else {
            return( 
                <ModalContent>
                    <StylizedImg src={duskull} />
                    <p>Infelizmente voce perdeu!</p>
                    <p>Seu score foi de {points} pontos.</p>
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
