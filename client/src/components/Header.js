import React,{useState,useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link} from "react-scroll";
import './Header.css';
import { Avatar, Button} from '@material-ui/core';
import { refreshTokenSetup } from '../utils/refreshToken';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';



const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';




const Header = ({ loggedIn, onLogin, user, setUser,
 
  updatedModuleStatus,changeUpdatedModuleStatus
        }) => {
  

  useEffect(() => {
    console.log('finalcheck', updatedModuleStatus,)
            
  }, [updatedModuleStatus]);

   const addNewUser =( newEmail,newUserStatus )=>{
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
  };

    const onFailure = (res) => {
        console.log('Login failed:', res);
        alert('Google Sign In was unsuccessful. Try again later');
  };
  
  const logout = () => {
    onLogin(false);
    console.log('logout', user)
    window.location.reload(false);
    };

  
  const popUp = () => {
    console.log('inside function')
    var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  }

  return (
    
            
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Navbar.Brand href="/">HAPPETITE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  style={{fontSize:'medium', fontWeight:'400'}}><Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeStyle={{ color: 'white' }}
          >Home</Link></Nav.Link>
          <Nav.Link style={{fontSize:'medium', fontWeight:'400'}}><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
            activeStyle={{ color: 'white' }}
          >About</Link></Nav.Link>
          <Nav.Link style={{fontSize:'medium', fontWeight:'400'}}><Link
            activeClass="active"
            to="module"
            spy={true}
            smooth={true}
            offset={-45}
            duration={500}
            activeStyle={{ color: 'white' }}
             
          >Modules</Link></Nav.Link>
         
          <Nav.Link href="/FAQ" style={{fontSize:'medium', fontWeight:'400'}}>
           FAQ</Nav.Link>
        
        <Nav.Link onClick={()=>window.open('mailto:happetitedevelopers@gmail.com?')} style={{fontSize:'medium', fontWeight:'400'}}>Contact Us</Nav.Link>
          
        </Nav>
        
        
        {loggedIn ? (<Nav>
          <Nav.Link href='/helpline' style={{ fontSize: 'medium', fontWeight: '400', paddingTop: '20px' }}>
            Helplines
            </Nav.Link>
          <Nav.Link style={{ paddingTop: '18px' }}>
            <GoogleLogout
              clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled} >
                      Logout
                  </Button>)}
        buttonText="Logout"
              onLogoutSuccess={logout}
              
            />
          </Nav.Link>
          <Nav.Link >
            <div className="popup" onClick={popUp} style={{ textAlign: 'center',paddingTop: '10px' }}>
              <Avatar alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}
                 </Avatar>
              <p class="popuptext" id="myPopup">
                Signed in as {user.name}
              </p>
                </div>
           
                
            </Nav.Link>
        </Nav>) : (<Nav>
            <Nav.Link href='/helpline' style={{fontSize:'medium', fontWeight:'400',paddingTop:'15px'}}>Helplines</Nav.Link>
            <Nav.Link style={{ paddingTop: '14px' }}>
          <GoogleLogin
            clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Sign In
                  </Button>)}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
                isSignedIn={true}
                
              />
              </Nav.Link>
      </Nav>  )}
            
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;