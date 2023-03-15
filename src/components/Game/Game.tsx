import React, { useContext, useEffect, useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom';
import "./playable.css"
import Header from '../Header/Header';
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
   
}




const Game: React.FC<props> = ({ myChoice }) => {


      
    localStorage.setItem("userChoice", JSON.stringify(myChoice))

    const [computerChoice, setComputerChoice] = useState<any>();
    const [result, setResult] = useState<any>(null);
 
    const [disabled, setDisabled] = useState<any>(true);
    const [counter, setCounter] = useState(1);


    const {user, points, setPoints, timesWon, setTimesWon, timesLost, setTimesLost} = UserAuth()
    
    

  /*   async function enableScore(){
        const { userAlreadyPlayed, scoreFromDatabase } = await getOrderScore(user.uid);
        setUserAlreadyPlayed(userAlreadyPlayed);
        setPoints(scoreFromDatabase);
        if (userAlreadyPlayed){
            setPoints(scoreFromDatabase);
        }
        else{
            setPoints(pointsAtZero)
        }
      }
 */
 

    const newHousePick = () => {
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    };

    function sendInfo() {
        const order = {
            userinfo: user?.uid,
            googleUserName: user?.displayName,
            score: points,
            looses: timesLost,
            wins: timesWon,
            date: new Date(),
          };
        createOrder(order)
        /* console.log("pusheado a db") */
    }

    
    


      useEffect(() => {
        newHousePick();
      }, []);

      useEffect(() =>{
        

      }, [])
   
        const winnerCheck = () => {
            setDisabled(false)
            if (
                (myChoice.type === "Rock" && computerChoice.type === "Scissors") ||
                (myChoice.type === "Paper" && computerChoice.type === "Rock") ||
                (myChoice.type === "Scissors" && computerChoice.type === "Paper")
            ) {
                setResult('You won!');
                setPoints(points + 1); 
                setTimesWon(timesWon + 1)
            } else if (myChoice.id === computerChoice.id) {
                setResult('DRAW');
            } else {
                setResult('You lost');
                setPoints(points - 1);
                setTimesLost(timesLost + 1)
    
            }
        };



        useEffect(() => {
            const timer: any =

              counter > 0 ? 

              setInterval(() => {setCounter(counter - 1);}, 1000)
              
                : winnerCheck()
                
                
        
            return () => {
              clearInterval(timer);
            };
          }, [counter, computerChoice]);

        useEffect(() => {
            sendInfo()
          }, [points]);
        
        

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
               {/* <button onClick={bringPointsFromDatabase}>bringPointsFromDatabase</button>  */}
               {/*  <button onClick={enableScore}>Enable score from db</button> */}
                {/* <button onClick={sendInfo}>Send info</button> */}
            </div>
        </>
    );
};

export default Game;



