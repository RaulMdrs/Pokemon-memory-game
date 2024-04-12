import styled from 'styled-components';
import { MenuButton } from '../../Components';
import backgroundImage from '../../assets/36955_pokemon.jpg';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    }

    return(
        <>
            {/* <Header /> */}
            <StylizedMain>
                <MenuButton onClick={() => goTo('/configure-game')} title={'Jogar'}/>
                <MenuButton onClick={() => goTo('/about')} title={'Sobre'}/>
                <MenuButton onClick={() => goTo('/help')} title={'Ajuda'}/>
                <MenuButton onClick={() => goTo('/')}title={'Sair'}/>
            </StylizedMain>
        </>
    )
}

export default Home;