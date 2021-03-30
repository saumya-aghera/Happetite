import React from "react";
import ReactPlayer from "react-player";
import './Video.css';

function Video(){
    return (
        <div className="vid-main">
            <h2>Hope Theory</h2>
            <div className="video">
                <ReactPlayer 
                    className="vid-container"
                    url="https://www.youtube.com/watch?v=ZuHZhi1B4T4"
                    
                />
                </div>
        </div>
    )
}
 


export default Video;