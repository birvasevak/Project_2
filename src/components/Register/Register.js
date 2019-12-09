import React, { Component } from "react";
import "./Register.css";
import "../Header/Header.css";
import "../Login/Login.css";
import Mobile_logo from "../../image/Logo-mobile.png";
import DesktopLogo from "../../site_media/Logo_Horizontal_No_Tagline.png";

class Register extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {/* <img src={Mobile_logo} alt="image" className="style" /> */}
          <div className="header__logo main">
            <a href="/">
              <img
                src={DesktopLogo}
                className="header__logo-desktop"
                alt="Unicorn Charity Club"
              />
              <img
                src={Mobile_logo}
                className="header__logo-mobile"
                alt="Unicorn Charity Club"
                style={{ width: "250px" }}
              />
            </a>
          </div>
        </header>
        <div class="header__toolbar not-logged-main">
          <div class="header__signin-buttons">
            <button class="header__login_button" href="/accounts/log-in/">
              Log in
            </button>
            {/* <button>Log In</button> */}
          </div>
        </div>

        <div class="title">
          <span>Let's get you started with Unicron Charity Club!!</span>
        </div>
        <RegisterForm />
      </div>
    );
  }
}
export default Register;

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", errors: [] };
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
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  submitLogin(e) {
    if (this.state.username == "") {
      this.showValidationErr("Username", "Username cannot be empty");
    }
    if (this.state.email == "") {
      this.showValidationErr("Email", "Email cannot be empty");
    } else if (this.state.password == "") {
      this.showValidationErr("Password", "Password cannot be empty");
    }
  }

  render() {
    let usernameErr = null,
      emailErr = null,
      passwordErr = null;
    for (let err of this.state.errors) {
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }
    return (
      <form
        class="register-form"
        name="form"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <section>
          <div class="form-item">
            <input
              name="username"
              type="text"
              id="username"
              placeholder="Username"
              value={this.state.value}
              onChange={this.onUsernameChange.bind(this)}
            />
          </div>
          <div class="form-item">
            <input
              // maxlength="254"
              name="username"
              type="text"
              id="email"
              placeholder="Email"
              value={this.state.value}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>

          <div class="form-item">
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.value}
              onChange={this.onPasswordChange.bind(this)}
            />
            {/* <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small> */}
          </div>
        </section>
      </form>
    );
  }
}
