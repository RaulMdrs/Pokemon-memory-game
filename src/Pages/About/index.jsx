import BackButton from "../../Components/BackButton/BackButton";
import styled from "styled-components";
import colors from "../../colors";

const AboutContainer = styled.div`
    background-color: ${colors.background}; 
    color: ${colors.text}; 
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 100vw; 
    min-height: 100vh;
`;

const AboutTitle = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    color: ${colors.title};
    font-size: 2rem;
`;

const RuleTitle = styled.h2`
    font-size: 1.7rem;
    margin-bottom: 10px;
    color: ${colors.secondary};
`;

const RuleDescription = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 20px;
    color: ${colors.subTitle};
`;

const About = () => {
    return(
        <AboutContainer>
            <BackButton/>
            <AboutTitle>Sobre</AboutTitle>
            <RuleTitle>Como jogar?</RuleTitle>
            <RuleDescription>
            O jogador deve selecionar um conjunto de cartas por vez. Quando o jogador combina um par de cartas corretamente, elas desaparecem do tabuleiro. Se o jogador selecionar um par incorretamente, as cartas são embaralhadas novamente. Cada combinação correta ganha pontos para o jogador e reduz o cronômetro.
            </RuleDescription>
            <RuleTitle>Regras</RuleTitle>
            <RuleDescription>
                - Selecione um par de cartas por vez.<br/>
                - Combine os pares corretamente para que desapareçam.<br/>
                - Se os pares forem combinados incorretamente, as cartas são embaralhadas novamente.<br/>
                - Ganhe pontos para cada combinação correta.<br/>
                - O cronômetro diminui a cada combinação correta.<br/>
                - Ao fim do cronômetro, o jogador perde e sua pontuação é mostrada, porém não entra no placar de líderes<br/>
            </RuleDescription>
        </AboutContainer>
    );
}

export default About;
