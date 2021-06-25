import React, { useState,useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import './HW_Day5.css';
import BackHeader from '../BackHeader/BackHeader';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

const HW_Day5 = ({ loggedIn, onLogin, user, setUser,updatedModuleStatus, changeUpdatedModuleStatus
, setDay5
 }) => {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
    console.log('useeffect of hw4_day5',updatedModuleStatus)
    changeUpdate();
    
    }, [updatedModuleStatus.hw4_day5])
    

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
  


  const changeUpdate =  async() => {
    

    if (updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
      && updatedModuleStatus.hw4_day4 && updatedModuleStatus.hw4_day5 && updatedModuleStatus.hw4_day6 && updatedModuleStatus.hw4_day7) {
      changeUpdatedModuleStatus(prevState => ({
        ...prevState,
         // copy all the fields of the object
        homeAssignment4:true
      
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
      hw4_day1,
      hw4_day2,
      hw4_day3,
      hw4_day4,
      hw4_day5,
      hw4_day6,
      hw4_day7,
      thankful4,
      letter4,
      homeAssignment4,
      }
      
      await axios.post('http://localhost:5000/module4/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
 
    
  }
  

  const [hw4_5, sethw4_5] = useState({
    d5_1: '',
    d5_2: '',
    d5_3: '',
  });

  const createhw4_5 = () => {
      
  if (loggedIn) {
   const userName = user.name
      const userId= user.email
    const post = {
      ...hw4_5,
      userId,
      userName
    }
    axios.post('http://localhost:5000/hw4_5', post);
    console.log(`Exercise submitted: `,hw4_5,user.name,user.email);
    sethw4_5({
      d5_1: '',
      d5_2: '',
      d5_3: ''
    });
     
   changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
     hw4_day5: true,
     
    }));
    
  } else {
    handleShow();
  }
}
    return (
        <div>
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
        
                 
        <div className='day5-cont'>
          <h2>Day 5</h2>
          <div className='day5-text'>
<div style={{fontSize:'medium', fontWeight:'700'}}>Something interesting that happened today... 
  </div>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_1}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_1: event.target.value })
              }}
        />
<div style={{fontSize:'medium', fontWeight:'700'}}>Someone I was thankful for today... 
</div>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_2}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_2: event.target.value })
              }}
        />
<div style={{fontSize:'medium', fontWeight:'700'}}>Today I had fun when...
</div>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_5.d5_3}
              onChange={(event) => {
                sethw4_5({ ...hw4_5, d5_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_5} className='primary' style={{ marginRight: '57%' }}>
                        Submit
                        </button>
                    
              </div>
              </div>
              </div>
              </div>
      
    )
}

export default HW_Day5