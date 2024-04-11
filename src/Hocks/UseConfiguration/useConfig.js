import { useMemo, useState } from "react";

export const useConfigurations = () => {
    const [numberOfPairs, setNumberOfPairs] = useState(6);
    const [difficulty, setDifficulty] = useState('easy');
    
    const configArray = useMemo(() => [numberOfPairs, setNumberOfPairs, difficulty, setDifficulty], 
    [numberOfPairs, difficulty]);

    return configArray;
}
