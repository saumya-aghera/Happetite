import React from "react";
import ReactPlayer from "react-player";
import './Video.css';

function Video(){
    return (
        <div className="vid-main" id="hopeVideo">
            <div className='outer-box1'>
                <h2>What is Hope?</h2>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSnHPMR2Cv7Fd7fVWA4cHA_sYLNYZBxAd167NHGeLgbSIe7DjgX6YynT-nwqS7DVTd41SuXMSMHQWnn/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <h2>Hope Theory</h2>
                <div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=ZuHZhi1B4T4"
                    
                    />
                </div>
            </div>
        </div>
    );
}
 


export default Video;
