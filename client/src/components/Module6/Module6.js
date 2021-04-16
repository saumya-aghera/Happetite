import React,{useEffect} from 'react'
import Introtomod6 from './Introtomod6';
import Activity6 from './Activity6';
import Game6 from './Game6';
import Vid6 from './Vid6';
import End from './End';
import ModuleHeader from '../ModuleHeader/ModuleHeader'

const menu = [
    {
        title: "Welcome",
        id:"welcome6"
    },
    {
        title: "Importance of Well-Being",
        id:"wellbeing"
    },
    {
        title: "What is Safety Planning?",
        id:"safety"
    },
    {
        title: "Activity",
        id:"activity"
    },
    {
        title: "Feedback",
        id:"feedback"
    }
]


const Module6 = ({ loggedIn, onLogin, user, setUser }) => {
     useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])
    
    return (
        <div>
             <ModuleHeader
           loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
            />
            <Introtomod6/>
            <Game6/>
            <Vid6/>
            <Activity6 />
            <End
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
            
          
        </div>
    );
}

export default Module6