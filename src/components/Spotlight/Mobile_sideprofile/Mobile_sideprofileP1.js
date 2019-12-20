import React, { Component } from "react";

import './Mobile_sideprofileP1.css'

class MobileProfileP1 extends Component {
    render() {
    return(
        <div>
            <div className="M_icon_position">
                <div className="user_M_icon"></div>
            </div>
          <div className="user_M_Detail">
            <div className="user_M_UnicornName">Unicorn Name</div>
            <div className="user_M_blessingGroup">Blessing Group</div>
            <div className="user_M_HornRank">Color Horn Rank</div>
          </div>
        </div>
        );
    }
  }
  
  export default MobileProfileP1;