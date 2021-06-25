import React, { useState,useEffect } from 'react'
import './Worksheet.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Worksheet({ loggedIn, onLogin, user, setUser, userHelp, setUserHelp,
      updatedModuleStatus, changeUpdatedModuleStatus
      }) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [worksheet, setworksheet] = useState({
    ans1: '',
    ans2: '',
    ans3: ''
  });

  useEffect(() => {
    
   console.log('useeffect of worksheet')
    changeUpdate();
    
  }, [updatedModuleStatus.worksheet1])

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
    

    //console.log('change hua ki nahi', updatedModuleStatus)
    
    if (updatedModuleStatus.worksheet1 && updatedModuleStatus.hopeBox1 && updatedModuleStatus.homeAssignment1) {
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You have completed module 1!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
      changeUpdatedModuleStatus(prevState => ({
        ...prevState,
        module1_completed: true
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

      
    const updatedStatus = {
      userId,
      worksheet1,
      hopeBox1,
      homeAssignment1    
    }
      
    axios.post('http://localhost:5000/module1/update', updatedStatus);
    //console.log('what updated in back',updatedStatus)  
  };


  const createworksheet = () => {
      
    if (loggedIn) {
     
      const userName = user.name
      const userId= user.email
      const post = {
        ...worksheet,
        userId,
        userName
        
      };

      axios.post('http://localhost:5000/worksheet', post);
      console.log(`Worksheet submitted: `, post, user.name, user.email);
      setworksheet({
      
        ans1: '',
        ans2: '',
        ans3: '',
    });
      
      if (!updatedModuleStatus.worksheet1) {
        console.log('woksheet false')
      changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
      worksheet1: true,
      
    }));
    }
      
      

      
    } else {
      handleShow();
    }
}
   
    return (
        <div id='worksheet'>
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
        <div className="worksheet-main" >
          <div className="outer-box4">
         
                    <h2>Cultivating Hope & Possibility</h2>
                    <div style={{
                        fontSize: 'medium',
                        fontWeight:'500',
                        paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'
                    }}>That was something new and interesting we learned, so let’s try and apply it in the worksheet given below.
                       The worksheet is called The Hope Planning Worksheet (Kate Snowice, 2016).

                        <br /><span style={{textDecoration: 'underline'}}>Instructions-</span> Please complete the worksheet by applying what you have understood in the previous video to a problem that you may be facing in your life. Read the instructions on the worksheet very carefully and fill in the details.
                    </div>
                    
               
                <div className="ans-main">
                    <div className="each-q">
                    <p className="que"><u>Dream:</u> What is one thing you would love for your future?</p>
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans1} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans1: event.target.value})}}
                    />
                    </div>
                    <div className="each-q">
                    <p className="que"><u>Plan & Act:</u> What are the small actions you can take at this point, that will start moving you closer towards this dream? <i>[be sure to revisit your plans relatively often]</i></p>
                    
                
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans2} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans2: event.target.value})}}
                    
                    />
                    </div>
                    <div className="each-q">
                    <p className="que"><u>Believe:</u> Jot down 3 short sentences that you can use to help remind you of your capability. Put them where you will see them frequently. <i>e.g. I am capable and resourceful</i></p>
                
                <TextField
                    id="outlined-full-width"
                    label=""
                    style={{ width: 700 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={worksheet.ans3} 
                    onChange={(event)=>{
                        setworksheet({ ...worksheet, ans3: event.target.value})}}

                    />
                    </div>
                    <div className="Submit-btn workbtn">
                        <button type="submit" onClick={createworksheet}>
                        Submit
                        </button>
                    
                    </div>
                </div>
                </div>
           </div> 
        </div>
    )
}

export default Worksheet