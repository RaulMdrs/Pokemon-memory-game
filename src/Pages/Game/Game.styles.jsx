import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100%;
    padding-top: 2rem;
    background: linear-gradient(
        to bottom right,  
        #330157,     
        #530653          
    );
    background-color: #800080;
    background-color: black;
`

export const StylizedMain = styled.div`
    margin: 10px;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 60vh;
    width: 95vw;
    gap: 10px;
` 