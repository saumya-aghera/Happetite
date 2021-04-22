import React, { useEffect}from 'react'
import Introtomod3 from './Introtomod3';
import Optimism from './Optimism';
import Try from './Try';
import Reading from './Reading';
import Homework3 from './Homework3';
import ModuleHeader from '../ModuleHeader/ModuleHeader'

import axios from 'axios'



const Module3 = ({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus  }) => {
    const menu = [
    {
        title: "Welcome",
        id:"welcome3",
        sectionComplete:false
    },
    {
        title: "What is learned optimism ?",
        id:"optimism",
        sectionComplete:false
    },
    {
        title: "Reading Material",
        id:"read",
        sectionComplete:false
    },
    {
        title: "Try It Yourself!",
        id:"try",
        sectionComplete:updatedModuleStatus.try3
    },
    {
        title: "Home Assignment",
        id:"home3",
        sectionComplete:updatedModuleStatus.homeAssignment3
    }
    

]

    useEffect(() => {
        updateModuleCompletion();
        
    }, [updatedModuleStatus.module3_completed])


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
            <Introtomod3/>
            <Optimism/>
            <Reading />
            <Try
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
            <Homework3 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
           
                
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
        </div>
    );
}

export default Module3
