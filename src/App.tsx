import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game/Game';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { AuthContextProvider } from './context/AuthContext';
import SignIn from './components/Acount/SignIn';
import Account from './components/Acount/Account';
import Protected from './components/AutoRedirect/AutoRedirect';



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
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage points={points} setMyChoice={setMyChoice} />} />
            <Route path="/game" element={<Game myChoice={myChoice} points={points} setPoints={setPoints} />} />
            <Route path="/signin" element={<SignIn/>}/>

            <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
           
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
