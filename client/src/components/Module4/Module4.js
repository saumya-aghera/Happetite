import React from 'react'
import Introtomod4 from './Introtomod4';
import GratIntro from './GratIntro';
import Grat from './Grat';
import Letter from './Letter';
import Homework4 from './Homework4';
import Quiz4 from './Quiz4';

const Module4 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <Introtomod4/>
            <GratIntro/>
            <Grat
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
             setUser={setUser}/>
             <Letter
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
             setUser={setUser}/>
            <Homework4 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
            setUser={setUser}/>
            <Quiz4 />
        </div>
    );
}

export default Module4
