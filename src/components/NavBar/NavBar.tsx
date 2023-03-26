import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled from "styled-components"
import "./navbar.css"
import logo from "../../../src/assets/icons/logo.svg"
import UserInfoDisplay from './UserInfoDisplay'


const Navbar = () => {

    const {user} = UserAuth()

    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);


      return (

        <nav className="navbar">
        <div className="navbar-container">

        <Link to="/" className="navbar-logo">
            <div className='logoNav'>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>

            </Link>
            {/* 
            <div className='logoNavMobile'>
              <span>RPS</span>
            </div> */}

         {/*  {open ?
            <Link to="/" className="navbar-logo">
            <div className='logoNav'>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            </Link> :
          null

          }
           */}
        
          
        
          
          <ul className={open ? "navbar-links active" : "navbar-links"}>
            <li  className="navbar-link">
              <Link className='navbar-link-style' to="/">Home</Link>
            </li>
            <li  className="navbar-link">
              <Link className='navbar-link-style' to="/leaderboard">Leaderboard</Link>
            </li>
            <li  className="navbar-link">
              <Link className='navbar-link-style' to="/about">About</Link>
            </li>
            
          
          {user ?  (
            <li  className="navbar-link">
                <Link className='navbar-link-style' to="/account">
                    Account
                </Link>
            </li>
               
            )
            : (
            <li  className="navbar-link">
                <Link  className='navbar-link-style' to={"/signin"}>
                    Sign In
                </Link>
            </li>
            )
            }
          
              
          
             </ul>
             <UserInfoDisplay/>

             <button className="navbar-toggle" onClick={handleToggle}>
                <span className="navbar-toggle-icon"></span>
            </button>
           
        </div>
        
      </nav>

      /*   <div>

   
 
        <ul className=''>

            <Link to={"/"}>
                <li className=''>Home</li>
            </Link>

            <Link to={"/leaderboard"}>
                <li className=''>Leaderboard</li>
            </Link>

            <Link to={"/about"}>
                <li className=''>About</li>
            </Link>


            {user ?  (
                <Link to="/account">
                     <li>Account</li>
                </Link>
               
            )
            : (
                <Link to={"/signin"}>
                    <li className=''>Sign In</li>
                </Link>
            )
            }
        </ul>
        </div> */
      
  )
}

export default Navbar
