import React from 'react'
import './CharStrength.css'
import ReactPlayer from "react-player";
import './CharStrength.css'

function CharStrength() {
    return (
       
            <div className="ch-main" id='character'>
                <div className='ch-cont'>
            <h2>Introduction to Character Strengths</h2>
            <div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=BdQRECe37K0"
                    
                    />
                    </div>
                    </div>
        </div>
        
    
    )
}

export default CharStrength
