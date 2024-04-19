import { useState } from "react";
import { getRandomCards } from "../../utils";
import { v4 as uuidv4 } from 'uuid';
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
            {   id: uuidv4(), 
                pairId: index,
                frontImage: card, 
                matched: false,
                flipped: false
            },
            {   id: uuidv4(), 
                pairId: index,
                frontImage: card, 
                matched: false,
                flipped: false
            }
        ]);

        setCardsData(shuffleArray(initialCardsData));
    }

    const handleClickCard = (cardIds) => {
        const updatedCardsData = CardsData.map(card => {
            if (cardIds.includes(card.id)) {
                return {...card, flipped: !card.flipped };
            } else {
                return card;
            }
        });
        setCardsData(updatedCardsData);
    }
    return [CardsData, handleClickCard, getShuffleCards]
}   