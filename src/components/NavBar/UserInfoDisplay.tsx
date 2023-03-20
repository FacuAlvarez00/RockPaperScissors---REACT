import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import {RxAvatar} from "react-icons/rx"
import "./userinfodisplay.css"


const UserInfoDisplay = () => {


    const {user, points} = UserAuth()

console.log(user)


  return (
    <div className='infoDisplayContainer'>
        <div>
            <RxAvatar className='iconUser'/>
        </div>

        <div className='textboxNavbar'>
            {user?
            <span>{user.displayName}</span>
            :
            <span>GUEST</span>
            }

            {points?
            <span>Score: {points}</span>
            :
            <span>Score:</span>
            }
            
        </div>
      
    </div>
  )
}

export default UserInfoDisplay
