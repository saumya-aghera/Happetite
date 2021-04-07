import React from 'react'
import Introtomod2 from './Introtomod2';
import Mindfullness from './Mindfullness';
import Affirmations from './Affirmations';
import Game from './Game';
import Homework from './Homework';
import ModuleHeader from '../ModuleHeader/ModuleHeader';

const menu = [
    {
        title: "Welcome",
        id:"welcome"
    },
    {
        title: "Mindfullness",
        id:"mindfullness"
    },
    {
        title: "Affirmations",
        id:"affirmations"
    },
    {
        title: "Let's Play a Game",
        id:"game"
    },
    {
        title: "Home Assignment",
        id:"homeassignmet2"
    }
    

]

const Module2 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
            />
            <Introtomod2/>
            <Mindfullness
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                
            />
            <Affirmations />
            <Game/>
            <Homework />
        </div>
    );
}

export default Module2
