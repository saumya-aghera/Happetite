import React, {useState} from 'react';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Intro from './components/Intro';
import FAQ from './components/FAQ';
import Hope from './components/Hope/Hope';




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
        <Route path='/Hope'>
          <Hope
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