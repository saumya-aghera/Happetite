import React from 'react'
import Introtomod3 from './Introtomod3';
import Optimism from './Optimism';
import Try from './Try';
import Reading from './Reading';
import Homework3 from './Homework3';
import ModuleHeader from '../ModuleHeader/ModuleHeader'

const menu = [
    {
        title: "Welcome",
        id:"welcome3"
    },
    {
        title: "What is learned optimism ?",
        id:"optimism"
    },
    {
        title: "Reading Material",
        id:"read"
    },
    {
        title: "Try It Yourself!",
        id:"try"
    },
    {
        title: "Home Assignment",
        id:"home3"
    }
    

]




const Module3 = ({ loggedIn,onLogin,user,setUser }) => {
    
    return (
        <div>
            <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
            />
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
