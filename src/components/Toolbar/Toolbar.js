import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton/>
      </div>
      <div />
      <div className="toolbar_logo">
        <a href="/">Unicorn Chairty Club</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
        <li>
          <a href="/">My Account</a>
        </li>
        <li>
          <a href="/">My Children</a>
        </li>
        <li>
          <a href="/">Payments</a>
        </li>
        <li>
          <a href="/">Terms and Conditions</a>
        </li>
        <li>
          <a href="/">Security and Privacy</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar