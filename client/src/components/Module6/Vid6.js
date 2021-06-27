import React from 'react'
import ReactPlayer from "react-player";

import './Vid6.css'
function Vid6() {
    return (
        <>
            <div className="vid6-main" id="safety">
                <div className='vid6-cont'>
            <h2>What is Safety Planning?</h2>
            <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'20px'
                    
                    }}>At the beginning of the program, you had created your own safety plan. A safety plan is essential for every individual to have and even more so if an individual is experiencing suicidal thoughts. The video below gives us a brief and simple understanding of what exactly is a safety plan and its importance.
</div>
<div className="video">
<iframe src="https://drive.google.com/file/d/1oYj9MWDSBhiZtMpvFHji37c7ugao-USQ/preview" width="700" height="480" allow="autoplay"></iframe>
                </div>
                </div>
                </div>
            
        </>
    )
}

export default Vid6