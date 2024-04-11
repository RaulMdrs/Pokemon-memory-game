import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";

const StylizedButton = styled.button`
    background-color: transparent;
    border: 2px solid #7d2ab4; 
    color: #8313bb; 
    padding: 8px 5px 14px 2px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 50%;
    transition-duration: 0.4s;
    width: 60px;
    height: 60px;

    &:hover {
        background-color: #a53fc4; 
        color: white;
        border: 2px solid #7d2ab4;
        transform: scale(1.05);
        box-shadow:0 17px 50px 0 rgba(210, 29, 189, 0.19);
        font-weight: bold;
    }
`

const BackButton = () => {
    return(
        <StylizedButton onClick={() => window.history.back()}>
            <MdArrowBack size={40}/>
        </StylizedButton>
    )
}

export default BackButton;