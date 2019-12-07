import React, { Component } from "react";

import "./NotifBar.css";

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
            <div className="Text">Messages</div>
          </a>
        </div>
      </div>
    );
  }
}

export default NotifBar;
