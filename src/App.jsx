import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Game, About, LeaderboardPage, ConfigureGame, NotFound } from './Pages'
import { GlobalStyles } from './Components'
import { ErrorBoundary } from 'react-error-boundary';
import { useState, useEffect } from "react";
import MusicPlayer from './Components/MusicPlayer';
import musicTower from './assets/sounds/PokemonTower.mp3';
import musicLavander from './assets/sounds/PokemonLavanderTown.mp3';

function App() {
  const [numberOfPairs, setNumberOfPairs] = useState(6);
  const [difficulty, setDifficulty] = useState('easy');
  const [leaderboard, setLeaderboard] = useState([]);
  const [name, setName] = useState('');
  const [musicIndex, setMusicIndex] = useState(0);
  const musicTheme = [musicLavander, musicTower];
  
  useEffect(() => {
    const storedLeaderboardData = JSON.parse(localStorage.getItem('leaderboardData'));
    if (storedLeaderboardData) {
      setLeaderboard(storedLeaderboardData);
    } else {
      setLeaderboard([
        { name: 'Ash', points: 420, difficulty: 'easy', pairs: 6 },
        { name: 'Oak', points: 570, difficulty: 'hard', pairs: 10 },
      ]);
    }
  }, []); 

  const defineNumberOfPairs = (n) => {
    setNumberOfPairs(n);
  }

  const defineDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }

  const addToLeaderboard = (playerData) => {
    const updatedLeaderboard = [...leaderboard, playerData];
    localStorage.setItem('leaderboardData', JSON.stringify(updatedLeaderboard));
    setLeaderboard(updatedLeaderboard);
  }

  return (
    <ErrorBoundary>
      <GlobalStyles/>
      <Router>
        <MusicPlayer musicTheme={musicTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configure-game" element={<ConfigureGame 
            defineNumberOfPairs={defineNumberOfPairs} 
            pairs={numberOfPairs}
            difficulty={difficulty} 
            setDifficulty={defineDifficulty}
            name={name}
            setName={setName}
            />} />
          <Route path="/game" element={<Game 
            pairs={numberOfPairs} 
            difficulty={difficulty}
            addToLeaderboard={addToLeaderboard}
            name={name}
          />} />
          <Route path="/leaderboard" element={<LeaderboardPage 
            leaderboard={leaderboard}
            />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
