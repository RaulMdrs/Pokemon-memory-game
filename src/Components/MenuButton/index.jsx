import styled from "styled-components"

const StylizedButton = styled.button`
    background-color: transparent;
    border: 2px solid #7d2ab4; 
    color: #8313bb; 
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
        background-color: #a53fc4; 
        color: white;
        border: 2px solid #7d2ab4;
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    }

    &:focus {
        outline: none;
        background-color: #a53fc4; 
        color: white;
        border: 2px solid #7d2ab4;
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    }

    ${props => props.isFocused && `
        background-color: #a53fc4; 
        color: white;
        border: 2px solid #7d2ab4;
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    `}
`
const MenuButton = ({title, onClick, height = '50px', width = '200px', isFocused}) => {
    console.log(title, isFocused);
    return(
        <>
            <StylizedButton height={height} width={width} onClick={onClick} isFocused={isFocused}>{title}</StylizedButton>
        </>
    )
}

export default MenuButton;