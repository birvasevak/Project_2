import React, { Component } from "react"
import './Yearbook_MainSide.css'
import MobileProfileP1 from "../../Spotlight/Mobile_sideprofile/Mobile_sideprofileP1";


class YearbookMainSide extends Component {
    render() {
    return(
        <div className="Yearbook_RightSide">
            <div className="Image">
              <div className="Outline">
                <a href="/changeimage">
                    <div className="CoverImage">Import Cover Image</div>
                </a>
              </div>
            </div>
            <MobileProfileP1 />
            <div className="My_Yearbook">
              <div className="Outline">
                <div className="Title_header">
                    <div className="Parts_Text">My Friends</div>
                    <div className="Parts_Text">My Blessing</div>
                    <div className="Parts_Text">UCC</div>
                </div>
              </div>
            </div>
        </div>
        )
    }
}
  
export default YearbookMainSide;