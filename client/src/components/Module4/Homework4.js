import React, { useState,useEffect } from 'react'
import './Homework4.css'

import axios from 'axios';

import HWModule4 from './HWModule4';


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Homework4({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus

}) {
  
  
  
  useEffect(() => {
   
    changeUpdate();
    }, [updatedModuleStatus.homeAssignment4])
    
   
    
    const changeUpdate = () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.thankful4 && updatedModuleStatus.letter4 && updatedModuleStatus.homeAssignment4) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module4_completed:true
    }));
    }
    
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
    
      }
      
      axios.post('http://localhost:5000/module4/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    
  }

  
    return (
        
      <div className="hw4-main" id='home4'>
        
        
        <div className='hw4-cont'>
            <h2>Home Assignment</h2>
            <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}><u>Instructions:</u> Your home activity for this week is maintaining an online gratitude journal. As your day ends, fill in the aspects of the journal required for that day. Each day you will have three good things visible to you to write about or fill in by completing the sentences. Make sure that you practise gratitude daily by filling the journal. Remember practise strengthens habits.
          </div>
          
                <HWModule4 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus} />


         
        </div>
      </div> 
    )
            }

export default Homework4
