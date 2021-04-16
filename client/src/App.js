import React, {useState} from 'react';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import UnderCons from './components/UnderCons/UnderCons';
import Home from './components/HomePage/Home';
import Header from './components/Header';
import Intro from './components/Intro/Intro';
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
import { Helpers } from 'react-scroll';
import Helplines from './components/Helplines/Helplines';



function App() {

  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "start@gmail.com",
    familyName: "start",
    givenName: "start",
    googleId: "106161716030241020753",
    imageUrl: "https://lh6.googleusercontent.com/-YnY_k1gqAsc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucljSruPsTBmPmYNkGzUARwKYtu0UA/s96-c/photo.jpg",
    name: "start"
  });

  

  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        onLogin={setLogin}
        user={user}
        setUser={setUser}
      
      />
      
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><Intro /></Route>
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
          />
        </Route>
        <Route path='/Module2'>
          <Module2
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          />  
        </Route>
        <Route path='/Module3'>
          <Module3
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          />
          
          
        </Route>
        <Route path='/Module4'>
          <Module4
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          /></Route>
          
          <Route path='/underconstruction'><UnderCons /></Route>
          
          <Route path='/HW4/Day1'><HW_Day1 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser} /></Route>
              <Route path='/HW4/Day2'><HW_Day2 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser} /></Route>
              <Route path='/HW4/Day3'><HW_Day3 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}/></Route>
              <Route path='/HW4/Day4'><HW_Day4 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}/></Route>
              <Route path='/HW4/Day5'><HW_Day5 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}/></Route>
              <Route path='/HW4/Day6'><HW_Day6 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}/></Route>
              <Route path='/HW4/Day7'><HW_Day7 loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
          setUser={setUser} /></Route>
        

        <Route path='/Module5'>
          
          <Module5
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          />
          </Route>
          <Route path='/Module6'>
          <Module6
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          />
          
        </Route>

      
        
      </Switch>
     
    </Router>
  );
  }


export default App;