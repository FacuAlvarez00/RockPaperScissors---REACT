import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"



interface IAuthContext {

  suma: number;
  googleSignIn: any
  logOut: any
  user: any
  handleSignOut: any
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContextProviderProps {
  children: ReactNode;
}

const suma = 2+2

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

  const [user, setUser] = useState({})




    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
      signOut(auth)
    }

    const handleSignOut = async () => {
      try {
          await logOut()
      } catch (error) {
          console.log(error)
      }
  }



    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
        console.log(currentUser)
      })
      return () => {
        unsubscribe()
      }
    }, [])




    return <AuthContext.Provider value={{ suma, googleSignIn, logOut, user, handleSignOut }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};