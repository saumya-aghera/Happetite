import React,{useEffect} from 'react'
import Introtomod6 from './Introtomod6';
import Activity6 from './Activity6';
import Game6 from './Game6';
import Vid6 from './Vid6';
import End from './End';


const Module6 = ({ loggedIn, onLogin, user, setUser }) => {
     useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])
    
    return (
        <div>
            
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