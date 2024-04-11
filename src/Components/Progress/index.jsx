import styled, { keyframes } from "styled-components";

const StylizedProgress = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    border-radius: ${props => props.borderRadius};
    margin: 10px;
    border: 2px solid black;
    overflow: hidden;
`

const fillAnimation = keyframes`
    from {
        width: 0%;
    }
    to {
        width: ${props => props.value}%;
    }
`;

const ProgressFill = styled.div`
    width: ${props => props.value}%;
    height: 100%;
    background-color: ${props => props.valueColor};
    border-radius: ${props => props.borderRadius};
    margin: 0px;
    animation: ${fillAnimation} 1s ease forwards;
`


const Progress = ({maxValue, value, valueColor = 'black', bgColor = 'white', height = '20px', width = '120px', borderRadius = '20px'}) => {
    const calculeValue = (maxValue, value) => {
        return (value * 100) / maxValue
    }
    
    return(
        <StylizedProgress bgColor={bgColor} height={height} width={width} borderRadius={borderRadius}>
            <ProgressFill value={calculeValue(maxValue, value)} valueColor={valueColor} borderRadius={borderRadius}/>
        </StylizedProgress>
    )
}

export default Progress;