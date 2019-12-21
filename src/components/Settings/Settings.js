import React, { Component } from "react";
import Setting_icon from "../../image/settings.png";
import "./Settings.css";
import firebaseapi from "../../config/firebaseapi";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "../Account/Account";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebaseapi.auth().signOut();
  }
  render() {
    return (
      <Router>
        <div className="header__settings">
          <div className="setting-icon">
            <img src={Setting_icon} alt="settings" />

            <div className="settings-dropdown">
              <NavLink to={"/Account"}>
                <a href="/" className="logout-link">
                  <div className="settings-dropdown__item">My&nbsp;Account</div>
                </a>
              </NavLink>
              <a href="/" onClick={this.logout} className="logout-link">
                <div className="settings-dropdown__item">Logout</div>
              </a>
            </div>
          </div>
          <Route path="/Account" exact component={Account} />
        </div>
      </Router>
    );
  }
}

export default Settings;
