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
import LoginForm from "./Login_Form";
/** @import CSS styles */
import "./Login.css";

/**
 * @description Creates the Login page of the website
 * @class Login
 * @extends React.Component
 * @type {Login}
 * @example <Login />
 * pre-condition: all the imports
 * post-condition: returns the Login page
 * @param null
 * @returns {Login}
 * @todo connect to database
 * */

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <div className="login-box">
          <a href="/">
            <div className="login-box__close-icon">x</div>
            <img className="login-box__logo" src={Logo} alt="logo" />
          </a>
          <p>
            Log in with your Facebook account and take advantage of your
            exclusive member benefits today.
          </p>
          <div className="login-box__title">Log In</div>
          <div className="login-box__content">
            <div class="login-box__fb">
              <a
                id="login_button"
                class="login-button"
                href="https://www.facebook.com/"
              >
                <img src={Facebook_img} alt="Facebook" class="hidden-phone" />
                Log in with Facebook
              </a>
            </div>
            <br></br>
            <div class="login__or-line">
              <div class="login__line-left"></div>
            </div>
            <LoginForm />
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
