import React, { useEffect, useState,useRef} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link} from "react-scroll";
import {useLocation } from 'react-router-dom';
import useStyles from './HeaderStyle';
import { Avatar, Button} from '@material-ui/core';
import { refreshTokenSetup } from '../utils/refreshToken';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';




const Header = ({loggedIn,onLogin,user,setUser,userHelp,setUserHelp}) => {
  const classes = useStyles();
  const location = useLocation();
  

  const onSuccess = async (res) => {
    onLogin(true);
    setUser({ value: res });
    setUserHelp({value:res});
    console.log('login',userHelp.value.profileObj)
    refreshTokenSetup(res);
  };

    const onFailure = (res) => {
        console.log('Login failed:', res.profileObj);
        alert('Google Sign In was unsuccessful. Try again later');
  };
  
  const logout = () => {
    onLogin(false);
    setUser({ value: null });
    console.log('logout',userHelp.value.profileObj)
    
    };

  useEffect(() => {
  
    setUser(JSON.parse(localStorage.getItem('profile')))
    
  },[location])

  return (
    
            
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Navbar.Brand href="/">WEBSITE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeStyle={{ color: 'white' }}
          >About</Link></Nav.Link>
          <Nav.Link><Link
            activeClass="active"
            to="module"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeStyle={{ color: 'white' }}
             
          >Modules</Link></Nav.Link>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        
        <Nav.Link onClick={()=>window.open('mailto:email@example.com?')}>Contact Us</Nav.Link>
          
        </Nav>
        
        <Nav>
          {loggedIn?(<div><GoogleLogout
              clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Logout
                  </Button>)}
        buttonText="Logout"
        onLogoutSuccess={logout}
          ></GoogleLogout>
            <div className={classes.profile}>
            <Avatar className={classes.purple} alt={userHelp.value.profileObj?.name} src={userHelp.value.profileObj?.imageUrl}>{userHelp.value.profileObj?.name.charAt(0)}</Avatar>
              <h6 className={classes.userName}>{userHelp.value.profileObj?.name}</h6>
              </div>
              </div>):(<div><GoogleLogin
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
       </div>   )}
            
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;



      