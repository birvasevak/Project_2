import React, { Component } from "react";
import "./Login.css";
import Validator from "validator";
import Logo from "../../site_media/Logo_Horizontal_No_Tagline.png";
import Facebook_img from "../../site_media/facebook.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: { email: "", password: "" } };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  state = {
    data: {
      email: "",
      passowrd: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.passowrd) errors.passowrd = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

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
                href="/accounts/social-auth/login/facebook/"
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
            <div class="login-form">
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
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.value}
                    onChange={this.handleChange}
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
                    value={this.state.value}
                    placeholder="Password"
                    onChange={this.handleChange}
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
