import React,{useEffect} from 'react'
import Introtomod5 from './Introtomod5';
import Survey from './Survey';
import CharStrength from './CharStrength';
import MyStrength from './MyStrength';
import Homework5 from './Homework5';
import ModuleHeader from '../ModuleHeader/ModuleHeader'
import axios from 'axios'



const Module5 = ({ loggedIn, onLogin, user, setUser,
    updatedModuleStatus, changeUpdatedModuleStatus }) => {
     
    const menu = [
    {
        title: "Welcome",
        id:"welcome5",
        sectionComplete:false
    },
    {
        title: "VIA Survey",
        id:"survey",
        sectionComplete:updatedModuleStatus.survey5
    },
    {
        title: "Intoduction to Character Strength",
        id:"character",
        sectionComplete:false
    },
    {
        title: "My Strength",
        id:"strength",
        sectionComplete:updatedModuleStatus.strength5
    },
    {
        title: "Home Assignment",
        id:"hw5",
        sectionComplete:updatedModuleStatus.homeAssignment5
    },
    ]
    
    useEffect(() => {
        window.scrollTo(0, 0);
         updateModuleCompletion();
    }, [], [updatedModuleStatus.module5_completed])
    
    const updateModuleCompletion = () => {
        const { userId,
        module1_completed,
        module2_completed,
        module3_completed,
        module4_completed,
        module5_completed,
        module6_completed,
        worksheet1,
        hopeBox1,
      homeAssignment1,
      
        mindfulness2,
      
      try3,
      homeAssignment3,
      
      thankful4,
      letter4,
       homeAssignment4,
      hw4_day1,
      hw4_day2,
      hw4_day3,
      hw4_day4,
      hw4_day5,
      hw4_day6,
      hw4_day7,
      
      survey5,
      strength5,
      homeAssignment5,
      
      activity6,
      feedback6
      } = updatedModuleStatus

      
      const updatedStatus={ userId,
        module1_completed,
        module2_completed,
        module3_completed,
        module4_completed,
        module5_completed,
        module6_completed,
        worksheet1,    
        hopeBox1,
          homeAssignment1,
        
      mindfulness2,
      
      try3,
      homeAssignment3,
      homeAssignment4,
      thankful4,
      letter4,
      hw4_day1,
      hw4_day2,
      hw4_day3,
      hw4_day4,
      hw4_day5,
      hw4_day6,
      hw4_day7,
      
      survey5,
      strength5,
      homeAssignment5,
      
      activity6,
      feedback6
      }
      
      axios.post('http://localhost:5000/users/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    }

    

    
    

    return (
        <div>
            <ModuleHeader
           loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <Introtomod5/>
            <Survey/>
            <CharStrength/>
            <MyStrength
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
            <Homework5
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
        </div>
    );
}

export default Module5