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

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function HomeAssign({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
  
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

   const onSuccess = async (res) => {
        onLogin(true);
        setUser({
            email: res.profileObj.email,
            familyName: res.profileObj.familyName,
            givenName: res.profileObj.givenName,
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            name: res.profileObj.name
        });
        console.log('login', user, res)
     refreshTokenSetup(res);
     handleClose();
    };

  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };
  

  const [homeassign, sethomeassign] = useState({
    goal1: '',
    goal2: '',
    goal3: '',
    obs: ''
  });
   
  const createhomeassign = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/assign', homeassign);
      console.log(`Form submitted: `,homeassign,user.name,user.email);
      sethomeassign({
        goal1: '',
        goal2: '',
        goal3: '',
        obs: ''
      });
      //alert(`thank you for your answers`);//very annoying
      
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
        <Typography>
          <h2>Home Assignment</h2>
          <p>Since you have a basic understanding of hope let’s try and use it. You need to set three  realistic goals for yourself or that you have made and write it down in the section provided to you. Applying the hope theory you saw, note your potential barriers/obstacles and what are the realistic alternatives you have thought of to reach your goal by overcoming those barriers/obstacles.
</p>
        </Typography>
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
  );
}

export default HomeAssign