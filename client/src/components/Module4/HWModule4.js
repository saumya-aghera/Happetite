import React,{useState} from 'react';
import { MDBIcon } from 'mdbreact';
import HW_Day1 from './HW_Day1';
import HW_Day2 from './HW_Day2';
import HW_Day3 from './HW_Day3';
import HW_Day7 from './HW_Day7';
import HW_Day6 from './HW_Day6';
import HW_Day5 from './HW_Day5';
import HW_Day4 from './HW_Day4';
import { Modal, Button } from 'react-bootstrap';


const HWModule4 = ({loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus}) => {

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const [day1, setDay1] = useState(false);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);
  const [day7, setDay7] = useState(false);

    
    const forDay1 = () => {
        if (day1) {
            setDay1(false)
        }
        else {
            setDay1(true)
            setDay2(false);
            setDay3(false);
            setDay4(false);
            setDay5(false);
            setDay6(false);
            setDay7(false);
        }
    

    };
  
    const forDay2 = () => {
        if (day2) {
            setDay2(false)
        }
        else {
            setDay1(false)
            setDay2(true);
            setDay3(false);
            setDay4(false);
            setDay5(false);
            setDay6(false);
            setDay7(false);
        }
    };

    const forDay3 = () => {
        if (day3) {
            setDay3(false)
        }
        else {
            setDay1(false)
            setDay2(false);
            setDay3(true);
            setDay4(false);
            setDay5(false);
            setDay6(false);
            setDay7(false);
        }
    };

    const forDay4 = () => {
        if (day4) {
            setDay4(false)
        }
        else {
            setDay1(false)
            setDay2(false);
            setDay3(false);
            setDay4(true);
            setDay5(false);
            setDay6(false);
            setDay7(false);
        }
  }

    const forDay5 = () => {
        console.log("day5 function",day5)
            if (day5) {
                setDay5(false)
            }
            else {
                setDay1(false)
                setDay2(false);
                setDay3(false);
                setDay4(false);
                setDay5(true);
                setDay6(false);
                setDay7(false);
                console.log(day5)
            }
        };

    const forDay6 = () => {
        if (day6) {
            setDay6(false)
        }
        else {
            setDay1(false)
            setDay2(false);
            setDay3(false);
            setDay4(false);
            setDay5(false);
            setDay6(true);
            setDay7(false);
        }
        };

    const forDay7 = () => {
        if (day7) {
            setDay7(false)
        }
        else {
            setDay1(false)
            setDay2(false);
            setDay3(false);
            setDay4(false);
            setDay5(false);
            setDay6(false);
            setDay7(true);
        }
  }
  

    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
         
        
                    <Modal.Body>Please complete previous day's Home Assignment to unlock this Assignment.</Modal.Body>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
          </Button>
         
                </Modal.Footer>
            </Modal>
            
            <div className='hw4-pointer'>
                <div className='pointer1' onClick={forDay1} ><span>DAY 1</span>{updatedModuleStatus.hw4_day1 ? <span>
                    <MDBIcon icon="fa fa-check-circle" style={{
                        fontSize: "20px",
                        color: 'green',
                        marginLeft: '7px',
                        marginRight: '5px'
                    }} />
                </span> : null}
                </div>
                {
                    day1 ? <HW_Day1 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                        setDay1={setDay1}
                    /> : null
                }



                {(updatedModuleStatus.hw4_day1) ? <div className='pointer2' onClick={forDay2} ><span>DAY 2</span>{updatedModuleStatus.hw4_day2 ? <span>
                    <MDBIcon icon="fa fa-check-circle" style={{
                        fontSize: "20px",
                        color: 'green',
                        marginLeft: '7px',
                        marginRight: '5px'
                    }} />
                </span> : null}
                </div> :
                    <div className='pointer2' onClick={handleShow} ><span>DAY 2</span>{updatedModuleStatus.hw4_day2 ? <span>
                        <MDBIcon icon="fa fa-check-circle" style={{
                            fontSize: "20px",
                            color: 'green',
                            marginLeft: '7px',
                            marginRight: '5px'
                        }} />
                    </span> : null}
                    </div>
                }
            
                {
                    day2 ? <HW_Day2 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                    setDay2={setDay2}/> : null
                }



                {
                    (updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2) ?
                        <div className='pointer3' onClick={forDay3}><span>DAY 3</span>{updatedModuleStatus.hw4_day3 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{
                                fontSize: "20px",
                                color: 'green',
                                marginLeft: '7px',
                                marginRight: '5px'
                            }} />
                        </span> : null}
                        </div>
                        :
                        <div className='pointer3' onClick={handleShow}><span>DAY 3</span> {updatedModuleStatus.hw4_day3 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color: 'green', marginLeft: '7px', marginRight: '5px' }} />
                        </span> : null}</div>
                }
              
                {
                    day3 ? <HW_Day3 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                    setDay3={setDay3}
                    /> : null
                }


                {
                    (updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3) ?
                        <div className='pointer4' onClick={forDay4}><span>DAY 4</span>{updatedModuleStatus.hw4_day4 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{
                                fontSize: "20px",
                                color: 'green',
                                marginLeft: '7px',
                                marginRight: '5px'
                            }} />
                        </span> : null}
                        </div>
                        :
                        <div className='pointer4' onClick={handleShow} ><span>DAY 4</span> {updatedModuleStatus.hw4_day4 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{
                                fontSize: "20px",
                                color: 'green',
                                marginLeft: '7px',
                                marginRight: '5px'
                            }} />
                        </span> : null}</div>}
                {
                    day4 ? <HW_Day4 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                        setDay4={setDay4}
                    /> : null
                }


                {
                    (updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
                        && updatedModuleStatus.hw4_day4
                    ) ?
                        <div className='pointer5' onClick={forDay5}><span>DAY 5</span> {updatedModuleStatus.hw4_day5 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{
                                fontSize: "20px",
                                color: 'green',
                                marginLeft: '7px',
                                marginRight: '5px'
                            }} />
                        </span> : null}</div>
                        :
                        <div className='pointer5' onClick={handleShow} ><span>DAY 5</span>{updatedModuleStatus.hw4_day5 ? <span>
                            <MDBIcon icon="fa fa-check-circle" style={{
                                fontSize: "20px",
                                color: 'green',
                                marginLeft: '7px',
                                marginRight: '5px'
                            }} />
                        </span> : null} </div>}
                {
                    day5 ? <HW_Day5 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                        setDay5={setDay5}
                    /> : null
                }



                {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
                    && updatedModuleStatus.hw4_day4 && updatedModuleStatus.hw4_day5
                ) ? <div className='pointer6' onClick={forDay6} ><span>DAY 6</span>{updatedModuleStatus.hw4_day6 ? <span>
                    <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color: 'green', marginLeft: '7px', marginRight: '5px' }} />
                </span> : null}</div>
                    :
                    <div className='pointer6' onClick={handleShow} ><span>DAY 6</span>{updatedModuleStatus.hw4_day6 ? <span>
                        <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color: 'green', marginLeft: '7px', marginRight: '5px' }} />
                    </span> : null}</div>}
                {
                    day6 ? <HW_Day6 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                    setDay6={setDay6}
                    /> : null
                }



                {(updatedModuleStatus.hw4_day1 && updatedModuleStatus.hw4_day2 && updatedModuleStatus.hw4_day3
                    && updatedModuleStatus.hw4_day4 && updatedModuleStatus.hw4_day5
                ) ? <div className='pointer7' onClick={forDay7}><span>DAY 7</span>{updatedModuleStatus.hw4_day7 ? <span>
                    <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color: 'green', marginLeft: '7px', marginRight: '5px' }} />
                </span> : null}
                </div>
                    :
                    <div className='pointer7' onClick={handleShow} ><span>DAY 7</span>{updatedModuleStatus.hw4_day7 ? <span>
                        <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color: 'green', marginLeft: '7px', marginRight: '5px' }} />
                    </span> : null}</div>}
            
                {
                    day7 ? <HW_Day7 loggedIn={loggedIn}
                        onLogin={onLogin}
                        user={user}
                        setUser={setUser}
                        updatedModuleStatus={updatedModuleStatus}
                        changeUpdatedModuleStatus={changeUpdatedModuleStatus}
                    setDay7={setDay7}/> : null
                }
          
            </div>
        </div>
         
    );
}

export default HWModule4;