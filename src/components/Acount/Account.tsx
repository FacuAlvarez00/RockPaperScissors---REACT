import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { createOrder, getUserInfo, updateAvatar, getOrderScore } from '../../firebase'
import avatar from "../../assets/avatars/avatar-svgrepo-com.svg"
import avatar2 from "../../assets/avatars/avatar-svgrepo-com(1).svg"
import avatar3 from "../../assets/avatars/avatar-svgrepo-com(2).svg"
import avatar4 from "../../assets/avatars/avatar-svgrepo-com(5).svg"
import avatar5 from "../../assets/avatars/avatar-svgrepo-com(4).svg"
import avatar6 from "../../assets/avatars/avatar-svgrepo-com(3).svg"
import avatar7 from "../../assets/avatars/avatar-svgrepo-com(6).svg"
import avatar9 from "../../assets/avatars/avatar-svgrepo-com(8).svg"
import avatar10 from "../../assets/avatars/avatar-svgrepo-com(9).svg"
import avatar11 from "../../assets/avatars/avatar-svgrepo-com(10).svg"



import { ColorRing } from 'react-loader-spinner'
import "./account.css"


const avatars = [
  avatar,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar9,
  avatar10,
  avatar11
]




const Account = () => {

  const { user, handleSignOut, points, timesWon, timesLost, userAvatar, setUserAvatar, avatarOption,
    setAvatarOption, avatarFromDB, setAvatarFromDB, setPlayedonce, playedonce } = UserAuth()


  const [userInfo, setUserInfo] = useState<any>()
  








  useEffect(() => {
    async function fetchData() {
      const data = await getUserInfo();
      setUserInfo(data);
    }
    fetchData();
  }, [points]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { userPlayedOnce } = await getOrderScore(
          user.uid
        );
        setPlayedonce(userPlayedOnce)
      } catch (error) {
  
      }
    }
      fetchData();
      
  }, []);



  const data = userInfo?.filter((userdata: any) => {
    return (
      userdata.userinfo === user.uid
    );
  })

  function setAvatar(avatar: any) {
    setUserAvatar(avatar);
  }

  function sendAvatar() {
    try {
      const order = {
        userinfo: user?.uid,
        googleUserName: user?.displayName,
        avatar: userAvatar,
        date: new Date(),
      };
      updateAvatar(order).then(() => {
        setAvatarFromDB(userAvatar);
      });
    } catch  {
      console.error("Ocurrió un error al enviar el avatar: ");
    }
  }


  const maxNameWords = 2
  const nameWords = user.displayName.split(' ');
  const trimmedName = nameWords.slice(0, maxNameWords).join(' ');
 

  return (
    <>

      <div className='btnAccount'>
        <button onClick={handleSignOut}>Log Out</button>
      </div>

      <section className='account'>



        <div className='accountPanel'>


    


          {user && userInfo?
            <>


              <div className='accountContainer'>
                <div className='avatarAccount'>
                  {avatarOption ?
                    <img src={avatarOption} />
                    :
                    <img src={avatarFromDB} />

                  }


                </div>
                <h1 className='greetingsTitle'>Welcome back,<br></br>{trimmedName}</h1>
                <div className='accountData'>

                  {points?
                  <>
                    <p>Your current points are: {points}</p>
                    <p>You won: {data[0].wins} times</p>
                    <p>You lost: {data[0].looses} times</p>
                  </>
        
                  :

                  <>
                    <p>Your current points are:</p>
                    <p>You won: times</p>
                    <p>You lost: times</p>
                  </>
                }

                </div>

              </div>
            </>
            :
            <ColorRing
              visible={true}

              height="150"
              width="150"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }


          <div className='userPanel'>
            <p className='avatarPanelTitle'>CHOOSE YOUR AVATAR</p>
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
            {playedonce?
            <button onClick={sendAvatar}>Save changes</button>
            :
            <>
              <button disabled={true}>Save changes</button>
              <p className='disabledButtonText'>You have to play at least one game<br/>
              before choosing an avatar.</p>
            </>
         
            }
            

          </div>


        </div>

      </section>
    </>
  )
}

export default Account
