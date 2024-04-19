import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.main`
    background-color: ${colors.background};
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;
    gap: 30px;
`

export const StylizedOptionButton = styled.button`
    background-color: transparent;
    border: 2px solid ${colors.primary}; 
    color: ${colors.secondary}; 
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 800;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s;
    width: ${props => props.width};
    height: ${props => props.height};

    
    &:hover {
        background-color: ${colors.primary}; 
        color: white;
        border: 2px solid ${colors.accent};
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    }

    &.selected {
        background-color: #7d2ab4;
        color: white;
        border: 3px solid #fff;
    }
`;

export const StylizedStartButton = styled(StylizedOptionButton)`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    font-size: 20px;
    background-color: ${props => props.disabled ? '#acacac' : '#a494af'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? '0.5' : '1'};
    &:hover {
        background-color: ${props => props.disabled ? '#acacac' : '#a53fc4'};
    }
    p {
        padding: 0px;
        margin: 0px;
        font-size: 2rem;

    }
`;

export const SectionTitle = styled.h2`
    color: ${colors.title};
    font-size: 20px;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    color: ${colors.title};
    font-size: 40px;
    margin-bottom: 10px;
`;

export const SectionButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StylizedInput = styled.input`
    border: 2px solid ${colors.primary}; 
    color: ${colors.secondary}; 
    background-color: ${colors.background};
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 2px;
    cursor: text;
    border-radius: 8px;
    transition-duration: 0.4s;
    width: 300px;
    height: 20px;
`;