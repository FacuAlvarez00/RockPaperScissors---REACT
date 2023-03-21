import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { createOrder, getUserInfo } from '../../firebase'
import avatar from "../../assets/avatars/avatar-svgrepo-com.svg"
import avatar2 from "../../assets/avatars/avatar-svgrepo-com(1).svg"
import avatar3 from "../../assets/avatars/avatar-svgrepo-com(2).svg"
import avatar4 from "../../assets/avatars/avatar-svgrepo-com(3).svg"
import avatar5 from "../../assets/avatars/avatar-svgrepo-com(4).svg"
import avatar6 from "../../assets/avatars/avatar-svgrepo-com(5).svg"
import avatar7 from "../../assets/avatars/avatar-svgrepo-com(6).svg"
import { getOrderScore } from '../../firebase'

import "./account.css"

const Account = () => {

    const {user,handleSignOut, points, timesWon,  timesLost, userAvatar, setUserAvatar, avatarOption,
    setAvatarOption, avatarFromDB, setAvatarFromDB} = UserAuth()


    const [userInfo, setUserInfo] = useState<any>()
    

    /* const [avatarReceived, setAvatarReceived] = useState<boolean>() */
   
  

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
        function setAvatar(avatar: any) {
          setUserAvatar(avatar);
        }

        function sendAvatar() {
          const order = {
            userinfo: user?.uid,
            googleUserName: user?.displayName,
            score: points,
            looses: timesLost,
            wins: timesWon,
            avatar: userAvatar,
            date: new Date(),

              
            };
            createOrder(order).then(() => {
              setAvatarFromDB(userAvatar);
            });
          
        
          
      }



 
  return (
    <div>


        {user && userInfo?
        <>
        <button className="btnAccount" onClick={handleSignOut}>Log Out</button>
         <div className='accountContainer'>
          <div className='avatarAccount'>
            {avatarOption ?
            <img src={avatarOption}/>
            :
            <img src={avatarFromDB}/>

            }
            

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
      <section className='userPanel'>
        <div>
          
          <img onClick={() =>
          {
            setAvatar(avatar);
            setAvatarOption(avatar)
          }
          } className="avatarPanel" src={avatar} />

          <img onClick={() =>
          {
            setAvatar(avatar2);
            setAvatarOption(avatar2)
          }
          } className="avatarPanel" src={avatar2} />

          <img onClick={() =>
          {
            setAvatar(avatar3);
            setAvatarOption(avatar3)
          }
          } className="avatarPanel" src={avatar3} />

          <img onClick={() =>
          {
            setAvatar(avatar4);
            setAvatarOption(avatar4)
          }
          } className="avatarPanel" src={avatar4} />

          <img onClick={() =>
          {
            setAvatar(avatar5);
            setAvatarOption(avatar5)
          }
          } className="avatarPanel" src={avatar5} />

          <img onClick={() =>
          {
            setAvatar(avatar6);
            setAvatarOption(avatar6)
          }
          } className="avatarPanel" src={avatar6} />


        </div>
        <button onClick={sendAvatar}>Save changes</button>

        {/* <button onClick={fetchData}>BringAvatar</button>
 */}
      </section>
     
    </div>
  )
}

export default Account
