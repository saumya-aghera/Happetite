import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import './HW_Day2.css';
import BackHeader from '../BackHeader/BackHeader';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

const HW_Day2 = ({ loggedIn, onLogin, user, setUser }) => {
  
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

  const [hw4_2, sethw4_2] = useState({
    d2_1: '',
    d2_2: '',
    d2_3: '',
  });

  const createhw4_2 = () => {
      
  if (loggedIn) {
   
    axios.post('http://localhost:5000/hw4_2', hw4_2);
    console.log(`Exercise submitted: `,hw4_2,user.name,user.email);
    sethw4_2({
      d2_1: '',
      d2_2: '',
      d2_3: ''
    });
    //alert(`thank you for your answers`);//very annoying
    
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
        <BackHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
             
        />
        <div className='day2-main'>
        <div className='day2-cont'>
        <h2>Day 2</h2>
            <div className='day2-text'>
            
<div style={{fontSize:'medium', fontWeight:'700'}}>Something I accomplished today...  </div>
<TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_2.d2_1}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_1: event.target.value })
              }}
        />
<div style={{fontSize:'medium', fontWeight:'700'}}>Something funny that happened today...
</div>
          <TextField
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_2.d2_2}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_2: event.target.value })
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
          value={hw4_2.d2_3}
              onChange={(event) => {
                sethw4_2({ ...hw4_2, d2_3: event.target.value })
              }}
        />
        <div className="Submit-btn">
                        <button type="submit" onClick={createhw4_2} className='primary' style={{ marginRight: '57%' }}>
                        Submit
                        </button>
                    
            </div>
          </div>
          </div>
          </div>
        </div>
    )
}

export default HW_Day2
