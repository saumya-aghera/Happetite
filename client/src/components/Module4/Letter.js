import React, { useState,useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import './Letter.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Letter({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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


const [letter, setletter] = useState({
  let: '',
});
const createletter = () => {
    
  if (loggedIn) {
   
    axios.post('http://localhost:5000/letter', letter);
    console.log(`Exercise submitted: `,letter,user.name,user.email);
    setletter({
      let: '',
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}



  
  return (
     
    <div className="letter-main" id='letter'>
      <div className='letter-cont'>
        <h2>My Gratitude Letter</h2>
        <p><u>Instructions:</u> In this activity, you will write a letter in the space provided below as short or long as you want to the person who you are thankful for. It could be a friend, family member, partner, mentor, colleague or even your pet. Write about why you are thankful for them and how or in what way have they positively impacted your life.
          </p>
        <div className='letter-text'>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
              </span>
            </div>
              
            <TextareaAutosize
              autoFocus
              minRows='15'
              style={{ width: '90%' }}
              placeholder="Write your Letter here"
              id="outlined-full-width"
         
              value={letter.let}
              onChange={(event) => {
                setletter({ ...letter, let: event.target.value })
              }}
            />
          </div>
          <div className="Submit-btn">
            <button type="submit" onClick={createletter} className='primary' style={{ marginRight: '57%' }}>
              Submit
                        </button>
                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter
