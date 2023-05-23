import React, { useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom'
import triangle from "../../assets/icons/bg-triangle.svg"
import "./options.css"


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
        <h1 className='titleOptions'>CHOOSE YOUR OPTION</h1>
        <div className='triangleContainer'>
          <img className="triangle" src={triangle} alt="Triangle" />
        </div>

        <div className='items'>
          <div className='topContainer'>
              <Link to="/game">
            <div className='circle circle2-container'>
                <img
                  className='icons circle2'
                  src={paper}
                  alt="Paper"
                  onClick={() => setChoice(choices[1])}
                />
            </div>
              </Link>

              <Link to="/game">
            <div className='circle circle3-container'>
                <img
                  className='icons circle3'
                  src={scissors}
                  alt="Scissors"
                  onClick={() => setChoice(choices[2])}
                />
            </div>
              </Link>
          </div>

              <Link to="/game">
          <div className='bottomCircle'>
            <div className='circle circle1-container'>
                <img
                  className='icons circle1'
                  src={rock}
                  alt="Rock"
                  onClick={() => setChoice(choices[0])}
                />
            </div>
          </div>
              </Link>
        </div>
      </div>
    </>
  );
};

export default Options
