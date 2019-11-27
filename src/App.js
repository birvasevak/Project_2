import React from "react";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import UnicornHeart from "../src/site_media/Bottom Menu_Home_Unicorn Heart.png"
//import Toolbar from './components/Toolbar/Toolbar';
//import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="content-wrapper">
          <Header />
          <Navbar />
          <div class="container">
            <div class="Tool-guide">
              <div class="child__avatar">Tool Guide here.</div>
            </div>
            <div class="content">
              <div class="schedule">
                <div class="page-title">
                  <h1>This is Box</h1>
                </div>
                <div class="page-undertitle">This is post.</div>
              </div>
            </div>
            <div class="sidebar-profile">
              <div class="profile__wrapper">
                <div class="profile__info">
                  <a href="/children/update/352/">
                    <div class="child__avatar">Picture here.</div>
                  </a>
                  <div class="profile__name">
                    <a href="/children/update/352/">Name</a>
                  </div>
                  <div class="profile_Unicorn_Name">Unicorn Name</div>
                  <div class="profile_blessingGroup">Blessing Group</div>
                  <div class="profile_Color_rank">Color Horn Rank</div>
                </div>
              </div>
            </div>
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
