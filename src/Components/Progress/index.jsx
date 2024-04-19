import styled, { keyframes } from "styled-components";

const StylizedProgress = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    border-radius: ${props => props.borderRadius};
    margin: 10px;
    padding: 3px;
    border: 2px solid black;
    overflow: hidden;
`

const ProgressFill = styled.div`
    width: ${props => props.value}%;
    height: 100%;
    background-color: ${props => props.valueColor};
    border-radius: ${props => props.borderRadius};
    margin: 0px;
    z-index: 999;
    transition: all 0.7s ease;
`

const Stylizedh2 = styled.h2`
    text-align: center;
    margin-top: 10px;
`


const Progress = ({maxValue, value, valueColor = 'black', bgColor = 'blue', height = '20px', width = '120px', borderRadius = '20px'}) => {
    const calculeValue = (maxValue, value) => {
        if(value > maxValue) {
            return (maxValue * 100) / maxValue;
        } else {
            return (value * 100) / maxValue;
        }
    }
    
    return(
        <StylizedProgress bgColor={bgColor} height={height} width={width} borderRadius={borderRadius}>
            <ProgressFill value={calculeValue(maxValue, value)} valueColor={valueColor} borderRadius={borderRadius}/>
            <h2>{value}%</h2>
        </StylizedProgress>
    )
}

export default Progress;