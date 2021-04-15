import React, { useState,useEffect } from 'react'
import './Homework5.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Homework5({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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
  

  const [hw5, sethw5] = useState({
    str: '',
  });
  const createhw5 = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/hw5', hw5);
      console.log(`Exercise submitted: `,hw5,user.name,user.email);
      sethw5({
        str: '',
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
    return (
        <>
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
            <div className="hw5-main">
                <h2>Home Assignment</h2>
                <p><u>Creating Habits</u> -Practice using your strengths. Make your strengths a routine, simply part of your daily existence. Once they become habit, it will feel more like the real you. Write about how you utilised your strengths throughout the week in the space provided below.
</p>
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
              value={hw5.str}
              onChange={(event) => {
                sethw5({ ...hw5, str: event.target.value })
              }}
            />
            <div className="Submit-btn workbtn">
            <button type="submit" onClick={createhw5} style={{ margin:'10px' }}>
                Submit
                        </button>
                    
            </div>
            </div>
            
        </>
    )
}

export default Homework5
