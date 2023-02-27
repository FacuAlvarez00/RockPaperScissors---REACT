import React from 'react'
import Game from '../Game/Game'
import Options from '../Game/Options'

type props = {
    points: number;
}


const HomePage = ({points}: props) => {
  return (
    <div>
        <h1>This is the homepage</h1>
        <p>{points}</p>
{/* 
        <Options/> */}
      
    </div>
  )
}

export default HomePage
