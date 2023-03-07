import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignIn = () => {


    const {googleSignIn, logOut, user} = UserAuth() 
    const navigate = useNavigate()

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }

    }

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect ( () => {
        if (user != null){
            navigate("/account")
        }
    }, [user])


  return (
    <div>
        <GoogleButton
        onClick={handleSignIn}
/>
      
    </div>
  )
}

export default SignIn
