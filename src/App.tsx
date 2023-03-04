import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playable from './components/Game/Playable';
import Game from './components/Game/Game';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import Options from './components/Game/Options';

import Header from './components/Game/Header';
import NavBar from './components/NavBar/NavBar';


const getScoreFromStorage = JSON.parse(localStorage.getItem("score") || "[]");
const getUserChoiceFromStorage = JSON.parse(localStorage.getItem("userChoice") || "[]") 


function App() {
  
  const [myChoice, setMyChoice] = useState(getUserChoiceFromStorage);
  const [points, setPoints] = useState(getScoreFromStorage); 

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(points))
    localStorage.setItem("userChoice", JSON.stringify(myChoice))
  }, [points]);
  
  

  return (
    <>
    <BrowserRouter>
      <NavBar/>
   
      <Routes>
        <Route path="/" element={<HomePage points={points} setMyChoice={setMyChoice}/>}/>
        <Route path="/game" element={<Game myChoice={myChoice} points={points} setPoints={setPoints} />}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
