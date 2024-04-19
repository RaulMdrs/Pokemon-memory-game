import { StylizedCardPokemon, CardContainer, FrontFace, BackFace } from './CardPokemon.styles';
import { useState, useEffect } from "react";

const CardPokemon = ({size = 'medium' ,frontImage, id, pairId, selectedCard, matched, flipped}) => {
    const [dynamicFrontImage, setDynamicFrontImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        selectedCard(id, pairId);
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

    const defineWidth = () => {
        switch (size) {
            case 'small':
                return '160px';
            case 'medium':
                return '200px';
            case 'large':
                return '230px';
            default:
                return '160px';
        }
    }

    const defineHeight = () => {
        switch (size) {
            case 'small':
                return '224px';
            case 'medium':
                return '280px';
            case 'large':
                return '322px';
            default:
                return '280px';
        }
    }

    return(
        <>
            {!loading ? (<CardContainer>
                    <StylizedCardPokemon onClick={handleClick} isFlipped={flipped} 
                        matched={matched} height = {defineHeight()} width = {defineWidth()}>
                        <FrontFace frontImage={dynamicFrontImage}/>
                        <BackFace />
                    </StylizedCardPokemon>
                </CardContainer>) : null}
        </>)
};

export default CardPokemon;