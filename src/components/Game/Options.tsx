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
        <div className='triangleContainer'>
          <img className="triangle" src={triangle} />
        </div>


        <div className='items'>

          <div className='topContainer'>

            <div className='circle circle2-container'
              onClick={() => setMyChoice(choices[1])}>
              <Link to="/game">
                <img className='icons circle2' src={paper}></img>
              </Link>
            </div>

            <div className='circle circle3-container'
              onClick={() => setMyChoice(choices[2])}>
              <Link to="/game">
                <img className='icons circle3' src={scissors}></img>
              </Link>
            </div>

          </div>

          <div className='bottomCircle'>

            <div className='circle circle1-container'
              onClick={() => setMyChoice(choices[0])}>
              <Link to="/game">
                <img className='icons circle1' src={rock}></img>
              </Link>
            </div>

          </div>

        </div>





      </div>



    </>
  )
}

export default Options
