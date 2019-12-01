import React from "react";
import "./App.css";
import "./components/Header/Header.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SidebarProfile from "./components/SideBar-Profile/SideBarProfile";
import Mobile_logo from "./image/Logo-mobile.png";
import Desktop_logo from "./image/desktop_logo.png";

//import UnicornHeart from "../src/site_media/Bottom Menu_Home_Unicorn Heart.png"
//import Toolbar from './components/Toolbar/Toolbar';
//import sideDrawer from './components/SideDrawer/SideDrawer';
//import UnicornHeart from "../src/site_media/Bottom Menu_Home_Unicorn Heart.png"

class App extends Component{
  render(){
    return(
    <div className="App">
      <div class="content-wrapper">
        <Header />
        <Navbar />
        
        <div class="container">
          <div class="Tool-guide">
            <div class="Help-Bar">Tool Guide here.</div>
          </div>

          <div class="main-view">
            <div class="post">
              <div class="user-icon"></div>
              <div class="user-enter">
                <h1>What's going on</h1></div>
            </div>
          </div>


          <SidebarProfile />
          </div>
      </div>
    </div>  
    );
  }
}

/*
function App() {
      <div style = {{height: '100%'}}/*className="App"
      <Toolbar />
      <sideDrawer/>
      <main style= {{marginTop:'64px'}}>
        <div className="content">
        <h1 className="heading">Heading 1</h1>
        <h2 className="subheading">
          Subheading</h2>
        </div>
        <p>Page content!</p>
      </main>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
      </div>
      <div className="content">
        <h1 className="heading">Google Fonts in React(heading)</h1>
        <h2 className="subheading">
          Learn how to add fonts in a React Project(Subheading)
        </h2>
        <hr/>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
       </div>
     </div>
    */

export default App;
