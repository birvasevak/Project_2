/** importing modules */
import React from "react";
import { Component } from "react";
import Sidebar from "./components/SideBar-Profile/SideBarProfile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Spotlight from "./components/Spotlight/Spotlight";
import Homepage from "./components/Homepage/Homepage";
import Friends from "./components/Friends/Friends";
import Yearbook from "./components/Yearbook/Yearbook";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import firebaseapi from "./config/firebaseapi";
import Account from "./components/Account/Account";
/** importing CSS styles */
import "./App.css";

/**
 * @class App
 * @name App
 * @extends Component
 * @type {App}
 * @description This is the main page from where the program starts
 * It connects all the other main pages of the application.
 * @import "npm i --save react"
 * @example <App />
 * pre-condition: all the imports
 * post-condition: returns the main page
 */
/**
 * @function constructor
 * @param {props} props
 * @returns {props}
 */
/**
 *  @function componentDidMount
 * @param null
 * @returns {authlistener}
 */
/**
 * @function authlistener
 * @param null
 * @returns {onAuthStateChanged}
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authlistener();
  }
  authlistener() {
    firebaseapi.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        //  localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //   localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <Router>
        {this.state.user ? (
          <div className="App">
            <div className="content-wrapper">
              <Header />
              <Navbar />

              <div className="container">
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/Projects" component={Projects} />
                  <Route path="/Spotlight" component={Spotlight} />
                  <Route path="/Friends" component={Friends} />
                  <Route path="/Yearbook" component={Yearbook} />
                  <Route path="/Account" component={Account} />
                </Switch>
                <Sidebar />
              </div>
            </div>
            <Footer />{" "}
          </div>
        ) : (
          <div className="App">
            <Login />{" "}
          </div>
        )}
      </Router>
    );
  }
}

export default App;
