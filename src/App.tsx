import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playable from './components/Game/Playable';
import Game from './components/Game/Game';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';
import Options from './components/Game/Options';



function App() {

  const [myChoice, setMyChoice] = useState(null);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Options setMyChoice={setMyChoice}/>}/>
        <Route path="/game" element={<Game myChoice={myChoice}/>}/>
      </Routes>
    </BrowserRouter>
    
   
 
    </>
 
  

  );
}

export default App;
