import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        </ul>
        </div>
        
        
      
  )
}

export default Navbar
