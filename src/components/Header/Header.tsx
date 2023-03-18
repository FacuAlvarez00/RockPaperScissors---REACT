import React, { useEffect } from 'react'
import "./header.css"
import icon from "../../../src/assets/icons/logo.svg"


type props = {
    points: any
}

const Header: React.FC<props> = (({points}) => {
   
    return (
        <div className='headerContainer'>

        
            <div className='header_wrapper'>
                <div className='textbox'>
                    <span>ROCK</span>
                    <span>PAPER</span>
                    <span>SCISSORS</span>
                </div>

                <div className='scorebox'>
                    <span className='scoreTitle'>Score</span>
                    <span className='score'>{points}</span>
                </div>
                
            </div>

            </div>
   
    )
})

export default Header;