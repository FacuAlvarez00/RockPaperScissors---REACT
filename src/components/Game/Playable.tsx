import React, { useEffect, useState } from 'react'
import Won from './Won'
import Lost from './Lost'
import Draw from './Draw'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'

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

    const [userChoice, setUserChoice] = useState<string | null>(null)
    const [computerChoice, setComputerChoice] = useState<any>()
    const [result, setResult] = useState<string | undefined>()
    const [points, setPoints] = useState<any>(0)

    const handleClick = (value: any) => {
        const randomChoice = choices[Math.floor(Math.random()*choices.length)];
        setComputerChoice(randomChoice);
        setUserChoice(value.type)
        winnerCheck()
    }

    useEffect(() => {
        winnerCheck()
      }, [userChoice, computerChoice])


  
    const winnerCheck = () => {
        if (computerChoice && userChoice){
            switch(
                userChoice + computerChoice.type
                ) {
                case "PaperRock":
                case "ScissorsPaper":
                case "RockScissors":
                    setResult("You win")
                    setPoints(points + 1)
                    break
                case "RockPaper":
                case "PaperScissors":
                case "ScissorsRock":
                    setResult("You loose")
                    setPoints(points - 1)
    
                    break
                case "PaperPaper":
                case "ScissorsScissors":
                case "RockRock":
                    setResult("DRAW")
            }
        }
    

        }
   
  return (
    <div>
        <h1>You choose: {userChoice}</h1>
        <div>
        <h1>Computer choice is:</h1>
        {computerChoice ? <img src={computerChoice.img}/> : null}
        </div>
         
        {choices.map((choice) => <button key={choice.id} onClick={() => handleClick(choice)}>{choice.type}</button>)}
        <h1> --- {result ? result : <p>loading...</p>} --- </h1>
        <h2>Your points currently are: {points}</h2>
    </div>
)
}

export default Playable
