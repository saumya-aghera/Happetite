import React, { useState,useEffect } from 'react'
import './MyStrength.css'
import ReactPlayer from "react-player";
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function MyStrength({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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
  

  const [strength, setstrength] = useState({
    str: '',
  });
  const createstrength = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/strength', strength);
      console.log(`Exercise submitted: `,strength,user.name,user.email);
      setstrength({
        str: '',
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
    return (
     
        <div className="mystrength-main" id='strength'>
            <div className="mystrength-cont">
            <h2>My Strengths</h2>
                <div
                    style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'10px'
                    
                    }}
                ><u>Instructions:</u> Make a list of your strengths, talents, skills that you resonate with. Write about how these qualities have helped you get through tough times in the past.
</div>
<div style={{
                        fontSize: 'medium',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom:'10px'
                    
                    }}>Quick Tip:</div>
<div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=yQMJg_9ouVQ"
                    
                    />
                    </div>
                    <div className='hw5-text'>

              

<div className="input-group">
<div className="input-group-prepend">
<span className="input-group-text" id="basic-addon">
  <i className="fas fa-pencil-alt prefix"></i>
</span>
</div>

  <TextareaAutosize
     autoFocus
minRows='10'
    id="outlined-full-width"
label=""
 style={{ width: '90%' }}
placeholder=""
helperText=""
fullWidth
margin="normal"
InputLabelProps={{
  shrink: true,
}}
variant="outlined"
value={strength.str}
onChange={(event) => {
  setstrength({ ...strength, str: event.target.value })
    }}
  
/>
</div>
<div className="Submit-btn workbtn">
<button type="submit" onClick={createstrength} style={{ margin:'10px' }}>
  Submit
          </button>
  </div>    
</div>
</div>
        </div>
        
    
    )
}

export default MyStrength