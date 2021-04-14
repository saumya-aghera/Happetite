import React, { useEffect}from 'react'
import Introtomod4 from './Introtomod4';
import GratIntro from './GratIntro';
import Grat from './Grat';
import Letter from './Letter';
import Homework4 from './Homework4';
import Quiz4 from './Quiz4';
import ModuleHeader from '../ModuleHeader/ModuleHeader';



const menu = [
    {
        title: "Welcome",
        id:"welcome4"
    },
    {
        title: "Introduction to Gratitude",
        id:"into-grat"
    },
    {
        title: "What are you Thankful for?",
        id:"thankful"
    },
    {
        title: "My Gratitude Letter",
        id:"letter"
    },
    {
        title: "Home Assignment",
        id:"home4"
    },
    {
        title: "Take the Quiz",
        id:"quiz4"

    }
    

]


const Module4 = ({ loggedIn,onLogin,user,setUser }) => {
    
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
