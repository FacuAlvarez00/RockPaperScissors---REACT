import React from 'react'
import travolta from "../../../src/assets/NotFound/travoltawhite.gif"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>Ups, the page you tried to enter doesn't exist.</p>
        <div>
            <p>Return to <Link to="/"> homepage</Link></p>

        </div>
        
        
      <img src={travolta}/>
    </div>
  )
}

export default NotFound
