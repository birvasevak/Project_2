import React, { Component } from "react";
import './Mobile_sideprofileP3.css'

class MobileProfileP3 extends Component {
    render() {
    return(
        <div>
            <div className="M_Social_Impact">My Social Impact</div>
              <div className="M_Social_section">
                <div class = "M_Social_Impact_info">
                  <div class="M_Project_amount">4</div>
                  <div class="M_Profile_Total_Project">Total Project</div>
                </div>
                <div class = "M_Social_Impact_info">
                  <div class="M_Project_amount">122</div>
                  <div class="M_Profile_Total_Project">Total Volunteer Hours</div>
                </div>
                <div class = "M_Social_Impact_info">
                  <div class="M_Project_amount">$829</div>
                  <div class="M_Profile_Total_Project">Total Funds Raised</div>
                </div>
                <div class = "M_Social_Impact_info">
                  <div class="M_Project_amount">798</div>
                  <div class="M_Profile_Total_Project">Total People Reached</div>
                </div>
              </div>
        </div>    
        );
    }
  }
  
  export default MobileProfileP3;