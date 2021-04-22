import React, { useEffect}from 'react'
import Introtomod4 from './Introtomod4';
import GratIntro from './GratIntro';
import Grat from './Grat';
import Letter from './Letter';
import Homework4 from './Homework4';
import Quiz4 from './Quiz4';
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import axios from 'axios'





const Module4 = ({ loggedIn, onLogin, user, setUser,updatedModuleStatus, changeUpdatedModuleStatus  }) => {
    
    const menu = [
    {
        title: "Welcome",
            id: "welcome4",
        sectionComplete:false
    },
    {
        title: "Introduction to Gratitude",
        id:"into-grat",
        sectionComplete:false
    },
    {
        title: "What are you Thankful for?",
        id:"thankful",
        sectionComplete:updatedModuleStatus.thankful4
    },
    {
        title: "My Gratitude Letter",
        id:"letter",
        sectionComplete:updatedModuleStatus.letter4
    },
    {
        title: "Home Assignment",
        id:"home4",
        sectionComplete:updatedModuleStatus.homeAssignment4
    },
    {
        title: "Take the Quiz",
        id:"quiz4",
        sectionComplete:false

    }
    

]
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
        updateModuleCompletion();
    }, [], [updatedModuleStatus.module4_completed])
    
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
        homeAssignment4,
      mindfulness2,
      
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
            <Introtomod4 />
            <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
            <GratIntro/>
            <Grat
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
             <Letter
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
            <Homework4 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
                        <Quiz4 />
        </div>
    );
}

export default Module4