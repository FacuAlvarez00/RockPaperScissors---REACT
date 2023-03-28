import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import {RxAvatar} from "react-icons/rx"
import "./userinfodisplay.css"
import { getOrderScore } from '../../firebase'




const UserInfoDisplay = () => {


    const {user, points, setPoints , setAvatarReceived, avatarFromDB, setAvatarFromDB} = UserAuth()
    
    


    useEffect(() => {
      async function fetchData() {
        try {
          const { avatarFromDatabase, scoreFromDatabase } = await getOrderScore(
            user.uid
          );
            setAvatarFromDB(avatarFromDatabase)
            setPoints(scoreFromDatabase);
        } catch (error) {
    
        }
      }
        fetchData();
        setAvatarReceived(true);
        
       
    }, [user]);



  
    

  const maxNameWords = 2;
  const trimmedName = user?.displayName ? user.displayName.split(' ').slice(0, maxNameWords).join(' ') : '';
 

  return (
   
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
            <span>{trimmedName}</span>
            :
            <span>GUEST</span>
            }

            
            <span >SCORE <span className='scoreNavbar'>{points}</span></span>
            

            
            
        </div>
      
    </div>
  
  )
}

export default UserInfoDisplay
