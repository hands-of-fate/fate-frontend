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
import GalleryPage from "./GalleryPage.js";
import CombatPage from "./CombatPage.js";
import ReadingsPage from "./ReadingsPage.js";
import RewardsPage from "./RewardsPage.js";
import CreditsPage from "./CreditsPage.js";


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
        <div className="gradient">
        <div className="overall-body">
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <TitlePage login={this.handleLogin}  {...routerProps} />} 
            />         
            <Route 
              path="/home" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <HomePage logout={this.handleLogout} {...routerProps} />
                  : <Redirect to='/' />} 
            />
            <Route 
              path="/gallery" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <GalleryPage token={this.state.token} />
                  : <Redirect to='/' />} 
            />
            <Route 
              path="/combat" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <CombatPage token={this.state.token} {...routerProps} />
                  : <Redirect to='/' />} 
            />
            <Route 
              path="/readings" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <ReadingsPage token={this.state.token} />
                  : <Redirect to='/' />} 
              />
              <Route
              path="/rewards" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <RewardsPage token={this.state.token} {...routerProps} />
                  : <Redirect to='/' />} 
              />
              <Route 
              path="/credits" 
              exact
              render={(routerProps) => <CreditsPage login={this.handleLogin}  {...routerProps} />} 
            /> 
          </Switch>
        </div>
        </div>
      </Router>
    );
  }
}