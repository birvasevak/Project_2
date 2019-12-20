import React, { Component } from "react"
import './Friends_MainSide.css'
import MessageNotificatonPart from "../Message_Notification/Message_Notification";
import MobileProfileP1 from "../../Spotlight/Mobile_sideprofile/Mobile_sideprofileP1";


class FriendsMainSide extends Component {
    render() {
    return(
        <div className="Friends_RightSide">
            <div className="Image">
              <div className="Outline">
                <a href="/changeimage">
                    <div className="CoverImage">Import Cover Image</div>
                </a>
              </div>
            </div>
            <MobileProfileP1 />
            <div className="My_Contact">
              <div className="Outline">
                <div className="Title_header">
                    <div className="Parts_Text">My Friends</div>
                    <div className="Parts_Text">My Blessing</div>
                    <div className="Parts_Text">UCC</div>
                    <div className="Search_Bar">Search Bar here</div>
                </div>
                <div className="Contact_part">
                    <div className="Contact_icon_part">icon</div>
                    <div className="My_Contact_Friends"></div>
                    <div className="My_Contact_Blessing"></div>
                    <div className="My_Contact_UCC"></div>
                </div>

                
                <div className="Icons_part"></div>

                
              </div>
            </div>
        </div>
        )
    }
  }
  
  export default FriendsMainSide;