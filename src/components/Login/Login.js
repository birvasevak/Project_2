import React, { Component } from "react";
import "./Login.css";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Logo from "../../site_media/Logo_Horizontal_No_Tagline.png";
import Facebook_img from "../../site_media/facebook.png";
import Register from "../Register/Register";
import firebaseapi from "../../config/firebaseapi";
class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    // const { data, errors } = this.state;

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
              {/* <div class="login__line-center">OR</div> */}
              {/* <div class="login__line-right"></div> */}
            </div>
            <LoginForm />
            {/* <div class="login-form">
              <form
                class="login__form"
                name="form"
                method="POST"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="Aegb7wMJ3xjt52OHuAdxdkKr6P5S5BFt"
                />

                <div class="form-item">
                  <input
                    maxlength="254"
                    name="username"
                    type="text"
                    id="email"
                    placeholder="Email"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                  />
                  <ul class="errorlist">
                    <li></li>
                  </ul>
                </div>
                <div class="form-item">
                  <input
                    name="password"
                    type="password"
                    id="password"
                    // value={this.state.value}
                    placeholder="Password"
                    // onChange={this.handleChange}
                  />
                  <ul class="errorlist">
                    <li></li>
                  </ul>
                </div>

                <div class="login__field">
                  <button type="submit" name="form" class="submit-button">
                    Log In
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

class LoginForm extends React.Component {
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
