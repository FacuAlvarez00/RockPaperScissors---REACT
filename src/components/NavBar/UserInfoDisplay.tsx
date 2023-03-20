import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import {RxAvatar} from "react-icons/rx"
import "./userinfodisplay.css"


const UserInfoDisplay = () => {


    const {user, points} = UserAuth()

console.log(user)


  return (
    <div className='userDisplayContainer'>
    <div className='infoDisplay'>
        <div>
            <RxAvatar className='iconUser'/>
        </div>

        <div className='textboxNavbar'>
            {user?
            <span>{user.displayName}</span>
            :
            <span>GUEST</span>
            }

            {points === 0 ?
            <span>SCORE</span>
            
            :
            <span >SCORE <span className='scoreNavbar'>{points}</span></span>
            }
            
        </div>
      
    </div>
    </div>
  )
}

export default UserInfoDisplay
