import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../firebase';
import "./leaderboard.css"


const Leaderboard = () => {

    const [userInfo, setUserInfo] = useState<any>()
    const {points} = UserAuth()

    useEffect(() => {
        async function fetchData() {
          const data = await getUserInfo();
          setUserInfo(data);
        }
        fetchData();
      }, [points]);

      
  
      function compareScores(b: any, a: any) {
        return a.score - b.score;
      }

console.log(userInfo)

  return (
    <>
        <div>
            <h1>PLAYER INFO</h1>
        {userInfo? 
        userInfo.sort(compareScores).map((user: any) => (
          <div className="leaderboardGeneral">
            <h1>Name: {user.googleUserName}</h1>
            <h1>Wins: {user.wins}</h1>
            <h1>Looses: {user.looses}</h1>
            <h1>Score: {user.score}</h1>
  
          </div>
        )) : <p>Loading...</p>
    
    }


      
    </div>

    </>
  )
}

export default Leaderboard
