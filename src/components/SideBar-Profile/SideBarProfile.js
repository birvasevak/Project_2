import React, { Component, useState, useEffect } from "react";

import "./SideBarProfile.css";
import firebaseapi from "../../config/firebaseapi";
function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebaseapi
      .firestore()
      .collection("users")
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(newData);
      });
  }, []);
  return data;
}
const SidebarProfile = () => {
  const data = UserData();

  return (
    <div class="sidebar-profile">
      {data.map(temp => (
        <div class="profile__wrapper" key={temp.id}>
          <div class="profile__info">
            <a href="M">
              <div class="child__avatar"></div>
            </a>

            <div class="profile__Detail">
              <a href="/children/update/352/" class="profile_Name">
                {temp.Child_Name}
              </a>
            </div>
            <div class="profile_Unicorn_Name">Unicorn Name</div>
            <div class="profile_blessingGroup">{temp.Blessing_Group}</div>
            <div class="profile_Color_rank">{temp.Color_Rank}</div>
          </div>
          <div class="Social-Impact">My Social Impact</div>
          <div class="Social_Impact_info">
            <div class="Project_amount">{temp.projects}</div>
            <div class="Profile_Total_Project">Total Project</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">{temp.volunteer_hours}</div>
            <div class="Profile_Total_Project">Total Volunteer Hours</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">${temp.funds_raised}</div>
            <div class="Profile_Total_Project">Total Funds Raised</div>
          </div>
          <div class="Social_Impact_info">
            <div class="Project_amount">{temp.people_reached}</div>
            <div class="Profile_Total_Project">Total People Reached</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarProfile;
