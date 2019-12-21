import React, { Component } from "react";
import Setting_icon from "../../image/settings.png";
import "./Settings.css";
import firebaseapi from "../../config/firebaseapi";
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
      <div className="header__settings">
        <div className="setting-icon">
          <img src={Setting_icon} alt="settings" />

          <div className="settings-dropdown">
            <a href="/" className="logout-link">
              <div className="settings-dropdown__item">My&nbsp;Account</div>
            </a>
            <a href="/" onClick={this.logout} className="logout-link">
              <div className="settings-dropdown__item">Logout</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
