import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';

import Auth from './components/Auth/Auth'
import Home from './components/Home'
import Hope from './components/Hope/Hope'
import FAQ from './components/FAQ'





function App() {


  return (
   
    <div>
        
      <Header />
      
      <Routes />
    </div>
  );
}

export default App