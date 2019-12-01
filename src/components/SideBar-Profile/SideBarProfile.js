import React, { Component } from "react";

import "./SideBarProfile.css";

class SidebarProfile extends Component {
  render() {
    return (
      <div class="sidebar-profile">
        <div class="profile__wrapper">
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
          <div class="Social-Impact">My Social Impact</div>
          <div class="Social_Impact_info">
            <div class="Project_amount">4</div>
            <div class="Profile_Total_Project">Total Project</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">122</div>
            <div class="Profile_Total_Project">Total Volunteer Hours</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">$829</div>
            <div class="Profile_Total_Project">Total Funds Raised</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">798</div>
            <div class="Profile_Total_Project">Total People Reached</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarProfile;
