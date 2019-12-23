import React, { Component } from "react";
import "./Homepage.css";
import MainView from "./Main_View";
import NotifBar from "./NotifBar";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";

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
