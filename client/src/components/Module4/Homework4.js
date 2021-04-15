import React, { useState } from 'react'
import './Homework4.css'
import { Modal, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useLocation } from 'react-router-dom';


const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Homework4({ loggedIn,onLogin,user,setUser}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

   const onSuccess = async (res) => {
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
     handleClose();
    };

  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };
  

    return (
        
      <div className="hw4-main" id='home4'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Sign in before submitting</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={renderProps => (
              <Button variant="contained" color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Sign In
              </Button>)}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />
        </Modal.Footer>
      </Modal>
        <div className='hw4-cont'>
            <h2>Home Assignment</h2>
            <div style={{
                    textAlign:'center',
                    fontSize: 'medium',
                    fontWeight:'500',
                    paddingBottom: '20px',
                    paddingLeft: '75px',
                    paddingRight: '75px'
                }}><u>Instructions:</u> Your home activity for this week is maintaining an online gratitude journal. As your day ends, fill in the aspects of the journal required for that day. Each day you will have three good things visible to you to write about or fill in by completing the sentences. Make sure that you practise gratitude daily by filling the journal. Remember practise strengthens habits.
          </div>
          <div className='hw4-pointer'>

            <a href="/HW4/Day1"  style={{textDecoration:'none'}}><div className='pointer1' >DAY 1</div></a>
            <a href="/HW4/Day2"  style={{textDecoration:'none'}}><div className='pointer2' >DAY 2</div></a>
            <a href="/HW4/Day3"  style={{textDecoration:'none'}}><div className='pointer3' >DAY 3</div></a>
            <a href="/HW4/Day4"  style={{textDecoration:'none'}}><div className='pointer4' >DAY 4</div></a>
            <a href="/HW4/Day5"  style={{textDecoration:'none'}}><div className='pointer5' >DAY 5</div></a>
            <a href="/HW4/Day6"  style={{textDecoration:'none'}}><div className='pointer6' >DAY 6</div></a>
            <a href="/HW4/Day7"  style={{textDecoration:'none'}}><div className='pointer7' >DAY 7</div></a>

          </div>
        </div>
      </div> 
    )
            }

export default Homework4