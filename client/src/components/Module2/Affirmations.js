import React from 'react'
import './Affirmations.css'
import { List } from 'semantic-ui-react'


import { MDBIcon} from 'mdbreact';


function Affirmations() {
    return (
       
        <div className="affirm-main" id="affirmations">
            <div className="affirm-comt">
                <h2>Affirmations</h2>
                <div style={{fontWeight:'500', fontSize:'medium', textAlign:'center', paddingLeft:'75px',paddingRight:'75px',paddingBottom:'20px',}}><u>Instructions:</u>
                It is very important to identify and acknowledge the positive things in you and make them known as well. The statements below are things that we know but never really take the time out to acknowledge and embrace. We all need to feel good about ourselves and therefore positive affirmations help us do so. Your task is to read out these affirmations to yourself starting from right now till the end of this week at least once a day for 5 mins. As you are reading these statements out, make sure you are not in a hurry and can dedicate 5 mins to the exercise daily. Choose a time when you are free and relatively relaxed. Remember to embrace the positivity!
                </div>
                    <div className="listm">
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I deserve to be happy</span><br/>
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                    <span>I love my body and my mind deeply</span><br />
                    <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                    <span>Today, I will reflect only on the good things in life</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I forgive myself for all past mistakes</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I hold no grudges against anyone</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>Whatever has happened, is for the good</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I will live in the present</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>From today, I will abandon old habits and embrace new and better ones</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I am grateful for everything I have got so far</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I am a fighter, and I will overcome this</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>I will love myself more from today</span><br />
                        <MDBIcon icon="feather-alt" style={{margin:'10px'}}/>
                        <span>Everything is okay and I am at peace with myself</span>
                        

            </div>
           </div>
        </div>
            
       
    );
}

export default Affirmations;