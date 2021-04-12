import React from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';

import ModuleHeader from '../ModuleHeader/ModuleHeader';
import SideMenu from '../Menu/SideMenu';
import HopePPT from './HopePPT'
import Worksheet from './Worksheet';


const menu = [
    {
        title: "What is Hope?",
        id: 'hopeppt'
    },
    {
        title:"Hope Theory",
        id:"hopeVideo"
    },
    {
        title:'Cultivating Hope and Possibility',
        id:"worksheet"
    },
    {
        title:'Hope Box',
        id:"hopeBox"
    },
    {
        title:'Take this Quiz',
        id:"hopeQuiz"
    },
    {
        title:'Home Assignment',
        id:"homeAssignment"
    }
]


const Hope = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            
            <ModuleHeader
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu = {menu}
            />
            <HopePPT />
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
