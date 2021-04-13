import React, { useState,useEffect } from 'react'
import './Mindfullness.css'
import ReactPlayer from "react-player";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Mindfullness({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
  
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
  

  const [mindfull, setmindfull] = useState({
    feelings: '',
  });
  const createmindfull = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/mindfull', mindfull);
      console.log(`Exercise submitted: `,mindfull,user.name,user.email);
      setmindfull({
        feelings: '',
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
  return (
    <div id='mindfullness'>
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
            
    <div className="mind-main" >
      <div className="mind-cont">
        <div className="video-box">
        <h2>Mindfullness</h2>
        <h4 className="mind-h4">What is Mindfulness?</h4>
        <div className="video">
          <ReactPlayer
            className="vid-container"
            url="https://www.youtube.com/watch?v=7-1Y6IbAxdM"
                    
            />
          </div>
          </div>
          <div className="para1" style={{ fontSize: 'medium',padding:'50px', fontWeight:'500' }}>Now that we have a basic understanding of mindfulness, let’s try and use a method of it on ourselves
          <br />This week we will learn and practice mindfulness. As we have understood, mindfulness is way of being conscious, paying attention to the here and now: on purpose, having a non-judgemental and embracing attitude. It helps increase positive emotions which help reduce the effect of bad situations and bad feelings associated with it. It also helps us notice smaller things and helps us deal with situations instead of worrying about them constantly. Mindfulness has also shown results in helping and improving our emotional regulation (Huang, 2019).
          </div>
          <div className="act-mind">
            <div className="para2" style={{ fontSize: 'medium',padding:'30px', fontWeight:'750' }}><u>Instruction: </u>Let’s try practicing it by dedicating 10 mins of our time. The video below is a mindfulness meditation.</div>
            <ReactPlayer
              className="vid-container"
              url="https://www.youtube.com/watch?v=ZToicYcHIOU"
                    
            />
            <div style={{ fontSize: 'medium',paddingTop:'30px', fontWeight:'500' }}>After completing the exercise, in the space provided below, write some words which describe how you are feeling.
</div>
            <TextField
              id="outlined-full-width"
              label=""
              style={{ width:'700px'}}
              placeholder=""
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={mindfull.feelings}
              onChange={(event) => {
                setmindfull({ ...mindfull, feelings: event.target.value })
              }}
            />
            <div className="Submit-btn workbtn">
            <button type="submit" onClick={createmindfull} style={{ margin:'10px' }}>
                Submit
                        </button>
                    
            </div>
          </div>
        </div>
      
    </div>
            
      </div>  
  );
}

export default Mindfullness
