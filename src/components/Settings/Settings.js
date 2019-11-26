import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import settingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from "@material-ui/icons/Delete";
import Setting_icon from "../../image/settings.png";
import "./Settings.css";

class Settings extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={Setting_icon} alt="settings" className="setting-icon" />
          <IconButton aria-label="settings">
            <settingsIcon>
              {/* <img src={Setting_icon} alt="settings" className="setting-icon" /> */}
            </settingsIcon>
          </IconButton>
          {/* <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton> */}
        </a>
      </div>

      //   <a>
      //     <img src={Setting_icon} alt="settings" className="setting-icon" />
      //     <select id="dropdown">
      //       <img src={Setting_icon} alt="settings" className="setting-icon" />

      //       <option value="1">Account</option>
      //       <option value="2">Log Out</option>
      //     </select>
      //   </a>
    );
  }
}

export default Settings;
