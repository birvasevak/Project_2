import React, { Component } from "react";
// import "../../App.css";
import "./Main_View.css";

class MainView extends Component {
    render() {
        return (
            <div class="main-view">
                <div class="post">
                    <div class="user-icon">
                        <a href = "User">
                            <div class="user-image"></div>
                        </a>
                    </div>
                    <div class="user-enter">
                        <textarea title = "What's going on?" class="enter-default" placeholder="What's going on?"></textarea>
                        <input type="hidden" autoComplete="off" name="message_text"></input>
                    </div>
                </div>
                <div class="Line">
                    <div class="Block">
                        <a href ="UploadPhotos">
                            <div class="Photos-position">
                                <div class="Photos-Logo"></div>
                                <div class="Photos-text">Photos</div>
                            </div>
                        </a>  
                    </div>
                    <div class="Block">
                        <a href ="UploadPojects">
                            <div class="Projects-position">
                                <div class="Projects-Logo"></div>
                                <div class="Projects-text">Projects</div>
                            </div>
                        </a>  
                    </div>
                    <div class="Block">
                        <a href ="UploadFriends">
                            <div class="Friends-position">
                                <div class="Friends-Logo"></div>
                                <div class="Friends-text">Friends</div>
                            </div>
                        </a>  
                    </div>
                </div>
          </div>
        );
    }
}

export default MainView;