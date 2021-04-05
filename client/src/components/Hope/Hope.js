import React from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';

const Hope = ({ loggedIn,onLogin }) => {
    
    return (
        <div>
        <Video />
            <HopeBox loggedIn={ loggedIn} onLogin={onLogin}/>
        <Quiz />
        <HomeAssign loggedIn={ loggedIn} onLogin={onLogin}/>        
        </div>
    );
}

export default Hope