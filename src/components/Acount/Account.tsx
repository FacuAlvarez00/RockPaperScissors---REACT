import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import SignIn from './SignIn'
/* import { handleDataSent } from '../../firebase' */

const Account = () => {

    const {user, logOut, handleSignOut} = UserAuth()
    console.log(user)

    const userData = {
        google_username: user.displayName,
       

    }
       


    
        


    

    
   
 
  return (
    <div>
        {user? <h1>Welcome {user.displayName}</h1> : 
        <h1> You are not signed in</h1>
        }
        <h2>Your current points are: X</h2>
        <h2>You won: X times</h2>
        <h2>You lost: X times</h2>

        <button onClick={handleSignOut}>Log Out</button>
     {/*    <button onClick={handleDataSent}></button> */}

      
    </div>
  )
}

export default Account
