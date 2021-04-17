import React, { useState,useEffect } from 'react'
import './End.css'
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function End({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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
  

  const [end, setend] = useState({
    fb: '',
  });
  const createend = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/end', end);
      console.log(`Exercise submitted: `,end,user.name,user.email);
      setend({
        fb: '',
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
    return (
        <>
        <div className="end-main" id='feedback'>
          <div className='end-cont'>
          <h2>Feedback</h2>
            <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'20px'
                    
                    }}>Thank you for being a part of this program and actively participating in it. We hope that you have benefited from the program and that it has helped you to some extent. We would definitely like to know your takeaway thoughts after completing this program. Please give us your feedback in the space provided below with regards to which activities did you like, enjoy, which helped you and have benefited from.
            </div>
            <div className='end-text'>
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
value={end.fb}
onChange={(event) => {
  setend({ ...end, fb: event.target.value })
    }}
  
                />
                </div>
<div className="Submit-btn workbtn">
<button type="submit" onClick={createend} style={{ margin:'10px' }}>
  Submit
          </button>
  </div>  
        </div>
          </div>
          </div>
        </>
        
    )
}

export default End
