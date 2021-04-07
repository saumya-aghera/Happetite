import React, { useState,useEffect } from 'react'
import './Worksheet.css'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Worksheet({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
  
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
  

  const [worksheet, setworksheet] = useState({
    ans1: '',
    ans2: '',
    ans3: '',
    
  });
  const createworksheet = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/worksheet', worksheet);
      console.log(`Worksheet submitted: `,worksheet,user.name,user.email);
      setworksheet({
        ans1: '',
        ans2: '',
        ans3: '',
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
   
    return (
        <div id='worksheet'>
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
        <div className="worksheet-main" >
          <div className="outer-box4">
            <Typography>
                    <h2>Cultivating Hope & Possibility</h2>
                    <p>That was something new and interesting we learned, so let’s try and apply it in the worksheet given below.
                        <br />The worksheet is called The Hope Planning Worksheet (Kate Snowice, 2016).

                        <br />Instructions- Please complete the worksheet by applying what you have understood in the previous video to a problem that you may be facing in your life. Read the instructions on the worksheet very carefully and fill in the details.
                    </p>
                    
                </Typography>
                <div className="ans-main">
                    <div className="each-q">
                    <p className="que"><u>Dream:</u> What is one thing you would love for your future?</p>
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans1} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans1: event.target.value})}}
                    />
                    </div>
                    <div className="each-q">
                    <p className="que"><u>Plan & Act:</u> What are the small actions you can take at this point, that will start moving you closer towards this dream? <i>[be sure to revisit your plans relatively often]</i></p>
                    
                
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans2} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans2: event.target.value})}}
                    
                    />
                    </div>
                    <div className="each-q">
                    <p className="que"><u>Believe:</u> Jot down 3 short sentences that you can use to help remind you of your capability. Put them where you will see them frequently. <i>e.g. I am capable and resourceful</i></p>
                
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans3} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans3: event.target.value})}}

                    />
                    </div>
                    <div className="Submit-btn workbtn">
                        <button type="submit" onClick={createworksheet}>
                        Submit
                        </button>
                    
                    </div>
                </div>
                </div>
           </div> 
        </div>
    )
}

export default Worksheet
