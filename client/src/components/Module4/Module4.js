import React, { useEffect, useState}from 'react'
import Introtomod4 from './Introtomod4';
import GratIntro from './GratIntro';
import Grat from './Grat';
import Letter from './Letter';
import Homework4 from './Homework4';
import Quiz4 from './Quiz4';
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import axios from 'axios'
import Form4 from './Form4'
import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';



const Module4 = ({ loggedIn, onLogin, user, setUser, updatedModuleStatus,
  changeUpdatedModuleStatus }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
  const menu = [
    {
      title: "Welcome",
      id: "welcome4",
      sectionComplete: false
    },
    {
      title: "Introduction to Gratitude",
      id: "into-grat",
      sectionComplete: false
    },
    {
      title: "What are you Thankful for?",
      id: "thankful",
      sectionComplete: updatedModuleStatus.thankful4
    },
    {
      title: "My Gratitude Letter",
      id: "letter",
      sectionComplete: updatedModuleStatus.letter4
    },
    {
      title: "Home Assignment",
      id: "home4",
      sectionComplete: updatedModuleStatus.homeAssignment4
    },
    {
      title: "Take the Quiz",
      id: "quiz4",
      sectionComplete: false

    },{
        title:"It's Review Time",
        id: "r4",
        sectionComplete:false
    }
    

  ];

  useEffect(() => {
    const newUserModule4 = {
      userId: updatedModuleStatus.userId,
      thanful4:false,
      letter4:false,
      homeAssignment4:false,
      hw4_day1: false,
      hw4_day2: false,
      hw4_day3: false,
      hw4_day4: false,
      hw4_day5: false,
      hw4_day6: false,
      hw4_day7: false,
    }

    console.log("useeffect of module4", updatedModuleStatus.userId, newUserModule4)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId, newUserModule4)
  }, [updatedModuleStatus.userId]);
    

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    
  useEffect(() => {
        
    updateModule4Completion();
    if (updatedModuleStatus.module4_completed) {
        handleShow()
      }
  }, [updatedModuleStatus.module4_completed]);
    
  const updateModule4Completion = () => {
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
      module1_completed,
      module2_completed,
      module3_completed,
      module4_completed,
      module5_completed,
      module6_completed,
    }
      
    axios.post('http://localhost:5000/users/update', updatedStatus);
    console.log('what updated in back', updatedStatus)
  };

  const addNewUser=( newEmail,newUserStatus )=>{
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/module4/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module4/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      thankful4: response.data.thankful4,
      letter4:response.data.letter4,
      homeAssignment4:response.data.homeAssignment4,
      hw4_day1: response.data.hw4_day1,
      hw4_day2: response.data.hw4_day2,
      hw4_day3: response.data.hw4_day3,
      hw4_day4: response.data.hw4_day4,
      hw4_day5: response.data.hw4_day5,
      hw4_day6: response.data.hw4_day6,
      hw4_day7: response.data.hw4_day7,
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module4/newold', {
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
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fas fa-award" size="5x" style={{color:'#ff0d0d'}}/></Modal.Title>
          </Modal.Header>
       
        <Modal.Body style={{fontFamily:'cursive', fontSize:'20px' , paddingLeft:'40%'}}>Good job!</Modal.Body>
        
            </Modal>
            <Introtomod4 />
            <ModuleHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                menu={menu}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
            <GratIntro/>
            <Grat
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
             <Letter
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
            <Homework4 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
                        <Quiz4 />
                        <Form4/>
        </div>
    );
}

export default Module4
