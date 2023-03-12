import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../firebase';
import "./leaderboard.css"

const Leaderboard = () => {

    const [userInfo, setUserInfo] = useState<any>()

    useEffect(() => {
        async function fetchData() {
          const data = await getUserInfo();
          setUserInfo(data);
        }
        fetchData();
      }, []);

      console.log(userInfo)
  

  



  return (
    <>
        <div>
            <h1>PLAYER INFO</h1>
        {userInfo? 
        userInfo.map((user: any) => (
            <div className="leaderboardGeneral">
            <h1>NAME: {user.googleUserName}</h1>
            <h1>SCORE: {user.score}</h1>
            </div> 
        )) : <p>Loading...</p>
    
    }


      
    </div>

    </>
  )
}

export default Leaderboard
