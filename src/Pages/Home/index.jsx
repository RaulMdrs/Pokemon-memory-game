import styled from 'styled-components';
import { Header } from '../../Components'
import { MenuButton } from '../../Components/MenuButton';
import backgroundImage from '../../assets/36955_pokemon.jpg';
import { useConfigurations } from '../../Hocks/UseConfiguration/useConfig';
import { useEffect } from 'react';

const StylizedMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    height: 100vh;
    padding-left: 30px;
`

const Home = () => {

    const [numberOfPairs, setNumberOfPairs, difficulty, setDifficulty] = useConfigurations();


    useEffect(() => {
      setNumberOfPairs(10);
    }, []); 
    
    console.log(numberOfPairs);
    return(
        <>
            {/* <Header /> */}
            <StylizedMain>
                <MenuButton onClick={() => window.location.href = '/configure-game'} title={'Jogar'}/>
                <MenuButton onClick={() => window.location.href = '/about'} title={'Sobre'}/>
                <MenuButton onClick={() => window.location.href = '/help'} title={'Ajuda'}/>
                <MenuButton onClick={() => window.location.href = '/'}title={'Sair'}/>
            </StylizedMain>
        </>
    )
}

export default Home;