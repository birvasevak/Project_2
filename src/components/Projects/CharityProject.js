/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 * 'npm i --save react-switch'
 */
import React, { Component } from "react";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../image/arrow-backward.png";
import Projects from "./Projects";
import ProjectActivities from "../../site_media/Charity Project_Project Activities_3b9f9d.png";
import CharityImpactReport from "../../site_media/Charity Project_Impact Report_3b9f9d.png";
import CharityInfo from "../../site_media/Charity Project_Contact Info_3b9f9d.png";
import PrintIcon from "../../site_media/Charity Project_Project Activity Print_3b9f9d.png";
import ProjectMeetings from "./Project_pages/ProjectMeetings";
import ProjectReport from "./Project_pages/ProjectReport";
/** @import CSS styles */
import "./Projects.css";

/**
 * @description Creates a page for Charity project details
 * @class CharityProject
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {CharityProject}
 * @example <CharityProject />
 * pre-condition: all the imports
 * post-condition: returns a page for Charity project details
 * @param null
 * @returns {CharityProject}
 * @todo connect to database to fetch and upload charity project details
 */
/**
 * @function constructor
 * @param null
 * @returns {element}
 */
/**
 * @function handleSwitchChange
 * @param {boolean} checked
 * @returns {boolean}
 */
class CharityProject extends React.Component {
  constructor() {
    super();
    this.state = {
      isCharityProjectOpen: true,
      checked: false
    };
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  handleSwitchChange(checked) {
    this.setState({ checked: true });
  }

  closeProjects = () => {
    this.setState = { isCharityProjectOpen: false };
  };

  render() {
    return (
      <Router>
        <div className="content">
          <div className="page" style={{ display: "flex" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                <NavLink to={"/Projects"} onClick={this.closeProjects}>
                  <a href="/Projects">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
              <div className="header-title">Charity Project</div>
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        <div className="centralpart">
          <div className="Image">
            <div className="Outline" style={{ marginBottom: "10px" }}>
              <a href="/changeimage">
                <div className="CoverImage">Import Cover Image</div>
              </a>
            </div>
          </div>

          <div className="editIcon"></div>
          <div className="editLabel">Edit </div>

          <div className="project-emblem">
            <div className="projectTitle">Charity_Name</div>
            <NavLink to="/www.charityname.com" className="projectLink">
              www.charityname.com
            </NavLink>
          </div>

          <div className="Outline" style={{ marginBottom: "10px" }}>
            <div className="buttonLabel">PROJECT NAME</div>
            <button className="projectButton">START PROJECT</button>
            <div className="subheadings">
              <h4>Mission</h4>
              <p>The mission of this project.</p>
            </div>
            <div className="subheadings">
              <h4>Description</h4>
              <p>The Description of this project.</p>
            </div>
            <div className="subheadings">
              <h4>Project Goals</h4>
              <p>The goals of this project.</p>
            </div>
            <div className="subheadings">
              <h4>Badges</h4>
            </div>
            <div className="badges_section">
              <div className="badges_icons"></div>
              <div className="badges_icons"></div>
              <div className="badges_icons"></div>
              <div className="badges_icons"></div>
              <div className="badges_icons"></div>
            </div>
          </div>
          <div className="Outline">
            {/* <div className="subheadings">Project Meetings</div> */}
            <div className="projeactPages">
              <NavLink to={"/Project/CharityProject/ProjectMeetings"}>
                <div
                  className="pageTitles"
                  style={{
                    borderTopWidth: "100%",
                    borderTop: "1px solid rgb(126, 123, 123)"
                  }}
                >
                  <img src={ProjectActivities} alt="project activities" />

                  <a href="/ProjectMeetings">Project Meetings</a>
                </div>
              </NavLink>
              <NavLink to={"/Projects/CharityProject/MyImpactReport"}>
                <div className="pageTitles">
                  <img src={CharityImpactReport} alt="child avatar" />
                  <a href="/Projects/CharityProject/MyImpactReport">
                    My Impact Report
                  </a>
                </div>
              </NavLink>
              <NavLink to={"/CharityContactInfo"}>
                <div className="pageTitles">
                  <img src={CharityInfo} alt="add achild" />
                  <a href="/CharityContactInfo">Charity Contact Info</a>
                </div>
              </NavLink>
            </div>
            <NavLink to="/Project/CharityProject/ProjectMeetings">
              <div className="outlineHeading">Project Meetings</div>
            </NavLink>
            <div className="outlineSubheading">Exploration</div>
            <div className="ProjectSection">
              <div className="Spt_project">
                <div className="Project_icons"></div>
                <div className="small-text">Charity Project Title</div>
              </div>
              <div className="Spt_project">
                <div className="Project_icons"></div>
                <div className="small-text">Charity Project Title</div>
              </div>
              <div className="Spt_project">
                <div className="Project_icons"></div>
                <div className="small-text">Charity Project Title</div>
              </div>
            </div>
          </div>
          <div className="desktopOutline">
            <NavLink to={"/Projects/CharityProject/MyImpactReport"}>
              <div className="outlineHeading">
                My Impact Report
                <div className="printIcon"></div>
              </div>
            </NavLink>
            <div className="ProjectSection">
              <div className="Spt_project">
                <div className="Project_icons"></div>
              </div>

              <button className="uploadButton">UPLOAD REPORT</button>
            </div>
          </div>
          <div className="desktopOutline">
            <div className="outlineHeading">Total Project Impact</div>

            <form className="impactForm">
              <div className="impact-item">
                <label>Total Volunter Hour Worked:</label>
                <input type="text" placeholder="# of Hours for Myself" />
              </div>
              <div className="impact-item">
                <label>Total Family Volunterr Hours: </label>
                <input type="text" placeholder="# of Hours for My Family" />
              </div>
              <div className="impact-item">
                <label>Fundraise:</label>
                <input type="text" placeholder="$" />
              </div>
              <div className="impact-item">
                <label>Total People Reached:</label>
                <input type="text" placeholder="# of People" />s
              </div>
            </form>
          </div>
          <div className="desktopOutline">
            <div className="outlineHeading">
              Unicorn Oath & Project Declaration
            </div>
            <p>
              I hereby promise to believe in myself. I will serve my community
              with strength and purpose. I will work with my peers to achieve
              our goals. And we will be an example to others, together as one!
            </p>
            <p>
              I delcare that I have worked closely with my blessings, the
              Helpful Hearts, in contributing towards this Charity Project. I
              have completed the following project work.
            </p>
            <li className="switch-list">
              <label className="switch-labels">
                <Switch
                  className="react-switch"
                  onChange={this.handleSwitchChange}
                  checked={this.state.checked}
                />
                I delcare that I have worked closely with my blessings.
              </label>
            </li>

            <li className="switch-list">
              <label className="switch-labels">
                <Switch
                  className="react-switch"
                  onChange={this.handleSwitchChange}
                  checked={this.state.checked}
                />
                label 2
              </label>
            </li>

            <li className="switch-list">
              <label className="switch-labels">
                <Switch
                  className="react-switch"
                  onChange={this.handleSwitchChange}
                  checked={this.state.checked}
                />
                label 3
              </label>
            </li>

            <li className="switch-list">
              <label className="switch-labels">
                <Switch
                  className="react-switch"
                  onChange={this.handleSwitchChange}
                  checked={this.state.checked}
                />
                label 4
              </label>
            </li>
            <li className="switch-list">
              <label className="switch-labels">
                <Switch
                  className="react-switch"
                  onChange={this.handleSwitchChange}
                  checked={this.state.checked}
                />
                label 5
              </label>
            </li>
            <div className="sign-label">Signed By:</div>
            <div className="signature-box">Unicorn Signature</div>
            <button className="submitButton">SUBMIT REPORT</button>
          </div>
        </div>

        {/* <ProjectsSidebar />
        </div> */}
        <Route path="/Projects" exact component={Projects} />
        <Route
          path="/Project/CharityProject/ProjectMeetings"
          exact
          component={ProjectMeetings}
        />
        <Route
          path="/Projects/CharityProject/MyImpactReport"
          exact
          component={ProjectReport}
        />
      </Router>
    );
  }
}

export default CharityProject;
