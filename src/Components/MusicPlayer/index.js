import { useEffect, useState } from 'react';

const MusicPlayer = ({ musicTheme }) => {
  const [musicIndex, setMusicIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio(musicTheme[musicIndex]);
    audio.volume = 0.05;

    const handleMusicEnd = () => {
      const nextMusicIndex = (musicIndex + 1) % musicTheme.length;
      setMusicIndex(nextMusicIndex);
    };

    audio.addEventListener('ended', handleMusicEnd);
    audio.play();

    return () => {
      audio.removeEventListener('ended', handleMusicEnd);
      audio.pause();
    };
  }, [musicIndex, musicTheme]);

  return null;
};

export default MusicPlayer;
