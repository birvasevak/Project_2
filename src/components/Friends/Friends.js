import React, { Component } from "react";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";
import FriendsMainSide from "./Friends_MainSide/Friends_MianSide";

class Friends extends React.Component {
  render() {
    return (
      <div>
        <FriendsMainSide />
        {/* <SidebarProfile /> */}
      </div>
    );
  }
}
export default Friends;
