import React,{useEffect, useState} from 'react'
import Introtomod5 from './Introtomod5';
import Survey from './Survey';
import CharStrength from './CharStrength';
import MyStrength from './MyStrength';
import Homework5 from './Homework5';
import ModuleHeader from '../ModuleHeader/ModuleHeader'
import axios from 'axios'
import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';


const Module5 = ({ loggedIn, onLogin, user, setUser,
    updatedModuleStatus, changeUpdatedModuleStatus }) => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    const menu = [
    {
        title: "Welcome",
        id:"welcome5",
        sectionComplete:false
    },
    {
        title: "VIA Survey",
        id:"survey",
        sectionComplete:updatedModuleStatus.survey5
    },
    {
        title: "Intoduction to Character Strength",
        id:"character",
        sectionComplete:false
    },
    {
        title: "My Strength",
        id:"strength",
        sectionComplete:updatedModuleStatus.strength5
    },
    {
        title: "Home Assignment",
        id:"hw5",
        sectionComplete:updatedModuleStatus.homeAssignment5
    }
    ]
    
    useEffect(() => {
       window.scrollTo(0, 0);
    }, [])
  
  
   useEffect(() => {
     const newUserModule5 = {
      userId:updatedModuleStatus.userId,
       survey5: false,
       strength5: false,
      homeAssignment5:false
    }

    console.log("useeffect of module5",updatedModuleStatus.userId,newUserModule5)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId,newUserModule5)
  }, [updatedModuleStatus.userId])
    
  useEffect(() => {
    updateModule5Completion();
    if (updatedModuleStatus.module5_completed) {
        handleShow()
      }
  }, [updatedModuleStatus.module5_completed]);
    
    const updateModule5Completion = () => {
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
     axios.post('http://localhost:5000/module5/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module5/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      survey5: response.data.survey5,
      strength5: response.data.strength5,
      homeAssignment5:response.data.homeAssignment5
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module5/newold', {
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
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fas fa-award" size="5x" style={{color:' #59bdff'}}/></Modal.Title>
          </Modal.Header>
       
        <Modal.Body style={{fontFamily:'cursive', fontSize:'20px' , paddingLeft:'20%'}}>Keep going, you are almost there.</Modal.Body>
        
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
            <Introtomod5/>
            <Survey loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
            <CharStrength/>
            <MyStrength
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
            <Homework5
            loggedIn={loggedIn}
            onLogin={onLogin}
            user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}/>
        </div>
    );
}

export default Module5
