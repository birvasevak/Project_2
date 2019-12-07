import React, { Component } from "react";
import "./Main_View.css";

class Main_View extends React.Component {
  render() {
    return (
      <div class="main-view">
        <div class="post">
          <div class="user-icon">
            <a href="User">
              <div class="user-image"></div>
            </a>
          </div>
          <div class="user-enter">
            <textarea
              title="What's going on?"
              class="enter-default"
              placeholder="What's going on?"
            ></textarea>
            <input type="hidden" autoComplete="off" name="message_text"></input>
          </div>
        </div>
        <div class="Line"></div>
        <div class="Blocks">
          <div class="Block">
            <div class="btn">
              <span class="photo-icon"></span>
              <a href="#"> Photo</a>
              <span></span>
            </div>
          </div>
          <div class="Block">
            <div class="btn">
              <span class="projects-icon"></span>
              <a href="#"> Projects</a>
              <span></span>
            </div>
          </div>
          <div class="Block">
            <div class="btn">
              <span class="friends-icon"></span>
              <a href="#"> Friends</a>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main_View;
