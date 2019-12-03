import React, { Component } from "react";
import "./Homepage.css";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";
import MainView from "../Main_View/Main_View";
import NotifBar from "../NotifBar/NotifBar";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <NotifBar />
        <MainView />
        <SidebarProfile />
      </div>
    );
  }
}
export default Homepage;
