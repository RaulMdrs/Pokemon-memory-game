import { useState } from "react";
import { getRandomCards } from "../../utils";

export const useShuffleCards = () => {
    const [CardsData, setCardsData] = useState([]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const getShuffleCards = (pairs) => {
        const cards = getRandomCards(pairs);
        const initialCardsData = cards.flatMap((card, index) => [
            {   id: index, 
                pairId: index,
                frontImage: card, 
                matched: false,
                flipped: false
            },
            {   id: index, 
                pairId: index,
                frontImage: card, 
                matched: false,
                flipped: false
            }
        ]);

        setCardsData(shuffleArray(initialCardsData));
    }

    const handleClickCard = (cardId) => {
        const updatedCardsData = CardsData.map(card => {
            if (card.id===cardId) {
                return {...card, flipped: !card.flipped }
            } else {
                return card;
            }
        })
        setCardsData(updatedCardsData);
    }

    return [CardsData, handleClickCard, getShuffleCards]
}   