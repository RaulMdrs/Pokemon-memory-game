import styled from "styled-components"
import colors from "../../colors"

const StylizedButton = styled.button`
    background-color: transparent;
    border: 2px solid ${colors.primary}; 
    color: ${colors.secondary}; 
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
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

    ${props => props.isFocused && `
        background-color: ${colors.primary}; 
        color: white;
        border: 2px solid ${colors.accent};
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    `}
`
const MenuButton = ({title, onClick, height = '50px', width = '200px', isFocused}) => {
    return(
        <>
            <StylizedButton height={height} width={width} onClick={onClick} isFocused={isFocused}>{title}</StylizedButton>
        </>
    )
}

export default MenuButton;