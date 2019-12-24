/** @import modules
 * 'npm i --save react'
 */
import React, { Component } from "react";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";
import YearbookMainSide from "./Yearbook_MainSide/Yearbook_MianSide";

/**
 * @description Creates a pade for a yearbook for each child under that account
 * @class Yearbook
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {Yearbook}
 * @example <Yearbook />
 * pre-condition: all the imports
 * post-condition: returns a pade for a yearbook
 * @param null
 * @returns {Yearbook}
 * @todo connect to database to fetch and upload data
 */
class Yearbook extends React.Component {
  render() {
    return (
      <div>
        <YearbookMainSide />
        {/* <SidebarProfile /> */}
      </div>
    );
  }
}
export default Yearbook;
