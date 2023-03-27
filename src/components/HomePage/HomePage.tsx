import React from 'react'
import Game from '../Game/Game'
import Options from '../Game/Options'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import NavBar from "../NavBar/NavBar"
import { UserAuth } from '../../context/AuthContext';
import { getOrderScore } from '../../firebase';
import Rules from '../Modal/Rules';
import Account from '../Acount/Account';
import "./homepage.css"




/*  type props = {
    points: number;
    setMyChoice: any;
}
 */


type props = {
  /*  points: number; */
   setMyChoice: any;
}




const HomePage: React.FC<props> = ({setMyChoice}) => {
 

const {points, setPoints, user, timesWon, setTimesWon, timesLost, setTimesLost} = UserAuth()
const [userAlreadyPlayed, setUserAlreadyPlayed] = useState<boolean>(
  localStorage.getItem("userAlreadyPlayed") === "false"
);

  





useEffect(() => {
  async function fetchData() {
    try {
      const { userAlreadyPlayed, scoreFromDatabase, winsFromDatabase, loosesFromDatabase} = await getOrderScore(
        user.uid
      );
      setUserAlreadyPlayed(userAlreadyPlayed);
      setPoints(scoreFromDatabase);
      setTimesWon(winsFromDatabase)
      setTimesLost(loosesFromDatabase)
     
   
    } catch (error) {
      console.log("error");
    }
  }

  if (!userAlreadyPlayed) {
    fetchData();
    setUserAlreadyPlayed(true);
    localStorage.setItem("userAlreadyPlayed", "true");
  }
}, [userAlreadyPlayed]);


 return (
   <>
   <main className=''>

   

     <Options setMyChoice={setMyChoice}/>
     <Rules/>
     </main>
   </>
 );
}

export default HomePage;
