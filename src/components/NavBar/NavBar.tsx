import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const {user, logOut, handleSignOut} = UserAuth()

/*     const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
 */

/*     useEffect ( () => {
        


    }, [])
 */

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


            {user.displayName ? (
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
        </div>
        
        
      
  )
}

export default Navbar
