import React,{useEffect, useState} from 'react'
import Introtomod2 from './Introtomod2';
import Mindfullness from './Mindfullness';
import Affirmations from './Affirmations';
import Game from './Game';
import Form2 from './Form2'
import Homework from './Homework';
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import axios from 'axios';

import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';

const Module2 = ({ loggedIn, onLogin, user, setUser,
updatedModuleStatus, changeUpdatedModuleStatus}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const menu = [
    {
        title: "Welcome",
            id: "welcome",
            sectionComplete:false
    },
    {
        title: "Mindfulness",
        id:"mindfullness",
            sectionComplete:updatedModuleStatus.mindfulness2
    },
    {
        title: "Affirmations",
        id:"affirmations",
            sectionComplete:false
    },
    {
        title: "Let's Play a Game",
        id:"game",
            sectionComplete:false
    },
    {
        title: "Home Assignment",
        id:"homeassignmet2",
            sectionComplete:false
    },{
        title:"It's Review Time",
        id: "r2",
        sectionComplete:false
    }
  ]
  

  useEffect(() => {

    
    const newUserModule2 = {
      userId:updatedModuleStatus.userId,
      mindfulness2:false 
    }

    console.log("useeffect of hope",updatedModuleStatus.userId,newUserModule2)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId,newUserModule2)
  }, [updatedModuleStatus.userId])
    
    useEffect(() => {
      updateModule2Completion();
      console.log('poppre',updatedModuleStatus.mindfulness2)
      if (updatedModuleStatus.mindfulness2) {
        console.log('pop', updatedModuleStatus.mindfulness2)
        handleShow()
      }
    }, [updatedModuleStatus.module2_completed])

  const updateModule2Completion = () => {
    const { userId,
      module1_completed,
      module2_completed,
      module3_completed,
      module4_completed,
      module5_completed,
      module6_completed,
      worksheet2,
      hopeBox2,
      homeAssignment2,
      
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
      module1_completed,
      module2_completed,
      module3_completed,
      module4_completed,
      module5_completed,
      module6_completed,
    };
      
    axios.post('http://localhost:5000/users/update', updatedStatus);
    console.log('what updated in back', updatedStatus)
  };

  const addNewUser=( newEmail,newUserStatus )=>{
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/module2/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module2/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      mindfulness2: response.data.mindfulness2,
     
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module2/newold', {
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

    return (
      <div>
        <Modal show={show} onHide={handleClose} style={{backgroungColor:'yellow'}}>
        <Modal.Header closeButton>
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fas fa-award" size="5x" style={{color:'#228B22'}}/></Modal.Title>
          </Modal.Header>
       
        <Modal.Body style={{fontFamily:'cursive', fontSize:'20px' , paddingLeft:'22%'}}>You are doing good! Keep it up.</Modal.Body>
        
            </Modal>
            <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <Introtomod2/>
            <Mindfullness
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <Affirmations />
            <Game/>
            <Homework />
            <Form2 />
        </div>
    );
}

export default Module2