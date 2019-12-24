/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 * 'npm i --save react-stripe-checkout'
 * 'npm i --save stripe'
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Arrow_backward from "../../image/arrow-backward.png";
import "../Mobile_toolbar/Mobile_toolbar.css";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
/** @import CSS styles */
import "./Payment.css";

/**
 * @description Creates a payment portal
 * @class Payment
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {Payment}
 * @example <Payment />
 * pre-condition: all the imports
 * post-condition: returns the payment portal
 * @param null
 * @returns {Payment}
 * @todo connect to database to fetch payment amount and process the payment
 */
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
            <h1 style={{ marginLeft: "25px" }}>Payment</h1>
          </div>

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

/**
 * @description Creates a form for the payment portal
 * @class PaymentForm
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {PaymentForm}
 * @example <PaymentForm />
 * pre-condition: all the imports
 * post-condition: returns the form for the payment portal
 * @param null
 * @returns {PaymentForm}
 * @todo connect to database to fetch payment amount and process the payment
 */
class PaymentForm extends React.Component {
  render() {
    return (
      <form method="post" action="" id="checkout-form">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="K4bc8RzZD69sKo93NmbX1wS86aDJVaOg"
        />

        <div class="form-item">
          <label class="" for="card">
            Your payment amount
          </label>
          <div class="controls">
            <input type="number" id="amount" placeholder="$ 0.00" />
          </div>
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
              <input type="submit" value="Pay" class="submit-button" />
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default Payment;
