import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


const Navbar = () => {

    const {user} = UserAuth()


      return (

        <div>

   
 
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


            {user? (
                <li>{user.displayName}</li>
            )
            : (
                <Link to={"/signin"}>
                    <li className=''>Sign In!</li>
                </Link>
            )
            }
        </ul>
        </div>
        
        
      
  )
}

export default Navbar
