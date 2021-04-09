import React, { useState,useEffect } from 'react'
import './Grat.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {useLocation } from 'react-router-dom';
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Grat({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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


const [thankful, setthankful] = useState({
  n1: '',
  n2: '',
  n3: '',
  n4: '',
  n5: '',
});
const createthankful = () => {
    
  if (loggedIn) {
   
    axios.post('http://localhost:5000/thankful', thankful);
    console.log(`submitted: `,thankful,user.name,user.email);
    setthankful({
      n1: '',
      n2: '',
      n3: '',
      n4: '',
      n5: '',
    });
    //alert(`thank you for your answers`);//very annoying
    
  } else {
    handleShow();
  }
}
    return (
        <>
        <div className="grat-main">
            <h2>What are you thankful for?</h2>
            <p><u>Instructions:</u> Every person feels grateful or thankful for something, whether it is small or big that does not matter. What matters is that we have aspects of our life that are of value to us and that make us feel good and positive. In this activity, you need to list in the space provided below any 5 aspects that you are grateful for, it could be a person, pet or a thing. 
</p>
<TextField
          id="standard-full-width"
          label="Number 1"
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
          value={thankful.n1}
              onChange={(event) => {
                setthankful({ ...thankful, n1: event.target.value })
              }}/>
          <TextField
          id="standard-full-width"
          label="Number 2"
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={thankful.n2}
          onChange={(event) => {
            setthankful({ ...thankful, n2: event.target.value })
          }}/>
          <TextField
          id="standard-full-width"
          label="Number 3"
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={thankful.n3}
              onChange={(event) => {
                setthankful({ ...thankful, n3: event.target.value })
              }}/>
          <TextField
          id="standard-full-width"
          label="Number 4"
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={thankful.n4}
              onChange={(event) => {
                setthankful({ ...thankful, n4: event.target.value })
              }}
          />
          <TextField
          id="standard-full-width"
          label="Number 5"
          style={{ margin: 8, width: "50%"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={thankful.n5}
              onChange={(event) => {
                setthankful({ ...thankful, n5: event.target.value })
              }}
          />
          <div className="Submit-btn">
                        <button type="submit" onClick={createthankful} className='primary'>
                        Submit
                        </button>
                    
                    </div>
        </div>
        </>
    )
}

export default Grat
