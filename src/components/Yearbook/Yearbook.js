import React, { Component } from "react";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";
import YearbookMainSide from "./Yearbook_MainSide/Yearbook_MianSide";


class Yearbook extends React.Component {
  render() {
    return (
      <div>
        <YearbookMainSide />
        <SidebarProfile />

      </div>
    );
  }
}
export default Yearbook;
