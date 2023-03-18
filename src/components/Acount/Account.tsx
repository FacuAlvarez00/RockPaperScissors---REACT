import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { getUserInfo } from '../../firebase'
import "./account.css"

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

        {user && userInfo?
        <>
        <button className="btnAccount" onClick={handleSignOut}>Log Out</button>
         <div className='accountContainer'>
          <div className='avatarAccount'>

          </div>
          <h1>{user.displayName}</h1>
          <div className='accountData'>
            <p>Your current points are: {points}</p>
            <p>You won: {data[0].wins} times</p>
            <p>You lost: {data[0].looses} times</p>

          </div>

        </div>
        
        </>
       
        

        :
        <span>Loading...</span>
        }
        

     {/*    <button onClick={handleDataSent}></button> */}

      
    </div>
  )
}

export default Account
