import React, { useEffect } from 'react'


type props = {
    points: any
}

const Header: React.FC<props> = (({points}) => {
   
    return (
        <div>
            <div>
                <h1>CURRENT SCORE: {points}</h1>
            </div>
        </div>
    )
})

export default Header;