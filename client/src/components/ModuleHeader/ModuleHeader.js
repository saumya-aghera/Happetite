import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Navbar, Nav} from 'react-bootstrap';
//import { Link} from "react-scroll";

import { Avatar, Button} from '@material-ui/core';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from '../Menu/SideMenu';

const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(-2),
  },
  
}));

const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';


const ModuleHeader=({loggedIn,onLogin,user,setUser,ModuleName})=> {
  const classes = useStyles();

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
    console.log('login', user, res)
    refreshTokenSetup(res);
  };

    const onFailure = (res) => {
        console.log('Login failed:', res);
        alert('Google Sign In was unsuccessful. Try again later');
  };
  
  const logout = () => {
    onLogin(false);
    console.log('logout',user)  
    };

  
    const popUp = () => {
        console.log('inside function')
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    };

    return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
           
            <Navbar.Brand >
                <SideMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> 
          </Navbar.Brand>
                <Navbar.Brand style={{marginLeft:'30px'}} href="/">WEBSITE</Navbar.Brand>
                
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        {loggedIn ? (<Nav>
          <Nav.Link>
            <GoogleLogout
              clientId={clientId}
              render={renderProps => (
                  <Button variant="contained" color="grey" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Logout
                  </Button>)}
        buttonText="Logout"
        onLogoutSuccess={logout}
            />
          </Nav.Link>
          <Nav.Link >
            <div className="popup" onClick={popUp} style={{ textAlign: 'center' }}>
              <Avatar alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}
                 </Avatar>
              <p class="popuptext" id="myPopup">
                Signed in as {user.name}
              </p>
                </div>
           
                
            </Nav.Link>
        </Nav>) : (<Nav>
            <Nav.Link>
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

export default ModuleHeader;