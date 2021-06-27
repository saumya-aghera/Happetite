import React, { useEffect, useState}from 'react'
import Introtomod3 from './Introtomod3';
import Optimism from './Optimism';
import Try from './Try';
import Reading from './Reading';
import Homework3 from './Homework3';
import ModuleHeader from '../ModuleHeader/ModuleHeader'
import Form3 from './Form3'

import axios from 'axios'
import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';


const Module3 = ({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus  }) => {
  const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  const menu = [
    {
      title: "Welcome",
      id: "welcome3",
      sectionComplete: false
    },
    {
      title: "What is learned optimism ?",
      id: "optimism",
      sectionComplete: false
    },
    {
      title: "Reading Material",
      id: "read",
      sectionComplete: false
    },
    {
      title: "Try It Yourself!",
      id: "try",
      sectionComplete: updatedModuleStatus.try3
    },
    {
      title: "Home Assignment",
      id: "home3",
      sectionComplete: updatedModuleStatus.homeAssignment3
    },{
        title:"It's Review Time",
        id: "r3",
        sectionComplete:false
    }
    

  ];

  useEffect(() => {

    
    const newUserModule3 = {
      userId: updatedModuleStatus.userId,
      try3: false,
      homeAssignment3: false,
    }

    console.log("useeffect of hope", updatedModuleStatus.userId, newUserModule3)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId, newUserModule3)
  }, [updatedModuleStatus.userId]);



    useEffect(() => {
        updateModule3Completion();
        if (updatedModuleStatus.module3_completed) {
        handleShow()
      }
    }, [updatedModuleStatus.module3_completed])


    const updateModule3Completion = () => {
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
        module1_completed,
        module2_completed,
        module3_completed,
        module4_completed,
        module5_completed,
        module6_completed,
      }
      
      axios.post('http://localhost:5000/users/update', updatedStatus);
      console.log('what updated in back',updatedStatus)
  }
  
  const addNewUser=( newEmail,newUserStatus )=>{
    console.log('Not registered before',newUserStatus)
     axios.post('http://localhost:5000/module3/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module3/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      try3: response.data.try3,
      homeAssignment3:response.data.homeAssignment3
     
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module3/newold', {
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
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fas fa-award" size="5x" style={{color:'#ff8ec7'}}/></Modal.Title>
          </Modal.Header>
       
        <Modal.Body style={{fontFamily:'cursive', fontSize:'20px' , paddingLeft:'22%'}}>You are on the right track.</Modal.Body>
        
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
            <Introtomod3/>
            <Optimism/>
            <Reading />
            <Try
             loggedIn={loggedIn}
             onLogin={onLogin}
             user={user}
                setUser={setUser}
            
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
            <Homework3 
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
           
                
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
                <Form3/>
        </div>
    );
}

export default Module3