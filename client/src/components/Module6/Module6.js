import React,{useEffect, useState} from 'react'
import Introtomod6 from './Introtomod6';
import Activity6 from './Activity6';
import Game6 from './Game6';
import Vid6 from './Vid6';
import End from './End';
import Ques from './Ques';
import ModuleHeader from '../ModuleHeader/ModuleHeader'
import axios from 'axios'
import { MDBIcon} from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';


const Module6 = ({ loggedIn, onLogin, user, setUser,updatedModuleStatus, changeUpdatedModuleStatus  }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const menu = [
    {
        title: "Welcome",
        id:"welcome6",
        sectionComplete:false
    },
    {
        title: "Importance of Well-Being",
        id:"wellbeing",
        sectionComplete:false
    },
    {
      title: "What is well being?",
      id:"activity",
      sectionComplete:updatedModuleStatus.activity6
    },
    {
        
        title: "What is Safety Planning?",
        id:"safety",
        sectionComplete:false
      },
    {
        title: "Post Intervention Questionare",
        id:"questionare",
        sectionComplete:false
    },
    {
        title: "Feedback",
        id:"feedback",
        sectionComplete:updatedModuleStatus.feedback6
    }
]
     useEffect(() => {
       window.scrollTo(0, 0);
     }, [])
  
  
  useEffect(() => {
     const newUserModule6 = {
      userId:updatedModuleStatus.userId,
       activity6: false,
       feedback6: false
    }

    console.log("useeffect of hope",updatedModuleStatus.userId,newUserModule6)
    //for checking if user is new to website
    checkForNewUser(updatedModuleStatus.userId,newUserModule6)
  }, [updatedModuleStatus.userId])
  
    useEffect(() => {
       
       
        updateModule6Completion();
      
  
    },[updatedModuleStatus.module6_completed])
    
    const updateModule6Completion = () => {
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
     axios.post('http://localhost:5000/module6/add', newUserStatus);
      console.log('posted user in back')
  };


  const updateProgress = async (newEmail) => {
  console.log('Already registered before',newEmail);

  try {
    const response = await axios.get('http://localhost:5000/module6/updatedInfo', {
      params: {
        userId: newEmail
      }
    });
    console.log('in place of error',response.data)
    changeUpdatedModuleStatus((prevState => ({
        ...prevState,

      activity6: response.data.activity6,
      feedback6:response.data.feedback6
     
      
      })))
    
    
  }catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
  }

  const checkForNewUser = async (newEmail,newUserStatus) => {
    console.log('function called',newEmail)
    try {
        const resp = await axios.get('http://localhost:5000/module6/newold', {
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
        <Modal.Title style={{paddingLeft:'40%'}}><MDBIcon icon="fa-solid fa-sun" size="5x" style={{color:'#FFEA00'}}/></Modal.Title>
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
            <Introtomod6/>
        {/*<Game6/>*/}
           
            <Activity6
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
             <Vid6/>
            <Ques/>
            <End
                loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
                updatedModuleStatus={updatedModuleStatus}
                changeUpdatedModuleStatus={changeUpdatedModuleStatus}
            />
            
          
        </div>
    );
}

export default Module6
