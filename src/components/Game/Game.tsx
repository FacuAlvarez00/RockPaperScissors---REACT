import React, { useContext, useEffect, useState } from 'react'
import paper from '../../assets/icons/paper.svg'
import scissors from '../../assets/icons/scissors.svg'
import rock from '../../assets/icons/rock.svg'
import { Link } from 'react-router-dom';
import "./game.css"
import Header from '../Header/Header';
import { UserAuth } from '../../context/AuthContext';
import { createOrder, getOrderScore } from '../../firebase';




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
    const [counter, setCounter] = useState(3);


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
                setResult('YOU WON');
                setPoints(points + 1); 
                setTimesWon(timesWon + 1)
            } else if (myChoice.id === computerChoice.id) {
                setResult('DRAW');
            } else {
                setResult('YOU LOST');
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

       /*  useEffect(() => {
            sendInfo()
          }, [points]); */
        
        

    return (
        <>
{/*            {disabled? (
  null
):
<Link to="/">
    <button>Home</button>
  </Link>}
 */}
            <div className='containerGame'>
                {/* <Header points={points}/> */}


               
                <div className='chosesContainer'>

                <div className='houseChoice'>
                <span>YOU PICKED</span>

                     
                        <div className='circleGame circleUser circleUser'>
                        <img className='iconsGame' src={myChoice && myChoice.img}></img>
                        </div>
                    
                </div>

                    <div className='houseChoice'>
                    <span>THE HOUSE PICKED</span>
                    {counter === 0 ? (
                        <div className='circleGame circleHouse circleHouse'>
                            <img className='iconsGame' src={computerChoice && computerChoice.img}></img>
                        </div>
                    ) : 
                    <div className='emptyCircle'>
                        <span>{counter}</span>
                    </div>
                    
                    }
                    </div>

               </div>
                
                <div className='textboxGame'>
                    <span>{result}</span>
                    {counter === 0 ? 
                    <Link to="/">
                    <button>PLAY AGAIN</button>
                    </Link>
                    :
                    null
                    }
                    
                </div>
               
                

              
               {/* <button onClick={bringPointsFromDatabase}>bringPointsFromDatabase</button>  */}
               {/*  <button onClick={enableScore}>Enable score from db</button> */}
                {/* <button onClick={sendInfo}>Send info</button> */}
            </div>
        </>
    );
};

export default Game;



