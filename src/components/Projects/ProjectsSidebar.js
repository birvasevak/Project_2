import React, { Component } from "react";

import "./ProjectsSidebar.css";
import "../SideBar-Profile/SideBarProfile.css";

class ProjectsSidebar extends Component {
  render() {
    return (
      <div class="sidebar-profile">
        <div class="profile__info">
          <a href="M">
            <div class="child__avatar"></div>
          </a>
          <div class="profile__Detail">
            <a href="/children/update/352/" class="profile_Name">
              Name
            </a>
          </div>
          <div class="profile_Unicorn_Name">Unicorn Name</div>
          <div class="profile_blessingGroup">Blessing Group</div>
          <div class="profile_Color_rank">Color Horn Rank</div>
        </div>
      </div>
    );
  }
}

export default ProjectsSidebar;
