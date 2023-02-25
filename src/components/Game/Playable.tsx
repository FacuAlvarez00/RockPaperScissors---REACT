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
    const [time, setTime] = useState<any>(3);
    const [userChoice, setUserChoice] = useState<any>();
    const [computerChoice, setComputerChoice] = useState<any>();
    const [result, setResult] = useState<string | undefined>();
    const [points, setPoints] = useState<any>(0);


    const randomChoice = () =>{
        const houseChoice = choices[Math.floor(Math.random() * choices.length)];
        return houseChoice
    }
  

    const handleClick = (action: any) => {
      const newComputerAction = randomChoice()
      setComputerChoice(newComputerAction);
      setUserChoice(action);
      winnerCheck()
    };


  
    const winnerCheck = () => {
      if (computerChoice && userChoice) {
        switch (userChoice.type + computerChoice.type) {
          case "PaperRock":
          case "ScissorsPaper":
          case "RockScissors":
            setResult("You win");
            setPoints(points + 1);
            break;
          case "RockPaper":
          case "PaperScissors":
          case "ScissorsRock":
            setResult("You loose");
            setPoints(points - 1);
            break;
          case "PaperPaper":
          case "ScissorsScissors":
          case "RockRock":
            setResult("DRAW");
            setPoints(points);
            break;
        }
      }
    };
  


  
    return (
      <div>
        <h1>Time left: {time}</h1>
  
        <div className="flex">
          <div>
            <h2>Your choice is:</h2>
          </div>
          <div>{userChoice ? <img src={userChoice.img} /> : null}</div>
        </div>
  
        <div className="flex">
          <h2>Computer choice is:</h2>
          {computerChoice ? <img src={computerChoice.img} /> : null}
        </div>
  
        {choices.map((choice) => (
          <button key={choice.id} onClick={() => handleClick(choice)}>
            <img src={choice.img}></img>
          </button>
        ))}
  
        <h1> --- {result} --- </h1>
        <h2>Your points currently are: {points}</h2>
      </div>
    );
  };
  
  export default Playable;