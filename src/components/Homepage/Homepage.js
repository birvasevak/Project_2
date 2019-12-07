import React, { Component } from "react";
import "./Homepage.css";
import MainView from "./Main_View";
import NotifBar from "./NotifBar";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <NotifBar />
        <MainView />
      </div>
    );
  }
}
export default Homepage;
