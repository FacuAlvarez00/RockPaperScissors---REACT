import React, { useEffect } from 'react'
import "./header.css"
import icon from "../../../src/assets/icons/logo.svg"


type props = {
    points: any
}

const Header: React.FC<props> = (({points}) => {
   
    return (
        <div>
            <div className='header_wrapper'>
                <img className='iconHeader' src={icon}/>
                <h1>CURRENT SCORE: {points}</h1>
            </div>
        </div>
    )
})

export default Header;