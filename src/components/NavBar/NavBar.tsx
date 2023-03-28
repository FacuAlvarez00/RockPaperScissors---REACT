import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled from "styled-components"
import "./navbar.css"
import logo from "../../../src/assets/icons/logo.svg"
import UserInfoDisplay from './UserInfoDisplay'
import { FaBars } from "react-icons/fa"


const Navbar = () => {

  const { user } = UserAuth()


  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisibility(!isMenuVisible);
  }
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (


    <header className="header">
      <nav className="nav">



        <button onClick={handleMenuToggle} className="nav-toggle" aria-label="Abrir menú">
          <FaBars />
        </button>

        {isLargeScreen === false? <span><UserInfoDisplay /></span>
        :
        null
        }

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
            <Link className='nav-menu-link nav-link navbar-link-style' to="/">HOME</Link>
          </li>

          <li className="nav-menu-item">
            <Link className='nav-menu-link nav-link navbar-link-style' to="/leaderboard">LEADERBOARD</Link>
          </li>

          <li className="nav-menu-item">
            <Link className='nav-menu-link nav-link navbar-link-style' to="/about">ABOUT</Link>
          </li>


          {user ? (
            <li className="nav-menu-item">
              <Link className='nav-menu-link nav-link navbar-link-style' to="/account">
                ACCOUNT
              </Link>
            </li>

          )
            : (
              <li className="nav-menu-item">
                <Link className='nav-menu-link nav-link navbar-link-style' to="/signin">
                  SIGN IN
                </Link>
              </li>
            )
          }

          {isLargeScreen && <span><UserInfoDisplay /></span>}



        </ul>
      </nav>
    </header>

  )
}

export default Navbar

