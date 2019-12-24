/** @import modules
 * 'npm i --save react'
 */
import React, { Component } from "react";
/** @import CSS styles */
import "./NotifBar.css";

/**
 * @description Creates the notification center
 * @class NotifBar
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {NotifBar}
 * @example <NotifBar />
 * pre-condition: all the imports
 * post-condition: returns the notification center
 * @param null
 * @returns {NotifBar}
 * @todo connect to database for user updates
 */
class NotifBar extends Component {
  render() {
    return (
      <div className="Tool-guide">
        <div className="content_holder">
          <a href="/calender">
            <div className="Calender"></div>
            <div className="Text">Calender</div>
          </a>

          <a href="/Notification">
            <div className="Notification"></div>
            <div className="Text">Notification</div>
          </a>

          <a href="/Messages">
            <div className="Messages"></div>
            <div className="Text">Notification</div>
          </a>
        </div>
      </div>
    );
  }
}

export default NotifBar;
