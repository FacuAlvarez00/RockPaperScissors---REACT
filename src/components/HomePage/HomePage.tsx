import React from 'react'
import Game from '../Game/Game'
import Options from '../Game/Options'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Game/Header';
import NavBar from "../NavBar/NavBar"
import { UserAuth } from '../../context/AuthContext';


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
 

const {points, setPoints} = UserAuth()
 

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
