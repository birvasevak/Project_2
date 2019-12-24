/** @import modules
 * 'npm i --save react'
 */
import React, { Component } from "react";
import MainView from "./Main_View";
import NotifBar from "./NotifBar";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";
/** @import CSS styles */
import "./Homepage.css";

/**
 * @description Creates the Homepage for the user
 * @class Homepage
 * @extends React.Component
 * @type {Homepage}
 * @example <Homepage />
 * pre-condition: all the imports (Notifbar and MainView from imports)
 * post-condition: returns the Homepage page
 * @param null
 * @returns {Homepage}
 * @todo connect to database
 */
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <NotifBar />
        <MainView />
        {/* <SidebarProfile /> */}
      </div>
    );
  }
}
export default Homepage;
