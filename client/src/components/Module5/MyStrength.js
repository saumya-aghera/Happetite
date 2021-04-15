import React from 'react'
import './MyStrength.css'
import ReactPlayer from "react-player";

function MyStrength() {
    return (
        <>
        <div className="mystrength-main">
            <h2>My Strengths</h2>
            <p><u>Instructions:</u> Make a list of your strengths, talents, skills that you resonate with. Write about how these qualities have helped you get through tough times in the past.
</p>
<p>Quick Tip:</p>
<div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=yQMJg_9ouVQ"
                    
                    />
                    </div>

        </div>
        
    </>
    )
}

export default MyStrength
