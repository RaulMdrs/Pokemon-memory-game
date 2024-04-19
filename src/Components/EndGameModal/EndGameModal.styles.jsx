import styled from "styled-components";
import colors from "../../colors";
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background-color: ${colors.backgroundModal};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 50%;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

export const CloseButton = styled.button`
    margin-top: 10px;
    padding: 10px 15px;
    background-color: ${colors.accent};
    color: ${colors.white};
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${colors.primary};
        border: 2px solid ${colors.accent};
        padding: 9px 14px;
    }
`;

export const StylizedImg = styled.img`
    height: 30%;
    width: auto;
`