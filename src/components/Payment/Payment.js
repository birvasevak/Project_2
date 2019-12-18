import React, { Component } from "react";
import Arrow_backward from "../../image/arrow-backward.png";
import "./Payment.css";
import "../Mobile_toolbar/Mobile_toolbar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
import StripeCheckout from "react-stripe-checkout";
// import { Stripe } from "stripe";

class Payment extends React.Component {
  render() {
    return (
      <Router>
        <div
          className="account-menu"
          id="container"
          style={{ display: "block" }}
        >
          <div className="header__wrapper">
            <div className="header__logo">
              <div className="header-menu-mobile">
                <NavLink to={"/Menu"}>
                  <a href="/Menu">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="header-title">Payment</div>
          </div>
          <div className="account-menu__content">
            {/* <div className="account-menu__item">
              <a href="/"> Address</a>
            </div> */}
            <h1>Payment</h1>
          </div>
          {/* </div> */}
          {/* <StripeCheckout />
          <form action="/charge" method="post" id="payment-form">
            <div class="form-row">
              <label for="card-element">Credit or debit card</label>
              <div id="card-element">
              </div>

              <div id="card-errors" role="alert"></div>
            </div>

            <button>Submit Payment</button>
          </form> */}
          <div className="pre-wrapper">
            <div className="form-items">
              <div>
                <PaymentForm />
              </div>
            </div>
          </div>
          <Route path="/Menu" exact component={Mobile_toolbar} />
        </div>
      </Router>
    );
  }
}

class PaymentForm extends React.Component {
  render() {
    return (
      <form method="post" action="" id="checkout-form">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="K4bc8RzZD69sKo93NmbX1wS86aDJVaOg"
        />

        <div class="payment-errors alert alert-error" style={{ color: "red" }}>
          The card number is not a valid credit card number.
        </div>
        <div class="form-item">
          <label>Please, enter your credit card details:</label>
          <br />
          <div class="pre-box__cc">
            <label class="" for="card">
              Credit Card Number
            </label>
            <div class="controls">
              <input
                type="text"
                id="card"
                placeholder="•••• •••• •••• ••••"
                class="visa identified"
                data-stripe="number"
              />
            </div>
          </div>
        </div>
        <div class="form-item">
          <div class="pre-box__cc">
            <label class="" for="exp_date">
              Expiration date (MM/YYYY)
            </label>
            <input type="text" id="exp_date" placeholder="•• / ••••" class="" />
          </div>
        </div>
        <div class="form-item">
          <div class="pre-box__cc">
            <label class="" for="cvc">
              CVC/CVV
              <span
                data-tooltip=""
                aria-haspopup="true"
                class="has-tip"
                data-selector="tooltip-k4500ptk0"
                aria-describedby="tooltip-k4500ptk0"
                title=""
              >
                (?)
              </span>
            </label>
            <div class="controls">
              <input
                type="text"
                id="cvc"
                size="4"
                placeholder="•••"
                class=""
                data-stripe="cvc"
              />
            </div>
          </div>
        </div>
        <div class="">
          <div class="">
            <a>
              <input type="submit" value="Change" class="submit-button" />
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default Payment;
