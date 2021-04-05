import React, {useState} from 'react';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Intro from './components/Intro';
import FAQ from './components/FAQ';
import Hope from './components/Hope/Hope';
import Auth from './components/Auth/Auth';



function App() {

  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({
    value:JSON.parse(localStorage.getItem('profile'))
  });
  const [userHelp, setUserHelp] = useState(Object.assign({}, user));


  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        onLogin={setLogin}
        user={user}
        setUser={setUser}
        userHelp={userHelp}
        setUserHelp={setUserHelp}
      />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><Intro /></Route>
        <Route path='/FAQ'><FAQ /></Route>
        <Route path='/Hope'>
          <Hope
            loggedIn={loggedIn}
            onLogin={setLogin}
            user={user}
            setUser={setUser}
            userHelp={userHelp}
            setUserHelp={setUserHelp} />
        </Route>
      </Switch>
    </Router>
  );
  }


export default App;