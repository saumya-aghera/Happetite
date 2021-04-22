import React, {useState,useEffect} from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';

import ModuleHeader from '../ModuleHeader/ModuleHeader';
import SideMenu from '../Menu/SideMenu';
import HopePPT from './HopePPT'
import Worksheet from './Worksheet';
import axios from 'axios';



const Hope = ({ loggedIn, onLogin, user, setUser,
    updatedModuleStatus, changeUpdatedModuleStatus }) => {
    
    const menu = [
    {
        title: "What is Hope?",
        id: 'hopeppt',
        sectionComplete:false
    },
    {
        title:"Hope Theory",
        id: "hopeVideo",
        sectionComplete:false
    },
    {
        title:'Cultivating Hope and Possibility',
        id: "worksheet",
        sectionComplete:updatedModuleStatus.worksheet1
    },
    {
        title:'Hope Box',
        id: "hopeBox",
        sectionComplete:updatedModuleStatus.hopeBox1
    },
    {
        title:'Take this Quiz',
        id: "hopeQuiz",
        sectionComplete:false
    },
    {
        title:'Home Assignment',
        id: "homeAssignment",
        sectionComplete:updatedModuleStatus.homeAssignment1
    }
]



    useEffect(() => {
        updateModuleCompletion();
        
    }, [updatedModuleStatus.module1_completed])
    

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
            <HopePPT />
            <Video />
            <Worksheet
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <HopeBox
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                
            />
            <Quiz />
            <HomeAssign
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

export default Hope
