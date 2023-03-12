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
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContextProviderProps {
  children: ReactNode;
}

const getScoreFromStorage = JSON.parse(localStorage.getItem("score") || "[]");


export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

  const [user, setUser] = useState({})
  const [points, setPoints] = useState(getScoreFromStorage);



  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(points))
 
  }, [points]);



  

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




    return <AuthContext.Provider value={{ googleSignIn, logOut, user, handleSignOut, points, setPoints }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};