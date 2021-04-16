import React,{useEffect} from 'react'
import Introtomod5 from './Introtomod5';
import Survey from './Survey';
import CharStrength from './CharStrength';
import MyStrength from './MyStrength';
import Homework5 from './Homework5';
import ModuleHeader from '../ModuleHeader/ModuleHeader'

const menu = [
    {
        title: "Welcome",
        id:"welcome5"
    },
    {
        title: "VIA Survey",
        id:"survey"
    },
    {
        title: "Intoduction to Character Strength",
        id:"character"
    },
    {
        title: "My Strength",
        id:"strength"
    },
    {
        title: "Home Assignment",
        id:"hw5"
    },
]


const Module5 = ({ loggedIn, onLogin, user, setUser }) => {
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
            <Introtomod5/>
            <Survey/>
            <CharStrength/>
            <MyStrength
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
            
            <Homework5
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
            setUser={setUser} />
        </div>
    );
}

export default Module5