import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  FormControl,
  DatePicker
} from "react-bootstrap";
import "./MyChildren.css";
import Arrow_backward from "../../image/arrow-backward.png";
import "../Account/Account.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyChildren from "./MyChildren";
import Child_avatar from "../../site_media/Child Settings Menu_Default Avatar_3b9f9d.png";

class ChildName extends React.Component {
  render() {
    return (
      <Router>
        <Form>
          <div className="menu" id="container" style={{ display: "block" }}>
            <div className="header__wrapper">
              <div className="header__logo">
                <div className="header-menu-mobile">
                  <NavLink to={"/Menu/MyChildren"}>
                    <a href="/Menu">
                      <img src={Arrow_backward} alt="Backward Arrow" />
                    </a>
                  </NavLink>
                </div>
              </div>
              <div className="header-title">Child's Name</div>
            </div>
            <div className="avatar">
              <img src={Child_avatar} alt="upload photo" />
              <a href="/">Upload Photo</a>
            </div>
            <ChildForm />
          </div>

          <Route path="/Menu/MyChildren" exact component={MyChildren} />
        </Form>
      </Router>
    );
  }
}

class ChildForm extends React.Component {
  render() {
    return (
      <form>
        <div className="child-form">
          <label>Name:</label>
          <input type="text" name="name" placeholder="First Name Last Name" />
        </div>
        <div className="child-form">
          <label>Date of Birth: </label>
          <input
            type="date"
            name="date"
            placeholder="12 May 2012"
            value="12 May 2019"
          />
        </div>
        <div className="child-form">
          <label>School:</label>
          <input type="text" name="school" placeholder="Name" />
        </div>
        <div className="child-form" style={{ marginBottom: "20px" }}>
          <label>School Grade: </label>

          <select select id="lang" onChange={this.state} value={this.state}>
            <option value="Select School Grade">Select School Grade</option>
            <option value="Kindergarden">Kindergarden</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
          </select>
        </div>
        <hr className="form-separator" />
      </form>
    );
  }
}

export default ChildName;
