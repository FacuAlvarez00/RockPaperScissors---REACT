import React, { useEffect, useState } from 'react'
import Won from './Won'
import Lost from './Lost'
import Draw from './Draw'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import "./playable.css"

 const choices = [
{
    "type" : "Rock",
     "img" : rock,
     "id": 1
},

{
    "type" : "Paper",
    "img" : paper,
    "id": 2
},

{
    "type" : "Scissors",
    "img" : scissors,
    "id": 3
}] 


const Playable = () => {

    const [userChoice, setUserChoice] = useState<any>()
    const [computerChoice, setComputerChoice] = useState<any>()
    const [result, setResult] = useState<string | undefined>()
    const [points, setPoints] = useState<any>(0)

    const handleClick = (value: any) => {
        const randomChoice = choices[Math.floor(Math.random()*choices.length)];
        setComputerChoice(randomChoice);
        setUserChoice(value)
        winnerCheck()
    }



    useEffect(() => {
        winnerCheck()
      }, [userChoice, computerChoice])


  
    const winnerCheck = () => {
        if (computerChoice && userChoice){
            switch(
                userChoice.type + computerChoice.type
                ) {
                case "PaperRock":
                case "ScissorsPaper":
                case "RockScissors":
                    setResult("You win")
                    setPoints((prevPoints: number) => prevPoints + 1);
                    break
                case "RockPaper":
                case "PaperScissors":
                case "ScissorsRock":
                    setResult("You loose")
                    setPoints((prevPoints: number) => prevPoints - 1);
                    break
                case "PaperPaper":
                case "ScissorsScissors":
                case "RockRock":
                    setResult("DRAW")
                    break
            }
        }
    }

   
   
  return (
    <div>

        <div className='flex'>
            <div>

        <h2>Your choice is:</h2>
            </div>
            <div>
        {userChoice ? <img src={userChoice.img}/> : null}
            </div>
        </div>

        <div className='flex'>
        <h2>Computer choice is:</h2>
        {computerChoice ? <img src={computerChoice.img}/> : null}
        </div>
         
        {choices.map((choice) => 
        <button key={choice.id} onClick={() => handleClick(choice)}>
            <img src={choice.img}></img>
        </button>)}

        <h1> --- {result ? result : null} --- </h1>
        <h2>Your points currently are: {points}</h2>
    </div>
)
}

export default Playable
