import React, { Component } from "react";
import "./Homepage.css";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div class="Tool-guide">
          <div class="Help-Bar">Tool Guide here.</div>
        </div>

        <div class="main-view">
          <div class="post">
            <div class="user-icon"></div>
            <div class="user-enter">
              <h1>What's going on</h1>
            </div>
          </div>
        </div>
        <SidebarProfile />
      </div>
    );
  }
}
export default Homepage;
