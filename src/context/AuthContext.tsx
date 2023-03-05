import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"


interface IAuthContext {

  suma: number;
  googleSignIn: any
  logOut: any
  user: any
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

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
        console.log(currentUser)
      })
      return () => {
        unsubscribe()
      }
    }, [])




    return <AuthContext.Provider value={{ suma, googleSignIn, logOut, user }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};