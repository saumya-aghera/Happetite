import React from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';
import Worksheet from './Worksheet';

const Hope = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <Video />
            <Worksheet
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
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
