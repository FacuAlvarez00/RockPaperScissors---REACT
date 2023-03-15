import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { getUserInfo } from '../../firebase'

const Account = () => {

    const {user, logOut, handleSignOut, points, timesWon,  timesLost} = UserAuth()


    const [userInfo, setUserInfo] = useState<any>()
  

    useEffect(() => {
        async function fetchData() {
          const data = await getUserInfo();
          setUserInfo(data);
        }
        fetchData();
      }, [points]);


      const data = userInfo?.filter((userdata: any) => {
          return (
            userdata.userinfo === user.uid
          );
        })

    

   
 
  return (
    <div>

       {/*  {userInfo
        .filter((userdata: any) => {
          return (
            userdata.uid === user.uid
          );
        })
        } */}

        {user && userInfo? <h1>Welcome {user.displayName}</h1> : 
        <h1> You are not signed in</h1>
        }
        {userInfo?
        <>
        <h2>Your current points are: {points}</h2>
        <h2>You won: {data[0].wins} times</h2>
        <h2>You lost: {data[0].looses} times</h2> 
        </>
        :
        null
        }
        

        <button onClick={handleSignOut}>Log Out</button>
     {/*    <button onClick={handleDataSent}></button> */}

      
    </div>
  )
}

export default Account
