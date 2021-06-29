import React from 'react'
import './GratIntro.css'
import ReactPlayer from "react-player";

function GratIntro() {
    return (
      
        <div className="gratinfo-main" id='into-grat'>
            <div className='gratinfo-cont'>
            <h2>Introduction to Gratitude</h2>
                <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}>Gratitude as we know, is a feeling of being appreciative or thankful for someone or something. This skill helps us focus on the positive aspects of our life. Let’s get a better understanding of it by watching the video -
</div>
                <div className="video">
                <iframe src="https://drive.google.com/file/d/1biv9ndt2L7ZQ7zf9pCI3nQusBbTejzAS/preview" width="700" height="480" allow="autoplay"></iframe>
                  
                    </div>
        </div>
        </div>
       
    )
}

export default GratIntro