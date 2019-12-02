import React, { Component } from "react";
import "./Login.css";
import Logo from "../../site_media/Logo_Horizontal_No_Tagline.png";
import Facebook_img from "../../site_media/facebook.png";

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
                href="/accounts/social-auth/login/facebook/"
              >
                <img src={Facebook_img} alt="Facebook" class="hidden-phone" />
                Log in with Facebook
              </a>
            </div>
            <br></br>
            <div class="login__or-line">
              <div class="login__line-left"></div>
              <span class="login__line-center">OR</span>
              <div class="login__line-right"></div>
            </div>
            <div class="login-form">
              <form class="login__form" name="form" method="POST">
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
                    value=""
                    placeholder="Email"
                  />
                  <ul class="errorlist">
                    <li></li>
                  </ul>
                </div>
                <div class="form-item">
                  <input
                    name="password"
                    type="password"
                    value=""
                    placeholder="Password"
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
