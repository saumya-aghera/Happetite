import React from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';

const Hope = ({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) => {
    
    return (
        <div>
            <Video />
            <HopeBox
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                userHelp={userHelp}
                setUserHelp={setUserHelp}
            />
            <Quiz />
            <HomeAssign
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                userHelp={userHelp}
                setUserHelp={setUserHelp}
            />
        </div>
    );
}

export default Hope