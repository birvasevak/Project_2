import React, { Component } from "react";
import "./Projects.css";
import Arrow_backward from "../../image/arrow-backward.png";

class CharityProject extends React.Component {
  render() {
    return (
      //   <div>
      //     <h1>Charity Project</h1>
      //     </div>

      <div className="content">
        <div className="page" style={{ display: "block" }}>
          <div className="header__wrapper">
            <div className="header-menu-mobile">
              {/* <NavLink to={"/"}> */}
              <a href="/">
                <img src={Arrow_backward} alt="Backward Arrow" />
              </a>
              {/* </NavLink> */}
            </div>
            <div className="header-title">My Charity Projects</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharityProject;
