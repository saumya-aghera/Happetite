import React from 'react'
import Introtomod5 from './Introtomod5';
import Survey from './Survey';
import CharStrength from './CharStrength';
import MyStrength from './MyStrength';
import Homework5 from './Homework5';


const Module5 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
           
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
