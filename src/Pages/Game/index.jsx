import styled from 'styled-components'
import {CardPokemon} from '../../Components'

const StylizedMain = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap: 30px;
`
const Game = () => {
    return(
        <StylizedMain>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
        </StylizedMain>
    )
}

export default Game;