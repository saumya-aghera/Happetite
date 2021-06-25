import React,{useEffect} from 'react'
import './Survey.css'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Survey({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus }) {
    

 useEffect(() => {
   
    changeUpdate();
    
    }, [updatedModuleStatus.survey5])
  

    
    const changeUpdate = () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.survey5 && updatedModuleStatus.strength5 && updatedModuleStatus.homeAssignment5) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module5_completed:true
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
      survey5,
      strength5,
      homeAssignment5,
      
      }
      
      axios.post('http://localhost:5000/module5/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    
  }

  const surveyComplete = () => {
    console.log("button clicked")
    changeUpdatedModuleStatus(prevState => ({
                  ...prevState,
                  survey5:true
      }))
  }



    
    
    return (
        <>
        
        
            <div className="surv-main" id='survey'>
              <div className="surv-cont" >
                <h2>VIA Survey</h2>

            <div className="surv-text">
              <div  onClick={surveyComplete} >
                    <AwesomeButton  type="primary" className="surv-btn"
      href="https://www.viacharacter.org/survey/account/register"
                target="_blank" style={{width:"25%", borderRadius:'2%', textDecoration:'none'}} >Take This Survey</AwesomeButton>
              </div>
              </div>


                    </div>  
        </div>
        
    </>
    )
}

export default Survey