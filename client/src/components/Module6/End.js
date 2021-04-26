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
function End({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus

 }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 useEffect(() => {
   
    changeUpdate();
    
 }, [updatedModuleStatus.feedback6])
    
const addNewUser=( newEmail,newUserStatus )=>{
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/users/add', newUserStatus);
      changeUpdatedModuleStatus(prevState => ({
        ...prevState,
        userId:newEmail
      }))
      console.log('posted user in back')
  };

  const updateProgress = async (newEmail) => {
  console.log('Already registered before');

  try {
    const response = await axios.get('http://localhost:5000/users/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,
      userId: newEmail,
      module1_completed: response.data.module1_completed,
      module2_completed: response.data.module2_completed,
      module3_completed: response.data.module3_completed,
      module4_completed: response.data.module4_completed,
      module5_completed: response.data.module5_completed,
      module6_completed: response.data.module6_completed,
      })))
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/users/newold', {
      params: {
        userId: newEmail
      }
    });
      console.log('resp', resp.data);
     
    //If new user then register the user in db
    if (!resp.data) {
      addNewUser(newEmail,newUserStatus)
    }
    // else bring the user till now progress from back
    else {
      updateProgress(newEmail); 
    }
    

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

 

  const onSuccess = (res) => {
    onLogin(true);


    setUser({
      email: res.profileObj.email,
      familyName: res.profileObj.familyName,
      givenName: res.profileObj.givenName,
      googleId: res.profileObj.googleId,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name
    });

    const newUserStatus = {
      userId:res.profileObj.email,
      module1_completed: false,
      module2_completed: false,
      module3_completed: false,
      module4_completed: false,
      module5_completed: false,
      module6_completed: false,
    }

    
    //for checking if user is new to website
    checkForNewUser(res.profileObj.email,newUserStatus)
    
    refreshTokenSetup(res);
    handleClose();
  };

  

  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };



    
    const changeUpdate = () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
     if (updatedModuleStatus.activity6 && updatedModuleStatus.feedback6) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module6_completed:true
    }));
    }
    const { userId,
        module1_completed,
        module2_completed,
        module3_completed,
        module4_completed,
        module5_completed,
        module6_completed,
        worksheet1,    
        hopeBox1,
          homeAssignment1,
        
      mindfulness2,
      
      try3,
      homeAssignment3,
      
      thankful4,
      letter4,
      homeAssignment4,
      hw4_day1,
      hw4_day2,
      hw4_day3,
      hw4_day4,
      hw4_day5,
      hw4_day6,
      hw4_day7,
      
      survey5,
      strength5,
      homeAssignment5,
      
      activity6,
      feedback6
      } = updatedModuleStatus

      
      const updatedStatus={ userId,
      activity6,
      feedback6
      }
      
      axios.post('http://localhost:5000/module6/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    
  }

  

  const [end, setend] = useState({
    fb: '',
  });
  const createend = () => {
      
    if (loggedIn) {
     const userName = user.name
      const userId= user.email
      const post = {
        ...end,
        userId,
        userName
        
      };
      axios.post('http://localhost:5000/end', post);
      console.log(`Exercise submitted: `,end,user.name,user.email);
      setend({
        fb: '',
      });
      changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
    feedback6: true,
     
    }));
      
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
                <div className="Submit-btn">
            <button type="submit" onClick={createend} className='primary' style={{ marginRight: '57%' }}>
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
