import React, { useState,useEffect } from 'react'
import './Homework4.css'
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useLocation } from 'react-router-dom';


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Homework4({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus

}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  useEffect(() => {
   
    changeUpdate();
    
    }, [updatedModuleStatus.homeAssignment4])
    

    function addNewUser( newEmail,newUserStatus ){
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/users/add', newUserStatus);
      changeUpdatedModuleStatus(prevState => ({
        ...prevState,
        userId:newEmail
      }))
      console.log('posted user in back')
  };

  const updateProgress = async (newEmail) => {
  console.log('Already registered before');

  try {
    const response = await axios.get('http://localhost:5000/users/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    changeUpdatedModuleStatus(response.data)
    console.log('finalcheck',updatedModuleStatus)
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called')
    try {
        const resp = await axios.get('http://localhost:5000/users/newold', {
      params: {
        userId: newEmail
      }
    });
      console.log('resp', resp.data);
     
    //If new user then register the user in db
    if (!resp.data) {
      addNewUser(newEmail,newUserStatus)
    }
    // else bring the user till now progress from back
    else {
      updateProgress(newEmail); 
    }
    

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

 

  const onSuccess = (res) => {
    onLogin(true);


    setUser({
      email: res.profileObj.email,
      familyName: res.profileObj.familyName,
      givenName: res.profileObj.givenName,
      googleId: res.profileObj.googleId,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name
    });

    const newUserStatus = {
      userId:res.profileObj.email,
      module1_completed: false,
      module2_completed: false,
      module3_completed: false,
      module4_completed: false,
      module5_completed: false,
      module6_completed: false,
      worksheet1: false,
        hopeBox1: false,
        homeAssignment1:false,
  
      minfulness2: false,
      
      try3: false,
      homeAssignment3: false,
      
      thankful4: false,
      letter4: false,
      homeAssignment4:false,
      hw4_day1: false,
      hw4_day2: false,
      hw4_day3: false,
      hw4_day4: false,
      hw4_day5: false,
      hw4_day6: false,
      hw4_day7: false,
      
      survey5: false,
      strength5: false,
      homeAssignment5: false,
      
      activity6: false,
      feedback6:false

    }

    
    //for checking if user is new to website
    checkForNewUser(res.profileObj.email,newUserStatus)
    
      refreshTokenSetup(res);
      handleClose();
  };


    
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


  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };
  

    return (
        
      <div className="hw4-main" id='home4'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        
                    <Modal.Body>Please complete previous day Home Assignment to unlock this Assignment.</Modal.Body>
                    </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
        </Modal>
        
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
          <div className='hw4-pointer'>

            <a href="/HW4/Day1" style={{ textDecoration: 'none' }}><div className='pointer1' >DAY 1</div></a>
            
            {(updatedModuleStatus.hw4_day1) ? <a href="/HW4/Day2" style={{ textDecoration: 'none' }}><div className='pointer2' >DAY 2</div></a> :
          <div className='pointer2' onClick={handleShow} >DAY 2</div>}
            
            {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2) ? <a href="/HW4/Day3" style={{ textDecoration: 'none' }}><div className='pointer3' >DAY 3</div></a>
              :
              <div className='pointer3' onClick={handleShow}>DAY 3</div>}
            
            {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3) ?  <a href="/HW4/Day4"  style={{textDecoration:'none'}}><div className='pointer4' >DAY 4</div></a>
              :
          <div className='pointer4' onClick={handleShow} >DAY 4</div>}
            
            {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
              && updatedModuleStatus.hw4_day4
            ) ? <a href="/HW4/Day5"  style={{textDecoration:'none'}}><div className='pointer5' >DAY 5</div></a>
              :
              <div className='pointer5' onClick={handleShow} >DAY 5</div>}
            

            {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
              && updatedModuleStatus.hw4_day4 && updatedModuleStatus.hw4_day5
            ) ? <a href="/HW4/Day6"  style={{textDecoration:'none'}}><div className='pointer6' >DAY 6</div></a>
              :
              <div className='pointer6' onClick={handleShow} >DAY 6</div>}
            
            {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
              && updatedModuleStatus.hw4_day4 && updatedModuleStatus.hw4_day5
            ) ?  <a href="/HW4/Day7"  style={{textDecoration:'none'}}><div className='pointer7' >DAY 7</div></a>
              :
              <div className='pointer7' onClick={handleShow} >DAY 7</div>}
            
           

          </div>
        </div>
      </div> 
    )
            }

export default Homework4