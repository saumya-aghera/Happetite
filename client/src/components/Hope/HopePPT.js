import React from "react";
import ReactPlayer from "react-player";
import './HopePPT.css';

function HopePPT(){
    return (
        <div className="ppt-main" id="hopeppt">
            <div className='outer-box0'>
                <h2>What is Hope?</h2>
                
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSnHPMR2Cv7Fd7fVWA4cHA_sYLNYZBxAd167NHGeLgbSIe7DjgX6YynT-nwqS7DVTd41SuXMSMHQWnn/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
    );
}
 

export default HopePPT;