import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import './HW_Day1.css'


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';


const menu=[{
        title: "What are you Thankful for?",
        id:"thankful"
    }]

const HW_Day1 = ({ loggedIn,onLogin,user,setUser}) => {

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



  const [hw4_1, sethw4_1] = useState({
    d1_1: '',
    d1_2: '',
    d1_3: '',
  });

  const createhw4_1 = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/hw4_1', hw4_1);
      console.log(`Exercise submitted: `,hw4_1,user.name,user.email);
      sethw4_1({
        d1_1: '',
        d1_2: '',
        d1_3: ''
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
     
        <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
        />
      <div className='day1-main'>
        <div className='day1-cont'>
        <h2>Day 1</h2>
            <div className='day1-text'>
        <div style={{fontSize:'medium', fontWeight:'700'}}>One good thing that happened to me today... </div>
            <TextField
              
              
              label=""
           
              placeholder=""
              helperText=""
              fullWidth
        

          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%" }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_1}
          onChange={(event) => {
            sethw4_1({ ...hw4_1, d1_1: event.target.value })
          }}
        />
        <div style={{fontSize:'medium', fontWeight:'700'}}>Something good that I saw someone do...
</div>
            <TextField
              label=""
            
              placeholder=""
              helperText=""
              fullWidth
        
          id="outlined-full-width"
          
          style={{ margin: 8, width: "60%" }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_2}
          onChange={(event) => {
            sethw4_1({ ...hw4_1, d1_2: event.target.value })
          }}
        />
        <div style={{fontSize:'medium', fontWeight:'700'}}>Today I had fun when...
</div>
            <TextField
              label=""
           
              placeholder=""
              helperText=""
              fullWidth
        
          id="outlined-full-width"
          style={{ margin: 8, width: "60%" }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={hw4_1.d1_3}
          onChange={(event) => {
            sethw4_1({ ...hw4_1, d1_3: event.target.value })
          }}
        />
        <div className="Submit-btn">
          <button type="submit" onClick={createhw4_1} className='primary' style={{ marginRight: '57%' }}>
            Submit
                        </button>
            </div>
            </div>
        </div>
      </div>
      </div>
      
  );
}

export default HW_Day1



                    
                    
                    
                   
       
                    
                    
                    