import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import SignIn from './SignIn'
/* import { handleDataSent } from '../../firebase' */

const Account = () => {

    const {user, logOut, handleSignOut, points, timesWon,  timesLost} = UserAuth()

/* 
    const userData = {
        google_username: user.displayName,
       

    }
        */


    
        


    

    
   
 
  return (
    <div>
        {user? <h1>Welcome {user.displayName}</h1> : 
        <h1> You are not signed in</h1>
        }
        <h2>Your current points are: {points}</h2>
        <h2>You won: {timesWon} times</h2>
        <h2>You lost: {timesLost} times</h2>

        <button onClick={handleSignOut}>Log Out</button>
     {/*    <button onClick={handleDataSent}></button> */}

      
    </div>
  )
}

export default Account
