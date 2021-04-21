import React,{useEffect} from 'react'
import Introtomod6 from './Introtomod6';
import Activity6 from './Activity6';
import Game6 from './Game6';
import Vid6 from './Vid6';
import End from './End';
import ModuleHeader from '../ModuleHeader/ModuleHeader'
import axios from 'axios'



const Module6 = ({ loggedIn, onLogin, user, setUser,updatedModuleStatus, changeUpdatedModuleStatus  }) => {
    
    const menu = [
    {
        title: "Welcome",
        id:"welcome6",
        sectionComplete:false
    },
    {
        title: "Importance of Well-Being",
        id:"wellbeing",
        sectionComplete:false
    },
    {
        title: "What is Safety Planning?",
        id:"safety",
        sectionComplete:false
    },
    {
        title: "Activity",
        id:"activity",
        sectionComplete:updatedModuleStatus.activity6
    },
    {
        title: "Feedback",
        id:"feedback",
        sectionComplete:updatedModuleStatus.feedback6
    }
]
    
    useEffect(() => {
        window.scrollTo(0, 0);
       
        updateModuleCompletion();
        
  
    }, [], [updatedModuleStatus.module2_completed])
    
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
      
        minfulness2,
      
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
        
      minfulness2,
      
      try3,
      homeAssignment3,
      
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
            <Introtomod6/>
            <Game6/>
            <Vid6/>
            <Activity6
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <End
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
          
        </div>
    );
}

export default Module6