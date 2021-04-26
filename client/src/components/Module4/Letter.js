import React, { useState,useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import './Letter.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Letter({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


 useEffect(() => {
   
    changeUpdate();
    
    }, [updatedModuleStatus.letter4])
    

 const addNewUser=( newEmail,newUserStatus )=>{
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
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,
      userId: newEmail,
      module1_completed: response.data.module1_completed,
      module2_completed: response.data.module2_completed,
      module3_completed: response.data.module3_completed,
      module4_completed: response.data.module4_completed,
      module5_completed: response.data.module5_completed,
      module6_completed: response.data.module6_completed,
      })))
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
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
    }

    
    //for checking if user is new to website
    checkForNewUser(res.profileObj.email,newUserStatus)
    
    refreshTokenSetup(res);
    handleClose();
  };

  

  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };


    
  const changeUpdate = async () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.thankful4 && updatedModuleStatus.letter4 && updatedModuleStatus.homeAssignment4) {
      changeUpdatedModuleStatus(prevState => ({
        ...prevState,
        module4_completed: true
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

      
    const updatedStatus = {
      userId,
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
      
    }
      
    await axios.post('http://localhost:5000/module4/update', updatedStatus);
    console.log('what updated in back', updatedStatus)
    
  };


const [letter, setletter] = useState({
  let: '',
});
const createletter = () => {
    
  if (loggedIn) {
    const userName = user.name
      const userId= user.email
      const post = {
        ...letter,
        userId,
        userName
        
      };
    axios.post('http://localhost:5000/letter',post);
    console.log(`Exercise submitted: `,letter,user.name,user.email);
    setletter({
      let: '',
    });
    changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
     letter4: true,
     
    }));
    
  } else {
    handleShow();
  }
}



  
  return (
     
    <div className="letter-main" id='letter'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Sign in before submitting</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={renderProps => (
              <Button variant="contained" color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Sign In
              </Button>)}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />
        </Modal.Footer>
      </Modal>
      <div className='letter-cont'>
        <h2>My Gratitude Letter</h2>
        <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}><u>Instructions:</u> In this activity, you will write a letter in the space provided below as short or long as you want to the person who you are thankful for. It could be a friend, family member, partner, mentor, colleague or even your pet. Write about why you are thankful for them and how or in what way have they positively impacted your life.
          </div>
        <div className='letter-text'>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
              </span>
            </div>
              
            <TextareaAutosize
              autoFocus
              minRows='15'
              style={{ width: '90%' }}
              placeholder="Write your Letter here"
              id="outlined-full-width"
         
              value={letter.let}
              onChange={(event) => {
                setletter({ ...letter, let: event.target.value })
              }}
            />
          </div>
          <div className="Submit-btn">
            <button type="submit" onClick={createletter} className='primary' style={{ marginRight: '57%' }}>
              Submit
                        </button>
                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter