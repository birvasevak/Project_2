// src/components/Header/index.js
import React from "react";
import { Button } from "react";
import "./Header.css";
import Settings from "../Settings/Settings";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Unicorn Charity Club
            </a>
          </div>
          <Settings />
        </div>
      </nav>
    );
  }
}
export default Header;
