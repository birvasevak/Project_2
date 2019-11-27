import React, { Component } from "react";
// import "../../App.css";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="header__nav" role="navigation">
        <ul className="nav__list">
          <li className="nav__item  nav__item--active">
            <a href="L" className="nav__link">
              {" "}
              <div className="nav__icon--projects"></div>
              <div className="nav__label">Projects</div>
            </a>
          </li>
          <li className="nav__item ">
            <a href="L" className="nav__link">
              {" "}
              <div className="nav__icon--spotlight"></div>
              <div className="nav__label">Spotlight</div>
            </a>
          </li>
          <li className="nav__item ">
            <a href="L" className="nav__link">
              {" "}
              <div className="nav__icon--homepage"></div>
              <div className="nav__label"></div>
            </a>
          </li>
          <li className="nav__item ">
            <a href="L" className="nav__link">
              {" "}
              <div className="nav__icon--friends"></div>
              <div className="nav__label">Friends</div>
            </a>
          </li>
          <li className="nav__item ">
            <a href="L" className="nav__link">
              {" "}
              <div className="nav__icon--yearbook"></div>
              <div className="nav__label">Yearbook</div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
