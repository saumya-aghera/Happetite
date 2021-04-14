import React, {useState} from 'react';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import UnderCons from './components/UnderCons/UnderCons';
import Home from './components/HomePage/Home';
import Header from './components/Header';
import Intro from './components/Intro/Intro';
import FAQ from './components/FAQ/FAQ';
import Helplines from './components/Helplines/Helplines';

import Hope from './components/Hope/Hope';
import Module2 from './components/Module2/Module2';
import Module3 from './components/Module3/Module3';
import Module4 from './components/Module4/Module4';

import './App.css';
import { Helpers } from 'react-scroll';



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
        <Route path='/FAQ'><FAQ /></Route>
        
        <Route path='/Module1'>
          <Hope
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
          />
          
          <Route path='/underconstruction'><UnderCons /></Route>
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
          />
          
          
        </Route>
      </Switch>
      <Helplines />
    </Router>
  );
  }


export default App;