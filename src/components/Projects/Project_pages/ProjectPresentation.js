/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../../image/arrow-backward.png";
import CharityProject from "../CharityProject";
import ProjectMeetings from "./ProjectMeetings";
/** @import CSS styles */
import "../Projects.css";

/**
 * @description Creates a page of all the details of the project presentation
 * @class ProjectPresentation
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {ProjectPresentation}
 * @example <ProjectPresentation />
 * pre-condition: all the imports
 * post-condition: returns a page for  project presentation details
 * @param null
 * @returns {ProjectPresentation}
 * @todo connect to database to fetch and upload project presentation details
 */
class ProjectPresentation extends React.Component {
  render() {
    return (
      <Router>
        <div className="projects-content" style={{ position: "absolute" }}>
          <div className="page" style={{ display: "flex" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                <NavLink
                  to={"/Projects/CharityProjects/ProjectMeetings"}
                  onClick={this.closeProjects}
                >
                  <a href="/Projects/CharityProjects/ProjectMeetings">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
              <div className="header-title">Project Presentation</div>
            </div>
          </div>
          <div className="projects-centralpart">
            <div className="Image">
              <div className="Outline" style={{ marginBottom: "10px" }}>
                <a href="/changeimage">
                  <div className="CoverImage">Project's Cover Image</div>
                </a>
              </div>
            </div>
            <div className="project-emblem">
              <div className="projectTitle">Charity_Project Charity_Name</div>
              <NavLink to="/www.charityname.com" className="projectLink">
                status
              </NavLink>
            </div>
            <div className="Outline">
              <div className="project-subheadings">
                <h4>Exploration</h4>
              </div>
              <p className="presentation-text">
                PRESENTATION <br />
                Prep for Success Exploration Presentation
              </p>
              <NavLink to={"/www.youtube.com"}>
                <div className="video-box">upload your video here</div>
              </NavLink>
              <p>Description of the video and your presentation.</p>
              <button className="submitButton">DONE</button>
            </div>
          </div>
        </div>
        <Route
          path="/Projects/CharityProjects/ProjectMeetings"
          exact
          component={ProjectMeetings}
        />
      </Router>
    );
  }
}

export default ProjectPresentation;
