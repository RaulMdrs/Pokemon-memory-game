import { useEffect, useRef } from "react";

const useSound = (soundFile) => {
    const audioRef = useRef(new Audio(soundFile));

    const playSound = () => {
        const audio = audioRef.current;
        audio.currentTime = 0;
        audio.play();
    };

    useEffect(() => {
        return () => {
            setTimeout(() => {
                const audio = audioRef.current;
                audio.pause();
                audio.currentTime = 0;
            }, audioRef.current.duration * 1000);
        };
    }, []);

    return playSound;
};

export default useSound;