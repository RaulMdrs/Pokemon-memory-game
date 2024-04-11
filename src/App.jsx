import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Game, About, Help, ConfigureGame } from './Pages'
import { GlobalStyles } from './Components'
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from "react";

function App() {

  const [numberOfPairs, setNumberOfPairs] = useState(6);

  const defineNumberOfPairs = (numberOfPairs) => {
    setNumberOfPairs(numberOfPairs);
  }

  return (
    <ErrorBoundary>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configure-game" element={<ConfigureGame 
            defineNumberOfPairs={defineNumberOfPairs} numberOfPairs={numberOfPairs}/>} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
