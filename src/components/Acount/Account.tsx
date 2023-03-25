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


const avatars = [
  avatar,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7
]




const Account = () => {

  const { user, handleSignOut, points, timesWon, timesLost, userAvatar, setUserAvatar, avatarOption,
    setAvatarOption, avatarFromDB, setAvatarFromDB } = UserAuth()


  const [userInfo, setUserInfo] = useState<any>()


  /* const [avatarReceived, setAvatarReceived] = useState<boolean>() */

  console.log(userAvatar)



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
    <section className='account'>

      
    <div className='accountPanel'>

    


      {user && userInfo ?
        <>
       {/*  <div className='btnAccount'>
          <button onClick={handleSignOut}>Log Out</button>
        </div> */}
          
          <div className='accountContainer'>
            <div className='avatarAccount'>
              {avatarOption ?
                <img src={avatarOption} />
                :
                <img src={avatarFromDB} />

              }


            </div>
            <h1 className='greetingsTitle'>Welcome back,<br></br> {user.displayName}</h1>
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


      <section className='userPanel'>
        <p>CHOOSE YOUR AVATAR</p>
        <div>
          

          {avatars.map(avatar =>
            <img onClick={() => {
              setAvatar(avatar);
              setAvatarOption(avatar)
            }
            } className="avatarPanel" src={avatar} />
          )
          }

        </div>
        
        <button onClick={sendAvatar}>Save changes</button>

      </section>
      

    </div>

    </section>
  )
}

export default Account
