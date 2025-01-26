import React from 'react'
import { FaApple } from "react-icons/fa";

const Opening = () => {
  return (
    <div style={{position:"absolute", top:"0", left:"0", width:"100vw", height:"100vh"}}>
        <div className="OpeningLogo">
            <FaApple 
                size={128}
                color='var(--openingLogo)'
            />
        </div>
        <div className="OpeningBG"></div>
    </div>
  )
}

export default Opening