import React, { useContext, useEffect, useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom';
import "./playable.css"
import Header from './Header';
import { UserAuth } from '../../context/AuthContext';
import { createOrder, getOrderScore } from '../../firebase';
import Options from './Options'
import HomePage from '../HomePage/HomePage';
import userEvent from '@testing-library/user-event';



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
    points: any;
    setPoints: any;
    scoreFromDatabase: any;
    userAlreadyPlayed: boolean;
}



const Game: React.FC<props> = ({ myChoice, points, setPoints }) => {




    /* const [userChoice, setUserChoice] = useState<any>(); */
    const [scoreFromDatabase, setScoreFromDatabase] = useState<any>(null);
    const [userAlreadyPlayed, setUserAlreadyPlayed] = useState<boolean>(false);
    const [computerChoice, setComputerChoice] = useState<any>();
    const [result, setResult] = useState<any>(null);
    /* const [points, setPoints] = useState<any>(0); */
    const [disabled, setDisabled] = useState<any>(true);
    const [showGame, setShowGame] = useState<any>(false);
    const [counter, setCounter] = useState(1);

    const {user} = UserAuth()
    
    
   /*  async function bringPointsFromDatabase(){
        const { userAlreadyPlayed, scoreFromDatabase } = await getOrderScore(user.uid);
    }
    */
    async function bringPointsFromDatabase(){
        const { userAlreadyPlayed, scoreFromDatabase } = await getOrderScore(user.uid);
        setUserAlreadyPlayed(userAlreadyPlayed);
        setScoreFromDatabase(scoreFromDatabase);
    }
    


    useEffect(() => {
    }, [points]);


    
   

    /* const getResult = (userChoice: any, computerChoice: any) => {
        if (userChoice === computerChoice) {
            return 0;
        }
    }
 */

    
   /*  const randomChoice = () => {
        const houseChoice = choices[Math.floor(Math.random() * choices.length)];
        return houseChoice;
    };

 */
    const newHousePick = () => {
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    };

    function sendInfo() {
        const order = {
            userinfo: user.uid,
            googleUserName: user.displayName,
            score: points,
            date: new Date()
          };
        createOrder(order)
        setPoints(points = 0);
    }
    


      useEffect(() => {
        newHousePick();
      }, []);
   
        const winnerCheck = () => {
        /*     const newComputerAction = randomChoice();
            setComputerChoice(newComputerAction); */
            setDisabled(false)
            setShowGame(true)
            if (
                (myChoice.type === "Rock" && computerChoice.type === "Scissors") ||
                (myChoice.type === "Paper" && computerChoice.type === "Rock") ||
                (myChoice.type === "Scissors" && computerChoice.type === "Paper")
            ) {
                setResult('You won!');
                setPoints(points + 1);
            } else if (myChoice.id === computerChoice.id) {
                setResult('DRAW');
            } else {
                setResult('You lost');
                setPoints(points - 1); 
    
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
      
    };

 */



    return (
        <>
           {disabled? (
  null
):
<Link to="/">
    <button>Home</button>
  </Link>}

            <div>
                <Header points={points}/>

              {/*   <h3>Points: {points}</h3> */}

                <div className='dd'>

                <h1>You choose:</h1>

                    {counter === 0 ? (
                        <>
                        <img className='icons' src={myChoice && myChoice.img}></img>
                        </>
                    ) : null}
                </div>

                <div className='dd'>
                    <h1>The house choose:</h1>
                    {counter === 0 ? (
                        <img className='icons' src={computerChoice && computerChoice.img}></img>
                    ) : null}
                </div>

                <h3>{result}</h3>

                {counter === 0 ? 
                <Link to="/">
                    <button>Play again</button>
                </Link>
                :
                null
                }
                <button onClick={bringPointsFromDatabase}>PUSH SCORE?</button>
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



           
                /*      setTimeout(() => {
                         setComputerChoice(randomChoice);
                       }, 1500);
                   
                       setTimeout(() => {
                         setResult(getResult(choice, randomChoice));
                       }, 3000); */
    
                /*    clearTimeout(); */




            {/* <Options points={points}/> */}