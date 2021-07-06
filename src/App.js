import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link,
  // useParams
} from "react-router-dom";
import HomePage from './HomePage.js';
import TitlePage from "./TitlePage.js";
import './App.css';


export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN')
}

handleLogin = (userToken) => {
    this.setState({ token: userToken })
    localStorage.setItem('TOKEN', userToken)
}

handleLogout = () => {
    this.setState({ token: '' })
    localStorage.setItem('TOKEN', '')
}

  render() {
    return (
      <Router>
        <div className="overall-body">
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <TitlePage login={this.handleLogin} logout={this.handleLogout} {...routerProps} />} 
            />         
            <Route 
              path="/home" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <HomePage {...routerProps} />
                  : <Redirect to='/' />} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}