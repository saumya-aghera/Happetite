import React,{useEffect} from 'react'
import Introtomod2 from './Introtomod2';
import Mindfullness from './Mindfullness';
import Affirmations from './Affirmations';
import Game from './Game';
import Homework from './Homework';
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import axios from 'axios';



const Module2 = ({ loggedIn, onLogin, user, setUser,
updatedModuleStatus, changeUpdatedModuleStatus}) => {
    
    const menu = [
    {
        title: "Welcome",
            id: "welcome",
            sectionComplete:false
    },
    {
        title: "Mindfulness",
        id:"mindfullness",
            sectionComplete:updatedModuleStatus.mindfulness2
    },
    {
        title: "Affirmations",
        id:"affirmations",
            sectionComplete:false
    },
    {
        title: "Let's Play a Game",
        id:"game",
            sectionComplete:false
    },
    {
        title: "Home Assignment",
        id:"homeassignmet2",
            sectionComplete:false
    }
    ]
    
    useEffect(() => {
        updateModuleCompletion();
        
    }, [updatedModuleStatus.module2_completed])

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
            <Introtomod2/>
            <Mindfullness
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <Affirmations />
            <Game/>
            <Homework />
        </div>
    );
}

export default Module2
