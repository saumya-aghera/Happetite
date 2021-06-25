import React, { useState,useEffect } from 'react'
import './HomeAssign.css'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function HomeAssign({ loggedIn, onLogin, user, setUser,
  updatedModuleStatus, changeUpdatedModuleStatus }) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [homeassign, sethomeassign] = useState({
    goal1: '',
    goal2: '',
    goal3: '',
    obs: ''
  });

  useEffect(() => {
   console.log('useeffect of homeassignment')
    changeUpdate();
    
  }, [updatedModuleStatus.homeAssignment1])

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
  

  

  


  const changeUpdate =  () => {
    

    //console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.worksheet1 && updatedModuleStatus.hopeBox1 && updatedModuleStatus.homeAssignment1) {
      // console.log("Yayy")
  //     <Popup trigger={<button> Trigger</button>} position="right center">
  //   <div>Popup content here !!</div>
  // </Popup>
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Congratulations!</Modal.Title>
  </Modal.Header>
  <Modal.Body>You have completed module 1!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
      changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module1_completed:true
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
      worksheet1,
      hopeBox1,
      homeAssignment1    
    }
      
    axios.post('http://localhost:5000/module1/update', updatedStatus);
      //console.log('what updated in back',updatedStatus)
    
  }

  const createhomeassign =  () => {
      
    if (loggedIn) {
     const userName = user.name
      const userId= user.email
      const post = {
        ...homeassign,
        userId,
        userName
        
      };
      axios.post('http://localhost:5000/assign', post);
      console.log(`Form submitted: `,homeassign,user.name,user.email);
      sethomeassign({
        goal1: '',
        goal2: '',
        goal3: '',
        obs: ''
      });
      //alert(`thank you for your answers`);//very annoying
      if (!updatedModuleStatus.homeAssignment1) {
        changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
      homeAssignment1: true,
      
    }));

      }
       
      
      
    } else {
      handleShow();
    }
      
    
      
        
  };
  //   axios
  //     .post('http://localhost:5000/assign', data)
  //     .then(res => {
  //       this.setState({
  //           goal1: '',
  //           goal2:'',
  //           goal3:'',
  //           obs:''
  //       })
  //       this.props.history.push('/');
  //     })
  //     .catch(err => {
  //       console.log("Error in submission");
  //     })
  // };
   
  return (
    <div id='homeAssignment'>
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
            
        
      <div className="hw-main">
        <div className="outer-box">
       
          <h2>Home Assignment</h2>
          <div style={{
                        fontSize: 'medium',
                        fontWeight:'500',
                        paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'
                    }}>Since you have a basic understanding of hope let’s try and use it. You need to set three  realistic goals for yourself or that you have made and write it down in the section provided to you. Applying the hope theory you saw, note your potential barriers/obstacles and what are the realistic alternatives you have thought of to reach your goal by overcoming those barriers/obstacles.
</div>
        
        <div className="box">

          <div className="row">
            <div className="column">
              <div className="list">
                <h5 className="assign-h5">Set Realistic Goals</h5>
                <TextField id="standard-secondary" label="Goal 1" autocomplete="off" value={homeassign.goal1} onChange={(event) => {
                  sethomeassign({ ...homeassign, goal1: event.target.value })
                }} />
                <TextField id="standard-secondary" label="Goal 2" autocomplete="off" value={homeassign.goal2} onChange={(event) => {
                  sethomeassign({ ...homeassign, goal2: event.target.value })
                }} />
                <TextField id="standard-secondary" label="Goal 3" autocomplete="off" value={homeassign.goal3} onChange={(event) => {
                  sethomeassign({ ...homeassign, goal3: event.target.value })
                }} />
              </div>
            </div>
            <div className="column">
              <h5 className="assign-h5">Overcoming Obstacles</h5>
              <TextField id="outlined-basic" label="" variant="outlined" value={homeassign.obs} onChange={(event) => {
                sethomeassign({ ...homeassign, obs: event.target.value })
              }} />

            </div>
            <div className="Submit-btn">
              <button type="submit" onClick={createhomeassign}>
                Submit
        </button>
    
            </div>


          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default HomeAssign
