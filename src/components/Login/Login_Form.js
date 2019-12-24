/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 * 'npm i --save firebase'
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Logo from "../../site_media/Logo_Horizontal_No_Tagline.png";
import Facebook_img from "../../site_media/facebook.png";
import Register from "../Register/Register";
import firebaseapi from "../../config/firebaseapi";
/** @import CSS styles */
import "./Login.css";

/**
 * @description Creates the login form for the login page
 * @class Login_Form
 * @extends React.Component
 * @type {Login_Form}
 * @example <Login_Form />
 * pre-condition: all the imports
 * post-condition: returns the login form
 * @param null
 * @exports {Login_Form}
 * @todo connect to database for individual user
 */

/**
 * @function constructor
 * @param {props} props
 * @returns {props}
 */
/**
 * @function handleChange
 * @param {element} e
 * @returns {e} changes the value of the element
 */

/**
 * @function login
 * @param {element} e
 * @description checks for authentication and logs in the user
 * @returns {boolean} returns true if the login credentials are correct
 */

/**
 * @function getCurrentUID
 * @param null
 * @description gets the user ID
 * @returns {uid} returns current user ID usinf firebaseapi
 */

/**
 * @function showValidationErr
 * @param {element} elm
 * @param {string} msg
 * @description shows validatin errors
 * @returns {msg} returns error message for invalidation
 *
 */

/**
 * @function clearValidationErr
 * @param {element} elm
 * @description clears validation error for refreshed page
 * @returns {string} error
 */

/**
 * @function onEmailChange
 * @param {element} e
 * @description changes the content of email ID to user input
 * @returns {element}
 */

/**
 * @function onPasswordChange
 * @param {element} e
 * @description changes the content of password to user input
 * @returns {element}
 */

/**
 * @function submitLogin
 * @param {element} e
 * @description submits the login page to check for validation
 * @returns {element}
 */

class Login_Form extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { email: "", password: "", errors: [] };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebaseapi
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }
  getCurrentUID() {
    return firebaseapi.auth().currentUser.uid;
  }
  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("email");
  }

  submitLogin(e) {
    if (this.state.email === "") {
      this.showValidationErr("Email", "Email cannot be empty");
    } else if (this.state.password === "") {
      this.showValidationErr("Password", "Password cannot be empty");
    }
  }

  render() {
    let emailErr = null,
      passwordErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "email") {
        emailErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
    }

    return (
      <div className="login-form">
        <form className="login__form" name="form" method="POST">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="Aegb7wMJ3xjt52OHuAdxdkKr6P5S5BFt"
          />

          <div class="form-item">
            <input
              name="username"
              id="email"
              placeholder="Email"
              input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
            />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
            <ul class="errorlist">
              <li></li>
            </ul>
          </div>
          <div class="form-item">
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              input
              value={this.state.password}
              onChange={this.handleChange}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
            <ul class="errorlist">
              <li></li>
            </ul>
          </div>

          <div class="login__field">
            <button
              type="button"
              onClick={this.login}
              className="submit-button"
            >
              Log In
            </button>
            <Router>
              <Route path="/Register" component={Register} />
            </Router>

            <NavLink to="/Register">
              <button type="button" className="submit-button">
                Don't have an account?{" "}
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default Login_Form;
