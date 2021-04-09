import React, { useState,useEffect } from 'react'
import './Homework3.css'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';

import {useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Homework3({ loggedIn,onLogin,user,setUser,userHelp,setUserHelp }) {
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
  

  const [h3, seth3] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    date: new Date(),
  });
  const createh3 = () => {
      
    if (loggedIn) {
     
      axios.post('http://localhost:5000/h3', h3);
      console.log(`Exercise submitted: `,h3,user.name,user.email);
      seth3({
        a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    date: new Date(),
      });
      //alert(`thank you for your answers`);//very annoying
      
    } else {
      handleShow();
    }
}
    return (
        <>
            <div className="hw3-main">
            <h2>Home Assignment</h2>
            <p>Instructions: As practice, you need to dedicate 10 mins of your time daily till the next session to writing an online journal practicing positive appraisal. Journaling helps you document your thoughts and feelings. The more you practice, the more you will gain out of it. Every day, you need to write about one stressful or negative even that you encountered and try applying the ABCDE model to it. List some ways showing maybe it wasn’t as bad as it could have been.
</p>
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
          value={h3.a}
              onChange={(event) => {
                seth3({ ...h3, a: event.target.value })
              }}
        />
        <TextField
          id="outlined-full-width"
          label="Beliefs"
          style={{ width: '50%', marginRight: '10px'}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={h3.b}
              onChange={(event) => {
                seth3({ ...h3, b: event.target.value })
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
          value={h3.c}
              onChange={(event) => {
                seth3({ ...h3, c: event.target.value })
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
          value={h3.d}
              onChange={(event) => {
                seth3({ ...h3, d: event.target.value })
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
          value={h3.e}
              onChange={(event) => {
                seth3({ ...h3, e: event.target.value })
              }}
        />
        <label>Date: </label>
        {/* <DatePicker selected={h3}/> */}
        <DatePicker
            closeOnScroll={true}
            selected={h3.date}
            // onChange={date => seth3(date)}
            onChange={(date) => {
              seth3({ ...h3, date })
            }}
          />
            
             <div className="Submit-btn">
                        <button type="submit" onClick={createh3} className='primary'>
                        Submit
                        </button>
                    
                    </div>
            </div>
            
            
        </>
    )
}

export default Homework3
