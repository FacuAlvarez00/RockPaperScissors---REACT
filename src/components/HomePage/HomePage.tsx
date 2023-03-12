import React from 'react'
import Game from '../Game/Game'
import Options from '../Game/Options'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Game/Header';
import NavBar from "../NavBar/NavBar"
import { UserAuth } from '../../context/AuthContext';
import { getOrderScore } from '../../firebase';



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
 

const {points, setPoints, user} = UserAuth()
const [userAlreadyPlayed, setUserAlreadyPlayed] = useState<boolean>(
  localStorage.getItem("userAlreadyPlayed") === "false"
);

  

  console.log(userAlreadyPlayed)



useEffect(() => {
  async function fetchData() {
    try {
      const { userAlreadyPlayed, scoreFromDatabase } = await getOrderScore(
        user.uid
      );
      setUserAlreadyPlayed(userAlreadyPlayed);
      setPoints(scoreFromDatabase);
      /* console.log("info traida de db"); */
   
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
     <h1>
       ESTA ES LA HOMEPAGE!!!
     </h1>
     <Header points={points}/>
     <Options setMyChoice={setMyChoice}/>
   </>
 );
}

export default HomePage;
