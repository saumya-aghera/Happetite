import React from 'react'
import './MyStrength.css'
import ReactPlayer from "react-player";

function MyStrength() {
    return (
     
        <div className="mystrength-main" id='strength'>
            <div className="mystrength-cont">
            <h2>My Strengths</h2>
                <div
                    style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'10px'
                    
                    }}
                ><u>Instructions:</u> Make a list of your strengths, talents, skills that you resonate with. Write about how these qualities have helped you get through tough times in the past.
</div>
<div style={{
                        fontSize: 'medium',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom:'10px'
                    
                    }}>Quick Tip:</div>
<div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=yQMJg_9ouVQ"
                    
                    />
                    </div>
</div>
        </div>
        
    
    )
}

export default MyStrength
