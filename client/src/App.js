import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Intro from './components/Intro';
import FAQ from './components/FAQ';
import Hope from './components/Hope/Hope';
import Auth from './components/Auth/Auth';
import axios from 'axios';


class App extends Component {


  checkLoginStatus() {
    axios
      .get("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

   componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Intro} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/Hope' component={Hope} />
          <Route path='/Auth' component={Auth} />
        </Switch>
      </Router>
    );
  }
}

export default App;