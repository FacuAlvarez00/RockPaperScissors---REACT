import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {auth, getOrderScore} from "../firebase"



interface IAuthContext {
  googleSignIn: any
  logOut: any
  user: any
  handleSignOut: any
  points: any
  setPoints: any
  timesLost: any
  setTimesLost: any
  timesWon: any
  setTimesWon: any
  userAvatar: any
  setUserAvatar: any
  avatarOption: any
  setAvatarOption: any 
  setAvatarReceived: any
  avatarReceived: any
  avatarFromDB: any
  setAvatarFromDB: any
  playedonce: any
  setPlayedonce: any

}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContextProviderProps {
  children: ReactNode;
}

/* const getScoreFromStorage = JSON.parse(localStorage.getItem("score") || "[]"); */


export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

  const [user, setUser] = useState<any>(null)
  const [points, setPoints] = useState<any>(0);
  const [timesWon, setTimesWon] =  useState<any>(0)
  const [timesLost, setTimesLost] =  useState<any>(0)
  const [userAvatar, setUserAvatar] = useState<any>()
  const [avatarOption, setAvatarOption] = useState<any>()
  const [avatarReceived, setAvatarReceived] = useState<boolean>()
  const [avatarFromDB, setAvatarFromDB] = useState<any>()
  const [playedonce, setPlayedonce] = useState<boolean>()


 

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        localStorage.setItem("userAlreadyPlayed", "true");
        
    }

    const logOut = () => {
      signOut(auth)
    }

    const pointsAtZero = 0

    const handleSignOut = async () => {
      try {
          await logOut()
          setPoints(pointsAtZero)
          console.log(localStorage.setItem("userAlreadyPlayed", "false"))
          localStorage.setItem("userChoice", "")
          setUserAvatar(null)
          setAvatarFromDB(null)
      } catch (error) {
          console.log(error)
      }
  }
  

 

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
        
        
      })
      return () => {
        unsubscribe()
      }
    }, [])




    useEffect(() => {
      async function fetchData() {
        try {
          
          const { avatarFromDatabase, scoreFromDatabase } = await getOrderScore(
            user.uid
          );
            setAvatarFromDB(avatarFromDatabase)
            setUserAvatar(avatarFromDatabase)
            setPoints(scoreFromDatabase);
        } catch (error) {
          
        }
      }
        fetchData();
        setAvatarReceived(true);
       
    }, [user]);

    

   


    return <AuthContext.Provider value={{ googleSignIn, logOut, user, handleSignOut, points, setPoints, timesLost, setTimesLost, timesWon, setTimesWon, userAvatar, setUserAvatar , avatarOption, setAvatarOption,
    setAvatarReceived, avatarReceived, avatarFromDB, setAvatarFromDB, playedonce
  , setPlayedonce }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};