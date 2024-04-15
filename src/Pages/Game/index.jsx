import { StylizedMain } from './Game.styles';
import { CardPokemon } from '../../Components'
import { getRandomCards } from '../../utils';
import { useShuffleCards } from './useShuffleCards.js';
import { useEffect, useState } from 'react';
const Game = ({pairs, difficulty}) => {
    const [cardsData, handleClickCard, getShuffleCards] = useShuffleCards();
    const [flippedCards, setFlippedCards] = useState([]);
    const [canFlip, setCanFlip] = useState(true);
    useEffect(() => {
        getShuffleCards(pairs);
    }, [])
    
    const playMade = (id) => {
        setFlippedCards([...flippedCards, id]);
    }

    useEffect(() => {
        if(flippedCards.length >= 2) {
            // setCanFlip(false);
            setTimeout(() => {
                checkMatch();
                setFlippedCards([]);
                setCanFlip(true);
            }, 1000);
        }
    },[flippedCards])


    const checkMatch = () => {
        const firstCard = cardsData[flippedCards[0]];
        const secondCard = cardsData[flippedCards[1]];

        if(firstCard.id == secondCard.id){
            console.log('acertou miseravi');
        } else {
            console.log('errou');
        }
    }
    const renderCards = () => {
        return cardsData.map(card => 
            <CardPokemon 
                frontImage={card.frontImage} 
                id={card.id}
                selectedCard={playMade}
                canFlip={canFlip}
                matched={card.matched}
                forceFlipped={card.flipped}
            />)
    }

    return(
        <StylizedMain>
            {renderCards()}
        </StylizedMain>
    )
}

export default Game;