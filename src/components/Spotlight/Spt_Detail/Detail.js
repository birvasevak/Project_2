import React, { Component } from "react"
import MobileProfileP1 from "../Mobile_sideprofile/Mobile_sideprofileP1";
import MobileProfileP2 from "../Mobile_sideprofile/Mobile_sideprofileP2";
import MobileProfileP3 from "../Mobile_sideprofile/Mobile_sideprofileP3";
import './Detail.css'

class SptRightSide extends Component {
    render() {
    return(
        <div className="RightSide">
            <div className="Image">
              <div className="Outline">
                <a href="/changeimage">
                    <div className="CoverImage">Import Cover Image</div>
                </a>
              </div>
            </div>
            <MobileProfileP1 />
            <MobileProfileP2 />
            <div className="ImpactEmblem">
              <div className="Outline">
                  <div className="Title">Impact Emblem</div>
                  <a href="//">
                    <div className="Edit_part"></div>
                  </a>
                  <div className="Emblem"></div>
                  <div className="sub_Title">Unicorn Powers</div>
                  <div className="BodyText">unicorn power detail is there.</div>
              </div>
            </div>
            <MobileProfileP3 />
            <div className="Badges">
              <div className="Outline">
                  <div className="Title">Badges</div>
                  <a href="//">
                      <div className="ShowMore"></div>
                  </a>
                  <div className="Badges_position">
                      <div className="Badges_section">
                        <div className="Badges_icons"></div>
                        <div className="Badges_icons"></div>
                        <div className="Badges_icons"></div>
                        <div className="Badges_icons"></div>
                        <div className="Badges_icons"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="Repo_Project">
                <div className="Outline">
                    <div className="Title">Project Report</div>
                    <a href="//">
                      <div className="ShowMore"></div>
                    </a>
                    <div className="Project_position">
                      <div className="Project_section">
                        <div className="Spt_project">
                          <div className="Project_icons"></div>
                          <div className="small-text">Charity Project Title</div>
                        </div>
                        <div className="Spt_project">
                          <div className="Project_icons"></div>
                          <div className="small-text">Charity Project Title</div>
                        </div>
                        <div className="Spt_project">
                          <div className="Project_icons"></div>
                          <div className="small-text">Charity Project Title</div>
                        </div>
                        
                      </div>
                    </div>
                </div>
            </div>
            <div className="Articles">
                <div className="Outline">
                    <div className="Title">Published Articles</div>
                    <a href="//">
                      <div className="ShowMore"></div>
                    </a>
                    <div className="Articles_position">
                      <div className="Articles_section">
                        <div className="Spt_articles">
                          <div className="Articles_icons"></div>
                          <div className="Article_text">
                            <div className="Article_Title_detail">Article Title</div>
                            <div className="Article_Published_Date">Published Date</div>
                          </div>
                        </div>
                        <div className="Spt_articles">
                          <div className="Articles_icons"></div>
                          <div className="Article_text">
                            <div className="Article_Title_detail">Article Title</div>
                            <div className="Article_Published_Date">Published Date</div>
                          </div>
                        </div>
                        <div className="Spt_articles">
                          <div className="Articles_icons"></div>
                          <div className="Article_text">
                            <div className="Article_Title_detail">Article Title</div>
                            <div className="Article_Published_Date">Published Date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SptRightSide;