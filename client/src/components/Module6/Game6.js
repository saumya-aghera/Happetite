import React, {useState,useEffect} from 'react'
import './Game6.css'

import ReactGiphySearchbox from 'react-giphy-searchbox';
import { refreshTokenSetup } from '../../utils/refreshToken';
import axios from 'axios';



const clientId =
  '23157659159-k7of2mgt1a7ipa1hbpjqt7nnajf44d72.apps.googleusercontent.com';

function Game6({ loggedIn,onLogin,user,setUser,updatedModuleStatus, changeUpdatedModuleStatus
}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 useEffect(() => {
   
    changeUpdate();
    
 }, [updatedModuleStatus.game6])
    
const addNewUser=( newEmail,newUserStatus )=>{
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
    handleClose();
  };
      
    
  const onFailure = (res) => {
    handleClose();
    alert('Google Sign In was unsuccessful. Try again later');
  };



    
    const changeUpdate = () => {
     

    console.log('change hua ki nahi', updatedModuleStatus)
    
     if (updatedModuleStatus.activity6 && updatedModuleStatus.feedback6 && updatedModuleStatus.game6) {
     changeUpdatedModuleStatus(prevState => ({
      ...prevState,
      module6_completed:true
    }));
    }
        
       
       
         
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
    feedback6,
    game6
    } = updatedModuleStatus

    
    const updatedStatus={ userId,
    activity6,
    feedback6,
    game6
    }
    
    axios.post('http://localhost:5000/module6/update', updatedStatus);
    console.log('what updated in back',updatedStatus)
  
}

const [gif, setgif] = useState({
  gif_file: '',
});
    const creategif = () => {
        if (loggedIn) {
            const userName = user.name
      const userId= user.email
      const post = {
        ...gif.url,
        userId,
        userName
        
      };
              
            axios.post('http://localhost:5000/gif', post);
            console.log(`Box submitted:`,gif.url,user.name,user.email);
            setgif({
                gif_file: '',
                
            });

            changeUpdatedModuleStatus(prevState => ({
              ...prevState, 
            game6: true,
             
            }));
          
            

        } else {
            handleShow();
        }
        
      }
    // constructor() {
    //     super();

    //     this.state = {
    //         gifs: []
    //     }
    //     this.handleTermChange = this.handleTermChange.bind(this);
    // }
    // handleTermChange(term){
    //     const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    //     request.get(url, (err, res) => {
    //         this.setState({ gifs: res.body.data })
    //     });
    //   }
      
    return (
        <>
            <div className="g6-main" id='wellbeing'>
                <div className='g6-cont'>
            <h2>Importance of Well-Being</h2>
            <div style={{
                        fontSize: 'medium',
                        fontWeight: '500',
                        textAlign: 'center',
                        paddingBottom:'10px'
                    
                    }}>Well-being is the state where we feel happy, healthy and comfortable. Let’s play a small game to check our understanding of well-being.
                    </div>
                    <div className="g6-text">
{/* 
                    <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                <GifList gifs={this.state.gifs}/> */}
                 <ReactGiphySearchbox
        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
        onSelect={ (gif) => console.log(gif.url)}
        // onSelect={(item) =>gif.gif_file=item}
        // value={gif.gif_file}
        // value={}
        // onChange={(event) => {
        //   setgif({ ...gif, gif_file: event.target.url })
        //     }}
        masonryConfig={[
          { columns: 4, imageWidth: 200, imageHeight: 250, gutter: 7 },
          { mq: "700px", columns: 4, imageWidth: 200, imageHeight: 250, gutter: 7 }
        ]}
      />
       </div>
                <div className="Submit-btn">
            <button type="submit" onClick={creategif} className='primary' style={{ marginRight: '57%' }}>
              Submit
                        </button>
                    
          </div> 
                    </div>
                   
        
            </div>
        </>
    )
}


export default Game6