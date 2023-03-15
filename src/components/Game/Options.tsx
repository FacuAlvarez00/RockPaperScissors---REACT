import React, { useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom'


const choices = [
  {
    "type": "Rock",
    "img": rock,
    "id": 1
  },

  {
    "type": "Paper",
    "img": paper,
    "id": 2
  },

  {
    "type": "Scissors",
    "img": scissors,
    "id": 3
  }]


type props = {
  setMyChoice: any
  
}


const Options: React.FC<props> = ({ setMyChoice }) => {

  const setChoice = (choice: any) => {
    setMyChoice(choice)
    console.log(choice)
  }




  return (
    <>

    <div className='options_container'>

      {choices.map((choice) => (
        <Link to="/game">
          <button
            key={choice.id}
            onClick={() => setMyChoice(choice)}>
            <img className='icons' src={choice.img}></img>
          </button>
        </Link>
      ))}

    </div>
 


    </>
  )
}

export default Options
