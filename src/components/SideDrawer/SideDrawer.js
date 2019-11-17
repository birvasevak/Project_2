import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
  return (
    <nav className="side-drawer">
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
    </nav>
  )
}

export default sideDrawer