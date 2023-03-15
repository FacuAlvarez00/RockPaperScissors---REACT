import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game/Game';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import SignIn from './components/Acount/SignIn';
import Account from './components/Acount/Account';
import Protected from './components/AutoRedirect/AutoRedirect';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About/About';
import NotFound from './components/About/NotFound/NotFound';
import GuestOrLog from './components/Modal/GuestOrLog';




const getUserChoiceFromStorage = JSON.parse(localStorage.getItem("userChoice") || "[]")

function App() {



  const [myChoice, setMyChoice] = useState(getUserChoiceFromStorage);
  

  return (
    <>

      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />
          <GuestOrLog/>
          <Routes>
            <Route path="/" element={<HomePage setMyChoice={setMyChoice} />} />
            <Route path="/game" element={<Game myChoice={myChoice}/>} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>

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
