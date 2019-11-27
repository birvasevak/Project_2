import React, { Component } from "react";
import "./Header.css";
import "./Toolbar.css";
import Arrow_forward from "../../image/arrow-forward.png";
import Mobile_logo from "../../image/Logo-mobile.png";
import Desktop_logo from "../../image/desktop_logo.png";
import Add_child from "../../image/add-child-button-mobile.png";

class Toolbar extends Component {
  render() {
    return (
      <div className="child-select__dropdown-menu-wrapper">
        <a
          className="child-select__item child-select__item--dropdown selected-child"
          href="/"
        >
          <div className="child-select__profile">
            <div
              className="child-select__avatar"
              //   style="background-image: url('/site_media/upload/children/photo/b5afe4579435f4ecf017e341606b0e2e.jpg');"
              style={{ backgroundColor: "#ffaacc" }}
              alt="Gemma"
            ></div>
            <div className="child-select__info">
              <div className="child-select__name">Gemma</div>
              <div className="child-select__age">7 years, 7 months</div>
            </div>
          </div>
        </a>

        <a
          className="child-select__item child-select__item--dropdown selected-child"
          href="/"
        >
          <div className="child-select__profile">
            <div
              className="child-select__avatar"
              //   style="background-image: url('/site_media/upload/children/photo/b5afe4579435f4ecf017e341606b0e2e.jpg');"
              style={{ backgroundColor: "#ffaacc" }}
              alt="Gemma"
            ></div>
            <div className="child-select__info">
              <div className="child-select__name">Gemma</div>
              <div className="child-select__age">7 years, 7 months</div>
            </div>
          </div>
        </a>
        <a
          className="child-select__item child-select__item--dropdown "
          href="/"
        >
          <div className="child-select__profile">
            <div
              className="child-select__avatar"
              // style="background-image: url('/site_media/upload/children/photo/c2e90245825125460a2944e63bb6b373.jpg');"
              style={{ backgroundColor: "#ffaacc" }}
              alt="Foxin"
            ></div>
            <div className="child-select__info">
              <div className="child-select__name">Foxin</div>
              <div className="child-select__age">5 years, 5 months</div>
            </div>
          </div>
        </a>

        <a className="child-select__item child-select__item--dropdown" href="/">
          <div className="child-select__profile">
            <div
              className="child-select__avatar"
              // style="background-image: url('/site_media/upload/children/photo/6655c75773a1cb9a70110ec00315a984.jpg');"
              style={{ backgroundColor: "#ffaacc" }}
              alt="Jenny"
            ></div>
            <div className="child-select__info">
              <div className="child-select__name">Jenny</div>
              <div className="child-select__age">2 years, 7 months</div>
            </div>
          </div>
        </a>

        <a
          className="child-select__item child-select__item--dropdown child-select__item--add-child"
          href="/"
        >
          <div className="child-select__name child-select__name--add-child">
            <span className="add-child-web">Add new child</span>
            <span className="add-child-mobile">
              <img src={Add_child} />
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default Toolbar;
