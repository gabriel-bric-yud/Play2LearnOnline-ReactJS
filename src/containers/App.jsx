import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Main from './Main.jsx';
import Label from '../components/Label.jsx';
import GameContainer from './GameContainer.jsx';
import MathFactsSetup from './MathFactsSetup.jsx';
import AnagramHuntSetup from './AnagramHuntSetup.jsx';
import MathFactsGame from './MathFactsGame.jsx';
import AnagramHuntGame from './AnagramHuntGame.jsx';

function App() {
  const [operation, setOperation] = useState(['Addition', '+']);
  const [maxNumber, setMaxNumber] = useState([10, 10]);
  const [wordLength, setWordLength] = useState ([5,5])

  return (
    <div className="App d-grid">
      <Header />
      <Label text = "Play2Learn" textWeight = "3rem" />
      <Routes>
        <Route exact path="/"
          element={<Main  />} 
        />
        
        <Route path="/MathFactsSetup"
          element={<GameContainer text = "Math Facts Practice" content = {
            <MathFactsSetup 
              operation={operation}
              setOperation={setOperation}
              maxNumber={maxNumber}
              setMaxNumber={setMaxNumber}
            />} 
          />} 
        />

        <Route path="/AnagramHuntSetup"
          element={<GameContainer 
            text = "Anagram Hunt" 
            content = {<AnagramHuntSetup 
              wordLength = {wordLength[0]} 
              setWordLength = {setWordLength} 
            />} 
          />}
        />

        <Route path="/MathFactsGame"
          element={<GameContainer 
            text = "Math Facts Practice" 
            content = {<MathFactsGame 
              operation = {operation} 
              maxNumber = {maxNumber} 
            />} 
          />} 
        />

        <Route path="/AnagramHuntGame"
          element={<GameContainer 
            text = "Anagram Hunt" 
            content = {<AnagramHuntGame
              wordLength = {wordLength[0]} 
              setWordLength = {setWordLength} 
            />} 
          />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
