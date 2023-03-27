import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import {TiTick} from "react-icons/ti"
import {RxCross2} from "react-icons/rx"
import {BiHappyAlt} from "react-icons/bi"
import "./signin.css"


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
            navigate("/")
        }
    }, [user])


  return (
    <>

    <div className='signinHeader'>
            <h1>CHOOSE WISELY</h1>
            <p>I encourage you to sign in to help me improve this app  <BiHappyAlt className='headerLogo'/></p>

        </div>

    <div className="snip1214">
    
     

  <div className="plan">
 
    <div className="plan-cost"><span className="plan-price">GUEST</span>{/* <span className="plan-type">/ Monthly</span> */}</div>
    <ul className="plan-features">
        <li>
            <TiTick className='tickLogo'/>  Access to the game
        </li>

        <li>
            <RxCross2 className='crossLogo'/>  Progress stored, points, times won, etc.
        </li>

        <li>
            <RxCross2 className='crossLogo'/>  Choosing your avatar
        </li>

        <li>
            <RxCross2 className='crossLogo'/> Helping the developer expand the database
        </li>

        <li>
        <RxCross2 className='crossLogo'/>  Compete against other users
        </li>

    
    </ul>
    <div className="plan-select"><Link to={"/"}>Play as guest</Link></div>
    </div>

    <div className="plan">
 
    <div className="plan-cost"><span className="plan-price">SIGNED IN</span>{/* <span className="plan-type">/ Monthly</span> */}</div>
    <ul className="plan-features">
    <li>
            <TiTick className='tickLogo'/>  Access to the game
        </li>

        <li>
            <TiTick className='tickLogo'/>  Progress stored, points, times won, etc.
        </li>

        <li>
           <TiTick className='tickLogo'/>  Choosing your avatar
        </li>

        <li>
            <TiTick className='tickLogo'/> Helping the developer expand the database
        </li>

        <li>
            <TiTick className='tickLogo'/>  Compete against other users
        </li>


    
    </ul>
    <div className="plan-select"> <GoogleButton className='googleButton'
        onClick={handleSignIn}/>
    </div> 
   
    </div>

    
  </div>
  <p className='signinDisclaimer'>*This application uses Google's Firebase API to provide login functionality. None of your Google account data would be at risk. *</p>
  </>
  )
}

export default SignIn
