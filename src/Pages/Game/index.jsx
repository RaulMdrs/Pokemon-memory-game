import { GameContainer, StylizedMain } from './Game.styles.jsx';
import { CardPokemon } from '../../Components'
import { useShuffleCards } from './useShuffleCards.js';
import { useEffect, useState } from 'react';
import EndGameModal from '../../Components/EndGameModal/index.jsx';
import Progress from '../../Components/Progress/index.jsx';
const Game = ({pairs, difficulty, addToLeaderboard, name}) => {
    const [cardsData, handleClickCard, getShuffleCards] = useShuffleCards();
    const [flippedCards, setFlippedCards] = useState([]);
    const [canFlip, setCanFlip] = useState(true);
    const [points, setPoints] = useState(0); 
    const [matchs, setMatchs] = useState(0);
    const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [maxTimer, setMaxTimer] = useState(10);
    const [victory, setVictory] = useState(false);
    const [endGame, setEndGame] = useState(false);

    useEffect(() => {
        getShuffleCards(pairs);
        setCanFlip(true);

        switch(difficulty)
        {
            case 'easy':
                setMaxTimer(45);
                break;
            case 'medium':
                setMaxTimer(30);
                break;
            case 'hard':
                setMaxTimer(20);
                break;
        }
    }, [])

    useEffect(() => {
        console.log('entrei');
        if(!endGame) {
            const timer = setInterval(() => {
                console.log(timer);
                if(!endGame){
                    setTimer((prevTime) => prevTime + 1);
                }
            }, 1000);


            return () => clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        if(!endGame && timer >= maxTimer){
            setEndGame(true);
            setTimeout(() => {
                handleOpenModal();
            }, 1000)
            
        }
    }, [timer]);
    
    const playMade = (id, pairId) => {
        if (canFlip) {
            if (flippedCards.length === 1 && flippedCards[0].id !== id) {
                handleClickCard(id);
                setFlippedCards([...flippedCards, { id, pairId }]);
                setCanFlip(false);
            } else if (flippedCards.length === 0) {
                handleClickCard(id);
                setFlippedCards([{ id, pairId }]);
            }
        }
    }

    useEffect(() => {
        if(flippedCards.length >= 2) {
            setCanFlip(false);
            if(flippedCards[0].pairId === flippedCards[1].pairId || flippedCards[1].id === flippedCards[0].id) {
                setTimeout(() => {
                    cardsData.forEach(card => {
                        if(card.pairId === flippedCards[0].pairId) {
                            card.matched = true;
                            setFlippedCards([]);
                            setCanFlip(true);
                            setMatchs(matchs + 1);
                            setPoints(points + 100);
                            setTimer(prevTime => prevTime - 2);
                        }
                    })
                }, 1000)
            } else {
                setTimeout(() => {
                    handleClickCard([flippedCards[0].id ,flippedCards[1].id]);
                    setFlippedCards([]);
                    setPoints(points -20);
                    setCanFlip(true);
                }, 1000)
            }
        } 
    },[flippedCards, cardsData])

    useEffect(() => {
        if(matchs === pairs) {
            setTimeout(() => {
                setVictory(true);
                handleOpenModal();
            })
        }
    }, [matchs])

    const handleOpenModal = () => {
        setIsEndGameModalOpen(!isEndGameModalOpen);
    }

    const renderCards = () => {
        return cardsData.map(card => 
            <CardPokemon 
                frontImage={card.frontImage} 
                id={card.id}
                pairId={card.pairId}
                selectedCard={playMade}
                canFlip={canFlip}
                matched={card.matched}
                flipped={card.flipped}
            />)
    }

    return(
        <GameContainer>
             <Progress
                    maxValue={maxTimer}
                    value={timer}
                    valueColor="#5c11b8"
                    bgColor="black"
                    height="25px"
                    width="80%"
                    borderRadius="20px"
                />
            <StylizedMain>
              <EndGameModal
                isOpen={isEndGameModalOpen}
                points={points}
                victory={victory}
                addLeaderboard={addToLeaderboard}
                name={name}
                />
            {renderCards()}
            </StylizedMain>
        </GameContainer>
    )
}

export default Game;