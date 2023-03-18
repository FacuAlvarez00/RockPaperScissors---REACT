import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled from "styled-components"
import "./navbar.css"
import logo from "../../../src/assets/icons/logo.svg"


const Navbar = () => {

    const {user} = UserAuth()

    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);


      return (

        <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo}/>
          </Link>
          <button className="navbar-toggle" onClick={handleToggle}>
            <span className="navbar-toggle-icon"></span>
          </button>
          <ul className={open ? "navbar-links active" : "navbar-links"}>
            <li className="navbar-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-link">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="navbar-link">
              <Link to="/about">About</Link>
            </li>
          </ul>
          {user ?  (
            <li className="navbar-link">
                <Link to="/account">
                     Account
                </Link>
            </li>
               
            )
            : (
            <li className="navbar-link">
                <Link to={"/signin"}>
                    Sign In
                </Link>
            </li>
            )
            }
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
