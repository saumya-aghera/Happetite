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

function MyStrength({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus

 }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  
 useEffect(() => {
   
    changeUpdate();
    
 }, [updatedModuleStatus.strength5])
  
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
    
    if (updatedModuleStatus.survey5 && updatedModuleStatus.strength5 && updatedModuleStatus.homeAssignment5) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module5_completed:true
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
        survey5,
        strength5,
        homeAssignment5,
      
      };
      
      axios.post('http://localhost:5000/module5/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    
  }


  const [strength, setstrength] = useState({
    str: '',
  });
  const createstrength = () => {
      
    if (loggedIn) {
     
   const userName = user.name
      const userId= user.email
      const post = {
        ...strength,
        userId,
        userName
        
      };
      axios.post('http://localhost:5000/strength', post);
      console.log(`Exercise submitted: `,strength,user.name,user.email);
      setstrength({
        str: '',
      });
      changeUpdatedModuleStatus(prevState => ({
      ...prevState, 
     strength5: true,
     
    }));
      
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
                    <div className='mystrength-text'>

              

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