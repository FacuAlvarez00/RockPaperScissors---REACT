import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled from "styled-components"
import "./navbar.css"
import logo from "../../../src/assets/icons/logo.svg"
import UserInfoDisplay from './UserInfoDisplay'


const Navbar = () => {

  const { user } = UserAuth()

  
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisibility(!isMenuVisible);
  }



  return (


    <header className="header">
      <nav className="nav">

       

        <button onClick={handleMenuToggle} className="nav-toggle" aria-label="Abrir menú">
          abrir menu 
        </button>

        <ul className={`nav-menu ${isMenuVisible ? 'nav-menu_visible' : ''}`}>

        <span>
        <Link to="/">
          <div className='logoNav'>
            <span>ROCK</span>
            <span>PAPER</span>
            <span>SCISSORS</span>
          </div>
        </Link> 


        </span>
      
        
       


          <li className="nav-menu-item">
            <Link className='nav-menu-link nav-link' to="/">HOME</Link>
          </li>

          <li className="nav-menu-item">
            <Link className='nav-menu-link nav-link' to="/leaderboard">LEADERBOARD</Link>
          </li>

          <li className="nav-menu-item">
            <Link className='nav-menu-link nav-link' to="/about">ABOUT</Link>
          </li>

  
          {user ? (
            <li className="nav-menu-item">
              <Link className='nav-menu-link nav-link' to="/account">
                ACCOUNT
              </Link>
            </li>

          )
            : (
              <li className="nav-menu-item">
                <Link className='nav-menu-link nav-link' to="/signin">
                 SIGN IN
                </Link>
              </li>
            )
          }

          <span>
          <UserInfoDisplay/>
          </span>
       

        </ul>
      </nav>
    </header>

  )
}

export default Navbar

