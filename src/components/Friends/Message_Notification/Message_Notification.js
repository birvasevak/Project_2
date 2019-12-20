import React, { Component } from "react"
import './Message_Notification.css'


class MessageNotificatonPart extends Component {
    render() {
    return(
        <div classNmae="Message_Notifictaion_position">
            <div className="Message_Outline">
                <div className="Message_icon"></div>
                <div className="Message_NotificationText">Messages</div>
            </div>
        </div>
        
        )
    }
}

export default MessageNotificatonPart;