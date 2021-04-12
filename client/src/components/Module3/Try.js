import React, { useState,useEffect } from 'react'
import './Try.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Try({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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


const [tryy, settryy] = useState({
  ta: '',
  tb: '',
  tc: '',
  td: '',
  te: '',
});
const createtryy = () => {
    
  if (loggedIn) {
   
    axios.post('http://localhost:5000/tryy', tryy);
    console.log(`Exercise submitted: `,tryy,user.name,user.email);
    settryy({
      ta: '',
  tb: '',
  tc: '',
  td: '',
  te: '',
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
  return (
       
    <div className="try-main" id='try'>
      <div className='try-cont'>
        <h2>Try It Yourself!</h2>
        <p>Instructions: Since we have a basic understanding of how the ABCDE model works, let’s try using it on ourselves. Think of a negative situation that has happened to you recently, and try applying positive reappraisal to it. Remember to start writing down how you felt/feel about the event without reacting straight away. The worksheet provided below gives you the space to note down the event, your thoughts, the consequences, your disputation and energization or the positive feeling after disputing your negative thought. Remember to start with small events as positive appraisal is a skill we are learning to develop.
          </p>
        <div className='try-text'>
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
            value={tryy.ta}
            onChange={(event) => {
              settryy({ ...tryy, ta: event.target.value })
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
            value={tryy.tb}
            onChange={(event) => {
              settryy({ ...tryy, tb: event.target.value })
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
            value={tryy.tc}
            onChange={(event) => {
              settryy({ ...tryy, tc: event.target.value })
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
            value={tryy.td}
            onChange={(event) => {
              settryy({ ...tryy, td: event.target.value })
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
            value={tryy.te}
            onChange={(event) => {
              settryy({ ...tryy, te: event.target.value })
            }}
          />
            
          <div className="Submit-btn">
            <button type="submit" onClick={createtryy} className='primary' style={{marginRight:'57%'}}>
              Submit
            </button>
                    
          </div>
        </div>
      </div>
    </div>
       
  );
}

export default Try
