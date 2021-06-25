import React from "react";
import ReactPlayer from "react-player";
import './Video.css';

function Video(){
    return (
        <div className="vid-main" id="hopeVideo">
            <div className='outer-box1'>
                <h2>Hope Theory</h2>
                <div className="video">
                <iframe src="https://drive.google.com/file/d/1_qMWunKLKrDVEcRWqakDqWmbmPWauazu/preview" width="640" height="480" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    );
}
 


export default Video;