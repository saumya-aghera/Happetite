import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './History';
import Auth from './components/Auth/Auth'
import Home from './components/Home'
import Hope from './components/Hope/Hope'
import FAQ from './components/FAQ'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Auth" component={Auth} />
                    <Route path="/Hope" component={Hope} />
                    <Route path="/FAQ" component={FAQ} />
                </Switch>
            </Router>
        )
    }
}


