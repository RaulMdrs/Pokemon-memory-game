import { StylizedMain } from './Game.styles';
import { CardPokemon } from '../../Components'
import { getRandomCards } from '../../utils';
import { useShuffleCards } from './useShuffleCards';
const Game = ({pairs, difficulty}) => {
    const [getShuffleCards] = useShuffleCards();

    const cards = getShuffleCards(pairs);

    return(
        <StylizedMain>
            {cards.map(card => <CardPokemon frontImage={card.frontImage} id={card.id}/>)}
        </StylizedMain>
    )
}

export default Game;