import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playable from './components/Game/Playable';
import Game from './components/Game/Game';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import Options from './components/Game/Options';
import Header from './components/Game/Header';





function App() {

  const [myChoice, setMyChoice] = useState(null);
  const [points, setPoints] = useState<any>(0); 

/*   useEffect(() => {
    console.log(points);
  }, [points]);
 */


  return (
    <>
    <BrowserRouter>
      <Header points={points}/>
      <Routes>
        <Route path="/" element={<Options setMyChoice={setMyChoice}/>}/>
        <Route path="/game" element={<Game myChoice={myChoice} points={points} setPoints={setPoints} />}/>
      </Routes>
    </BrowserRouter>
    
   
 
    </>
 
  

  );
}

export default App;
