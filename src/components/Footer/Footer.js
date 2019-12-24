/** @import modules
 * 'npm i --save react'
 */
import React, { Component } from "react";
/** @import CSS styles */
import "./Footer.css";

/**
 * @description creates the footer for the website (only for desktop version)
 * @class Footer
 * @extends React.Component
 * @type {Footer}
 * @example <Footer />
 * pre-condition: all the imports
 * post-condition: returns footer for desktop version
 * @param null
 * @returns {Footer}
 *
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__gradient"> </div>
        <div className="footer__unicornclouds"></div>

        <div className="footer__content">
          <div className="footer__inner">
            <div className="footer__column">
              <h5>Discover</h5>
              <ul className="footer-links">
                <li>
                  <a href="/bee-well/" className="footer__link">
                    What is Bee Well?
                  </a>
                </li>
                <li>
                  <a href="http://get.playfulbee.com/" className="footer__link">
                    What is Bee Well?
                  </a>
                </li>
                <li>
                  <a href="/brain-science/" className="footer__link">
                    Brain Science
                  </a>
                </li>
                <li>
                  <a href="/benefits-of-play/" className="footer__link">
                    Benefits of Play
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h5>Company</h5>
              <ul className="footer-links">
                <li>
                  <a href="/about-us/" className="footer__link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/our-values/" className="footer__link">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="/terms/" className="footer__link">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="/privacy/" className="footer__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h5>Connect with Us</h5>
              <ul className="margin-top-normal footer-links">
                <li>
                  <a
                    href="https://www.facebook.com/playfulbee"
                    rel="nofollow"
                    target="_blank"
                    rel="nofollow"
                    className="footer__link"
                    id="button-social-facebook"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/playful_bee"
                    rel="nofollow"
                    target="_blank"
                    rel="nofollow"
                    className="footer__link"
                    id="button-social-twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href="https://plus.google.com/100135277572176156026"
                    target="_blank"
                    rel="publisher"
                    id="button-social-gplus"
                  >
                    Google+
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href="https://www.pinterest.com/playfulbee"
                    target="_blank"
                    rel="nofollow"
                    id="button-social-pinterest"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href="https://instagram.com/playful_bee/"
                    target="_blank"
                    rel="nofollow"
                    id="button-social-pinterest"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/"
                    className="footer__link"
                    id="button-social-email"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__disclaimer">
              Playful Bee provides information of a general nature and is
              designed for educational purposes only. Playful Bee does not
              provide medical advice, diagnosis or treatment. If you have any
              concerns about your child&#39;s health or development, you should
              always consult with a physician or other healthcare professional.
              Please review the Terms of Use before using this site. Your use of
              the site indicates your agreement to be bound by the Terms of Use.
            </div>
            <div className="footer__copyright">
              ALL RIGHTS RESERVED
              Copyright&nbsp;©&nbsp;2014-2019&nbsp;Babee&nbsp;Play&nbsp;Co.
              dba&nbsp;Playful&nbsp;Bee.
              <br />
              Artwork and images by various istockphoto / Getty artists and
              Playful Bee.
              <br />
              Before accessing this site, you must agree to our{" "}
              <a href="/terms/" target="_blank">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy/" target="_blank">
                Privacy Policy
              </a>
              . Please read them.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
