import React,{useEffect,useState} from 'react'
import './Activity6.css'
import axios from 'axios'
import { refreshTokenSetup } from '../../utils/refreshToken';
import ReactPlayer from "react-player";
import TextareaAutosize from 'react-textarea-autosize';
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';
function Activity6({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus }) {


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
 useEffect(() => {
   console.log("usefeccet of activity 6",updatedModuleStatus)
    changeUpdate();
    
 }, [updatedModuleStatus.activity6])
    
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

  const [wu, setwu] = useState({
    writeup: '',
  });
  const createwu = () => {
      
    if (loggedIn) {
     const userName = user.name
      const userId= user.email
      const post = {
        ...wu,
        userId,
        userName
        
      };
      axios.post('http://localhost:5000/writeup', post);
      console.log(`Exercise submitted: `,wu,user.name,user.email);
      setwu({
        writeup: '',
      });
      changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
    activity6: true,
     
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
         <div className="a6-main" id='activity'>
          <div className='a6-cont'>
            <h2>What is well-being?</h2>
            <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'20px'
                    
                    }}>Well-being is the state where we feel happy, healthy and comfortable. Let’s watch the video below to get a basic idea of it.
</div>
<div className="video">
                    <ReactPlayer
                        className="vid-container"
                        url="https://www.youtube.com/watch?v=mxz8KyV3Ydc"
                    
                    />
              </div>
              <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'20px'
                    
                    }}>Since well-being is a subjective concept and is different for each person. Tell us below what is your meaning of well-being in a few sentences.
</div>
<div className='a6-text'>
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
value={wu.writeup}
onChange={(event) => {
  setwu({ ...wu, writeup: event.target.value })
    }}
  
                />
                </div>
                <div className="Submit-btn">
            <button type="submit" onClick={createwu} className='primary' style={{ marginRight: '57%' }}>
              Submit
                        </button>
                    
          </div>
  </div>
        </div>
            </div>
        </>
    )
}

export default Activity6