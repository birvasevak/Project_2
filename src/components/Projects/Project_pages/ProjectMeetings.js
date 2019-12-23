import React, { Component } from "react";
import "../Projects.css";
import "./ProjectPages.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../../image/arrow-backward.png";
import CharityProject from "../CharityProject";
import ProjectActivities from "./ProjectActivities";
import ProjectPresentation from "./ProjectPresentation";

class ProjectMeetings extends React.Component {
  render() {
    return (
      <Router>
        <div className="projects-content">
          <div className="page" style={{ display: "flex" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                <NavLink
                  to={"/Projects/CharityProjects"}
                  onClick={this.closeProjects}
                >
                  <a href="/Projects/CharityProjects">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
              <div className="header-title">Project Meetings</div>
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

              <div className="Articles_position">
                <div className="Articles_section">
                  <div className="Spt_articles">
                    <div className="Articles_icons"></div>
                    <div className="Article_text">
                      <NavLink
                        to={
                          "/Project/CharityProject/ProjectMeetings/Presentation"
                        }
                      >
                        <div className="Article_Type">PRESENTATION</div>
                      </NavLink>
                      <div className="Article_Title">Title:</div>
                    </div>
                  </div>
                  <div className="Spt_articles">
                    <div className="Articles_icons"></div>
                    <div className="Article_text">
                      <NavLink
                        to={
                          "/Project/CharityProject/ProjectMeetings/Activities"
                        }
                      >
                        <div className="Article_Type">ACTIVITY</div>
                      </NavLink>
                      <div className="Article_Title">Title:</div>
                    </div>
                  </div>
                  <div className="Spt_articles">
                    <div className="Articles_icons"></div>
                    <div className="Article_text">
                      <NavLink
                        to={
                          "/Project/CharityProject/ProjectMeetings/Activities"
                        }
                      >
                        <div className="Article_Type">ACTIVITY</div>
                      </NavLink>
                      <div className="Article_Title">Title:</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Outline" style={{ marginTop: "10px" }}>
              <div className="project-subheadings project-subtopic">
                <h4>Creation</h4>
              </div>
              <div className="project-subheadings project-subtopic">
                <h4>Adventure</h4>
              </div>
            </div>
          </div>
        </div>
        <Route
          path="/Projects/CharityProjects"
          exact
          component={CharityProject}
        />
        <Route
          path="/Project/CharityProject/ProjectMeetings/Presentation"
          exact
          component={ProjectPresentation}
        />
        <Route
          path="/Project/CharityProject/ProjectMeetings/Activities"
          exact
          component={ProjectActivities}
        />
      </Router>
    );
  }
}

export default ProjectMeetings;
