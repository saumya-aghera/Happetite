import React from 'react'
import Introtomod2 from './Introtomod2';
import Mindfullness from './Mindfullness';
import Affirmations from './Affirmations';
import Game from './Game';
import Homework from './Homework';

const Module2 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
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
