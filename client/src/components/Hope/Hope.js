import React, {useState,useEffect} from 'react'
import Video from './Video';
import HopeBox from './HopeBox';
import Quiz from './Quiz';
import HomeAssign from './HomeAssign';
import Form1 from './Form1'
import ModuleHeader from '../ModuleHeader/ModuleHeader';
import SideMenu from '../Menu/SideMenu';
import HopePPT from './HopePPT'
import Worksheet from './Worksheet';
import axios from 'axios';
import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';

const Hope = ({ loggedIn, onLogin, user, setUser,
    updatedModuleStatus, changeUpdatedModuleStatus }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const menu = [
    {
        title: "What is Hope?",
        id: 'hopeppt',
        sectionComplete:false
    },
    {
        title:"Hope Theory",
        id: "hopeVideo",
        sectionComplete:false
    },
    {
        title:'Cultivating Hope and Possibility',
        id: "worksheet",
        sectionComplete:updatedModuleStatus.worksheet1
    },
    {
        title:'Hope Box',
        id: "hopeBox",
        sectionComplete:updatedModuleStatus.hopeBox1
    },
    {
        title:'Take this Quiz',
        id: "hopeQuiz",
        sectionComplete:false
    },
    {
        title:'Home Assignment',
        id: "homeAssignment",
        sectionComplete:updatedModuleStatus.homeAssignment1
    },
    {
        title:"It's Review Time",
        id: "r1",
        sectionComplete:false
    }
]

  useEffect(() => {

    
    const newUserModule1 = {
      userId:updatedModuleStatus.userId,
      worksheet1:false,
      hopeBox1:false,
      homeAssignment1:false  
    }

    console.log("useeffect of hope",updatedModuleStatus.userId,newUserModule1)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId,newUserModule1)
  }, [updatedModuleStatus.userId])


    useEffect(() => {
        updateModule1Completion();
      console.log("module 1completee")
      if (updatedModuleStatus.module1_completed) {
        handleShow()
      }
      
    }, [updatedModuleStatus.module1_completed])
    

    const updateModule1Completion = () => {
        
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
      };
      
      axios.post('http://localhost:5000/users/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
    }

  
   const addNewUser=( newEmail,newUserStatus )=>{
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/module1/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module1/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      worksheet1: response.data.worksheet1,
      hopeBox1: response.data.hopeBox1,
      homeAssignment1: response.data.homeAssignment1,
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module1/newold', {
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
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fas fa-award" size="5x" style={{color:'#FFEA00'}}/></Modal.Title>
          </Modal.Header>
       
        <Modal.Body style={{fontFamily:'cursive', fontSize:'20px' , paddingLeft:'40%'}}>Well Done!</Modal.Body>
        
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
            <HopePPT />
            <Video />
            <Worksheet
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            <HopeBox
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                
            />
            <Quiz />
            <HomeAssign
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                 updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                
            />
            <Form1/>
        </div>
    );
}

export default Hope