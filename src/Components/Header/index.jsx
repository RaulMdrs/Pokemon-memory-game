import { Container } from './Header.styles';
import logo from '../../assets/icons/pokemonLogo.png';
export const Header = () => {
    return(
        <>
            <Container>
                <img src={logo} alt='Logo do Pokemon' height='100px'/>
            </Container>
        </>
    )
}

