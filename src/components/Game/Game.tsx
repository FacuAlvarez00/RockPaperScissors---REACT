import React, { useEffect, useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import "./playable.css"


const choices = [
    {
        "type": "Rock",
        "img" : rock,
        "id": 1
    },

    {
        "type": "Paper",
        "img" : paper, 
        "id": 2
    },

    {
        "type": "Scissors",
        "img" : scissors,
        "id": 3
    }]



const Game = () => {

    const [userChoice, setUserChoice] = useState<any>();
    const [computerChoice, setComputerChoice] = useState<any>();
    const [result, setResult] = useState<any>(null);
    const [points, setPoints] = useState<any>(0);
    const [disabled, setDisabled] = useState<any>();

  


    useEffect(() => {
     }, [points]);

    const randomChoice = () => {
        const houseChoice = choices[Math.floor(Math.random() * choices.length)];
        return houseChoice;
    };


    const getResult = (userChoice: any, computerChoice: any) => {
        if (userChoice === computerChoice) {
          return 0;
        
        }
    }


    const handlePlay = (choice: any) => {
        setUserChoice(choice);
        const newComputerAction = randomChoice();
        setComputerChoice(newComputerAction);
        setDisabled(true)
        if (
            (choice.type === "Rock" && newComputerAction.type === "Scissors") ||
            (choice.type === "Paper" && newComputerAction.type === "Rock") ||
            (choice.type === "Scissors" && newComputerAction.type === "Paper")
        ) {
            setResult('You won!');
            setPoints(points + 1);
        } else if (choice.id === newComputerAction.id) {
            setResult('DRAW');
        } else {
            setResult('You lost');
            setPoints(points - 1);

       /*      setTimeout(() => {
                setComputerChoice(randomChoice);
              }, 1500);
          
              setTimeout(() => {
                setResult(getResult(choice, randomChoice));
              }, 3000); */
          
           /*    clearTimeout(); */
        }
    };

    const reset = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult(null);
        setDisabled(false);
      };



    return (
        <div>

            <h3>Points: {points}</h3>


            {/* <h1>You choose: {userChoice && userChoice.img}</h1> */}

            <div className='dd'>

            <h1>You choose: {userChoice && userChoice.type}</h1>
            {userChoice? (
                <img className='icons' src={userChoice && userChoice.img}></img>
            ) : null}
            </div>

            <div className='dd'>
            <h1>The house choose: {computerChoice && computerChoice.type}</h1>
            {computerChoice? (
                <img className='icons' src={computerChoice && computerChoice.img}></img> 
            ) : null}

            </div>
           



            
            {/* <h1>The house choose: {computerChoice && computerChoice.type}</h1> */}

            {choices.map((choice) => (
                <button

                disabled={disabled}
                key={choice.id}
                onClick={() => handlePlay(choice)}>

                    <img className='icons' src={choice.img}></img>

                 

                </button>
            ))}

            <h3>{result}</h3>


            {disabled? <button onClick={reset}>Play again</button> : null}
            

            
        </div>
    );
};

export default Game;