import { StylizedCardPokemon, CardContainer, FrontFace, BackFace } from './CardPokemon.styles';
import { useState, useEffect } from "react";

const CardPokemon = ({frontImage, id, selectedCard, canFlip, matched}) => {
    const [dynamicFrontImage, setDynamicFrontImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        if (canFlip) {
            console.log("Clicou");
            // setIsFlipped(!isFlipped);
            if (!isFlipped) {
                selectedCard(id);
            } 
        }
    };

    useEffect(() => {
        const getFrontImage = async () => {
            try {
                const importedImage = await import(`../../assets/cards/${frontImage}.png`);
                setDynamicFrontImage(importedImage.default);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao importar imagem:", error);
            }
        };

        getFrontImage();

        return () => {
            setDynamicFrontImage(null);
        };
    }, [frontImage]);


    return(
        <>
            {!loading ? (<CardContainer>
                    <StylizedCardPokemon onClick={handleClick} isFlipped={isFlipped} matched={matched}>
                        <FrontFace frontImage={dynamicFrontImage}/>
                        <BackFace />
                    </StylizedCardPokemon>
                </CardContainer>) : null}
        </>)
};

export default CardPokemon;