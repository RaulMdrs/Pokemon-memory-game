import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Game, About, Help, ConfigureGame } from './Pages'
import { GlobalStyles } from './Components'
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from "react";

function App() {
  const [numberOfPairs, setNumberOfPairs] = useState(6);
  const [difficulty, setDifficulty] = useState('easy');

  const defineNumberOfPairs = (n) => {
    setNumberOfPairs(n);
  }

  const defineDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }

  return (
    <ErrorBoundary>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configure-game" element={<ConfigureGame 
            defineNumberOfPairs={defineNumberOfPairs} 
            pairs={numberOfPairs}
            difficulty={difficulty} 
            setDifficulty={defineDifficulty}
            />} />
          <Route path="/game" element={<Game 
            pairs={numberOfPairs} 
            difficulty={difficulty}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
