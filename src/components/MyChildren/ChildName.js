/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 * 'npm i --save react-bootstrap'
 */
import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  FormControl,
  DatePicker
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyChildren from "./MyChildren";
import Arrow_backward from "../../image/arrow-backward.png";
import Child_avatar from "../../site_media/Child Settings Menu_Default Avatar_3b9f9d.png";
import Impact_emblem from "../../site_media/Child Profile_Emblem Default_3b9f9d.png";
/** @import CSS styles */
import "../Account/Account.css";
import "./MyChildren.css";

/**
 * @description Creates a page with all details of individual child
 * @class ChildName
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {ChildName}
 * @example <ChildName />
 * pre-condition: all the imports
 * post-condition: returns a page with all details of individual child
 * @param null
 * @returns {ChildName}
 * @todo connect to database to fetch and upload children details
 */
class ChildName extends React.Component {
  render() {
    return (
      <Router>
        <Form>
          <div
            className="menu"
            id="container"
            style={{
              display: "block"
            }}
          >
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

              <div className="header-title">
                Child's Name
                <div className="header-link">Save</div>
              </div>
            </div>
            <div className="avatar">
              <img src={Child_avatar} alt="upload photo" />
              <a href="/">Upload Photo</a>
            </div>
            <ChildForm />

            <div className="avatar">
              <img src={Impact_emblem} alt="upload photo" />
              <a href="/">Upload Photo</a>
            </div>
          </div>
          <Route path="/Menu/MyChildren" exact component={MyChildren} />
        </Form>
      </Router>
    );
  }
}

/**
 * @description Creates a form for all details of individual child
 * @class ChildForm
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {ChildForm}
 * @example <ChildForm />
 * pre-condition: all the imports
 * post-condition: returns a form for all details of individual child
 * @param null
 * @returns {ChildForm}
 * @todo connect to database to fetch and upload children details
 */
class ChildForm extends React.Component {
  render() {
    return (
      <form>
        <div className="form-wrapper">
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
              value={this.value}
              onChange={this.value}
            />
          </div>
          <div className="child-form">
            <label>School:</label>
            <input type="text" name="school" placeholder="School Name" />
          </div>
          <div className="child-form" style={{ marginBottom: "20px" }}>
            <label>School Grade: </label>

            <select
              placeholder="Select School Grade"
              onChange={this.state}
              value={this.state}
              className="child-form-select"
            >
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
        </div>
        <div className="blessing-form">
          <div className="blessing-name">Blessing: Helpful Hearts</div>
          <div className="blessing-tagline">Color Horn Rand: Red</div>

          <div className="blessing-info">
            <label>Unicorn Name: </label>
            <input type="text" name="Unicorn name" placeholder="Unicorn Name" />
            <label>Unicorn Powers: </label>
            <textarea
              name="Unicorn Powers"
              placeholder="What powers help you make a positive impact on the workd?"
            />
            <label>Imacpt Emblem</label>
          </div>
        </div>
      </form>
    );
  }
}

export default ChildName;
