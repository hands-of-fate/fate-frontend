// In an app with this many components, it probably makes sense to start separating your files out into more directories, or else you'll end up with 100 components all siblings to each other, which gets difficult to maintain, especially for any new coder who might find themselves inheriting this project. Maybe a folder for every component (along with its css and any necessary data files) might make this a bit easier to parse. It's obvious from the presentation that y'all worked well together and had fun making this project--great work! It's a delight to use and to look at, and something I hope you're very proud of! Lots of complexity in a simple user interface is not an easy thing to do, and you pulled it off well here :)

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