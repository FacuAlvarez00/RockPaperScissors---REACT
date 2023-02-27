import React, { useEffect, useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom';
import "./playable.css"
import Options from './Options'
import HomePage from '../HomePage/HomePage';


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
    myChoice: any;
}


const Game: React.FC<props> = ({ myChoice }) => {

    /* const [userChoice, setUserChoice] = useState<any>(); */
    const [computerChoice, setComputerChoice] = useState<any>();
    const [result, setResult] = useState<any>(null);
    const [points, setPoints] = useState<any>(0);
    const [disabled, setDisabled] = useState<any>();
    const [showGame, setShowGame] = useState<any>(false);
    const [counter, setCounter] = useState(1);




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

   
        const winnerCheck = () => {
            const newComputerAction = randomChoice();
            setComputerChoice(newComputerAction);
            setDisabled(true)
            setShowGame(true)
            if (
                (myChoice.type === "Rock" && newComputerAction.type === "Scissors") ||
                (myChoice.type === "Paper" && newComputerAction.type === "Rock") ||
                (myChoice.type === "Scissors" && newComputerAction.type === "Paper")
            ) {
                setResult('You won!');
                setPoints(points + 1);
            } else if (myChoice.id === newComputerAction.id) {
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



        useEffect(() => {
            const timer: any =

              counter > 0 ? 

              setInterval(() => {setCounter(counter - 1);}, 1000)

                : winnerCheck();
        
            return () => {
              clearInterval(timer);
            };
          }, [counter, computerChoice]);
        
    
   

/*     const reset = () => {
        myChoice(null)
        setComputerChoice(null);
        setResult(null);
        setDisabled(false);
    };

 */




    return (
        <>
            <Link to="/">Home</Link>
            <div>

                <h3>Points: {points}</h3>

                <div className='dd'>
                    
                    {computerChoice ? (
                        <>
                        <h1>You choose: {myChoice && myChoice.type}</h1>
                        <img className='icons' src={myChoice && myChoice.img}></img>
                        </>
                    ) : null}
                </div>

                <div className='dd'>
                    <h1>The house choose: {computerChoice && computerChoice.type}</h1>
                    {computerChoice ? (
                        <img className='icons' src={computerChoice && computerChoice.img}></img>
                    ) : null}
                </div>

                <h3>{result}</h3>

                {computerChoice ? 

                <Link to="/">
                    <button>Play again</button>
                </Link>
                :
                null
                }
            </div>
        </>
    );
};

export default Game;




                {/* 
            {choices.map((choice) => (
                <button

                disabled={disabled}
                key={choice.id}
                onClick={() => handlePlay(choice)}>

                    <img className='icons' src={choice.img}></img>

                 

                </button>
            ))}

           */}




            {/* <Options points={points}/> */}