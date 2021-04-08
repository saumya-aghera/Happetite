import React from 'react'
import Introtomod3 from './Introtomod3';
import Optimism from './Optimism';
import Try from './Try';
import Reading from './Reading';
import Homework3 from './Homework3';

const Module3 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <Introtomod3/>
            <Optimism/>
            <Reading />
            <Try
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
             setUser={setUser}/>
            <Homework3 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
            setUser={setUser}/>
        </div>
    );
}

export default Module3
