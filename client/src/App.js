import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from './components/HomePage/Home';
import Header from './components/Header';
import Intro from './components/Intro/Intro';
import Template from './components/Template/Template';

import FAQ from './components/FAQ/FAQ';


import Hope from './components/Hope/Hope';
import Module2 from './components/Module2/Module2';
import Module3 from './components/Module3/Module3';
import Module4 from './components/Module4/Module4';
import HW_Day1 from './components/Module4/HW_Day1';
import HW_Day2 from './components/Module4/HW_Day2';
import HW_Day3 from './components/Module4/HW_Day3';
import HW_Day4 from './components/Module4/HW_Day4';
import HW_Day5 from './components/Module4/HW_Day5';
import HW_Day6 from './components/Module4/HW_Day6';
import HW_Day7 from './components/Module4/HW_Day7';
import Module5 from './components/Module5/Module5';
import Module6 from './components/Module6/Module6';
import './App.css';

import Helplines from './components/Helplines/Helplines';



const App=()=> {

  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "start@gmail.com",
    familyName: "start",
    givenName: "start",
    googleId: "106161716030241020753",
    imageUrl: "start",
    name: "start"
  });

 

  const [updatedModuleStatus, changeUpdatedModuleStatus] = useState(
    {
      userId: "start@example.com",
      module1_completed: false,
      module2_completed: false,
      module3_completed: false,
      module4_completed: false,
      module5_completed: false,
      module6_completed: false,
      
        worksheet1: false,
        hopeBox1: false,
        homeAssignment1:false,
  
      mindfulness2: false,
      
      try3: false,
      homeAssignment3: false,
      
      thankful4: false,
      letter4: false,
      homeAssignment4:false,
      hw4_day1: false,
      hw4_day2: false,
      hw4_day3: false,
      hw4_day4: false,
      hw4_day5: false,
      hw4_day6: false,
      hw4_day7: false,
      
      survey5: false,
      strength5: false,
      homeAssignment5: false,
      
      activity6: false,
      feedback6:false
    }
  );

  useEffect(() => {
    window.scroll(0,0)
  }, [])
  

  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        onLogin={setLogin}
        user={user}
        setUser={setUser}      
        updatedModuleStatus={updatedModuleStatus}
        changeUpdatedModuleStatus={changeUpdatedModuleStatus} 
      />
      
      <Switch>
        <Route exact path='/'>
          <Home
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} />
        </Route>

        <Route path='/about'><Intro /></Route>
        <Route path='/temp'><Template /></Route>
        <Route path='/FAQ'><FAQ
        loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
        /></Route>
        <Route path='/helpline'><Helplines
        loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}/></Route>
        
        <Route path='/Module1'>
          <Hope
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} 
          />
        </Route>
        <Route path='/Module2'>
          <Module2
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} 
          />  
        </Route>


        <Route path='/Module3'>
          <Module3
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} 
          />
        </Route>

        
      <Route path='/Module4'>
          <Module4
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} 
          /></Route>
          
          
          <Route path='/HW4/Day1'><HW_Day1 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day2'><HW_Day2 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day3'><HW_Day3 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day4'><HW_Day4 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day5'><HW_Day5 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day6'><HW_Day6 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
              <Route path='/HW4/Day7'><HW_Day7 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser}
        updatedModuleStatus={updatedModuleStatus}
  changeUpdatedModuleStatus={changeUpdatedModuleStatus} /></Route>
        

       <Route path='/Module5'>
          
          <Module5
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus}
          />
          </Route>
          <Route path='/Module6'>
          <Module6
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus}
          />
          
  </Route>

      
        
      </Switch>
     
    </Router>
  );
  }


export default App;