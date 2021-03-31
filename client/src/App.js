import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Home from './components/Home';
import Hope from './components/Hope/Hope';
import { BrowserRouter, Switch, Route } from 'react-router-dom';






function App() {
  return (
    <div>
      
        
      <Header />
      
      <Home />
      <Intro />
      
      <Hope />
       
    </div>
  );
}

export default App