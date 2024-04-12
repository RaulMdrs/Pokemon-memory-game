import { StylizedCardPokemon, CardContainer, FrontFace, BackFace } from './CardPokemon.styles';
import { useState, useEffect } from "react";

const CardPokemon = ({frontImage, id}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [dynamicFrontImage, setDynamicFrontImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    console.log(frontImage, id);

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
                    <StylizedCardPokemon onClick={handleClick} isFlipped={isFlipped}>
                        <FrontFace frontImage={dynamicFrontImage}/>
                        <BackFace />
                    </StylizedCardPokemon>
                </CardContainer>) : null}
        </>)
};

export default CardPokemon;