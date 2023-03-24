import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import {RxAvatar} from "react-icons/rx"
import "./userinfodisplay.css"
import { getOrderScore } from '../../firebase'




const UserInfoDisplay = () => {


    const {user, points, setPoints , userAvatar, setUserAvatar, setAvatarReceived, avatarOption, avatarFromDB, setAvatarFromDB} = UserAuth()
    
    


    useEffect(() => {
      async function fetchData() {
        try {
          const { avatarFromDatabase, scoreFromDatabase } = await getOrderScore(
            user.uid
          );
            setAvatarFromDB(avatarFromDatabase)
            setPoints(scoreFromDatabase);
            
          
       
        } catch (error) {
          console.log("error");
        }
      }
        fetchData();
        setAvatarReceived(true);
       
    }, [user]);

    

  return (
    <div className='userDisplayContainer'>
    <div className='infoDisplay'>
        <div>
            {avatarFromDB? 
            <img className="iconDisplay" src={avatarFromDB}/>
            :
            <RxAvatar className='iconUser'/>     
            } 
            
            
        </div>

        <div className='textboxNavbar'>
            {user?
            <span>{user.displayName}</span>
            :
            <span>GUEST</span>
            }

            {points === 0?
            <span >SCORE </span>
            :
            <span >SCORE <span className='scoreNavbar'>{points}</span></span>
            

            
            }
            
            
        </div>
      
    </div>
    </div>
  )
}

export default UserInfoDisplay
