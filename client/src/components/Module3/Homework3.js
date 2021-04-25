import React, { useState,useEffect } from 'react'
import './Homework3.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Homework3({ loggedIn,onLogin,user,setUser,
      updatedModuleStatus, changeUpdatedModuleStatus }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

    useEffect(() => {
   
    changeUpdate();
    
    }, [updatedModuleStatus.homeAssignment3])
    

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

    

    
    const changeUpdate = () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.try3 && updatedModuleStatus.homeAssignment3) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module3_completed:true
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
      try3,
      homeAssignment3,
      }
      
      axios.post('http://localhost:5000/module3/update', updatedStatus);
      console.log('what updated in back', updatedStatus)
        
    
  }

  

  const [h3, seth3] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    date: new Date(),
  });
  const createh3 = () => {
      
    if (loggedIn) {
     const userName = user.name
      const userId= user.email
      const post = {
        ...h3,
        userId,
        userName
        
      };
      axios.post('http://localhost:5000/h3', post);
      console.log(`Exercise submitted: `,h3,user.name,user.email);
      seth3({
        a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    date: new Date(),
      });

      changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
     homeAssignment3: true,
     
    }));
      
    } else {
      handleShow();
    }
}
  return (
       
    <div className="hw3-main" id="home3">
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
      <div className='hw3-cont'>
        <h2>Home Assignment</h2>
        <div style={{
          textAlign: 'center', fontSize: 'medium', fontWeight: '500',
          paddingLeft: '60px', paddingRight: '60px', paddingBottom: '20px'
        }}>Instructions: As practice, you need to dedicate 10 mins of your time daily till the next session to writing an online journal practicing positive appraisal. Journaling helps you document your thoughts and feelings. The more you practice, the more you will gain out of it. Every day, you need to write about one stressful or negative even that you encountered and try applying the ABCDE model to it. List some ways showing maybe it wasn’t as bad as it could have been.
          </div>
        <div className='hw3-text'>
          <TextField
            id="outlined-full-width"
            label="Adversity"
            style={{ width: '50%', marginRight: '10px' }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={h3.a}
            onChange={(event) => {
              seth3({ ...h3, a: event.target.value })
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Beliefs"
            style={{ width: '50%', marginRight: '10px' }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={h3.b}
            onChange={(event) => {
              seth3({ ...h3, b: event.target.value })
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Consequences"
            style={{ width: '50%', marginRight: '10px' }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={h3.c}
            onChange={(event) => {
              seth3({ ...h3, c: event.target.value })
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Disputation"
            style={{ width: '50%', marginRight: '10px' }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={h3.d}
            onChange={(event) => {
              seth3({ ...h3, d: event.target.value })
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Energization"
            style={{ width: '50%', marginRight: '10px' }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={h3.e}
            onChange={(event) => {
              seth3({ ...h3, e: event.target.value })
            }}
          />
          <div style={{marginTop: '10px', marginLeft:'15%'}}>
          <label style={{marginRight: '10px'}}>Date: </label>
          {/* <DatePicker selected={h3}/> */}
            <DatePicker
            
            closeOnScroll={true}
            selected={h3.date}
            // onChange={date => seth3(date)}
            onChange={(date) => {
              seth3({ ...h3, date })
              }}
              
          />
          </div>  
          <div className="Submit-btn">
            <button type="submit" onClick={createh3} className='primary' style={{marginRight:'57%'}}>
              Submit
                        </button>
                    
            </div>
            
        </div>
            
      </div>
    </div>
       
  );
}

export default Homework3