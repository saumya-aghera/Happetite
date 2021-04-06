import React from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';

const Hope = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <Video />
            <HopeBox
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
            <Quiz />
            <HomeAssign
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
        </div>
    );
}

export default Hope