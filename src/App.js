import React from "react";
import "./App.css";
import { Component } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Spotlight from "./components/Spotlight/Spotlight";
import Homepage from "./components/Homepage/Homepage";
import Friends from "./components/Friends/Friends";
import Yearbook from "./components/Yearbook/Yearbook";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_logo from "./image/Logo-mobile.png";
import Desktop_logo from "./image/desktop_logo.png";
import Mobile_toolbar from "./components/Mobile_toolbar/Mobile_toolbar";
import Login from "./components/Login/Login";
import ChildForm from "./components/MyChildren/ChildForm";

//import UnicornHeart from "../src/site_media/Bottom Menu_Home_Unicorn Heart.png"
//import Toolbar from './components/Toolbar/Toolbar';
//import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Login /> */}
          <div className="content-wrapper">
            {/* <Menu /> */}
            <Header />
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Homepage} />

                <Route path="/Projects" component={Projects} />
                <Route path="/Spotlight" component={Spotlight} />
                <Route path="/Friends" component={Friends} />
                <Route path="/Yearbook" component={Yearbook} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
