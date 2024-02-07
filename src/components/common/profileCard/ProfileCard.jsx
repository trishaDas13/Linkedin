import React, { useState, useMemo } from "react";
import "./style.scss";
import background from "../../../assets/background.jpg";
import avatar from "../../../assets/avatar.png";
import skill from "../../../assets/skill.png";
import PostCard from "../postCard/PostCard";
import {
  getSingleUser,
  getSingleStatus,
  getStatus,
} from "../../../api/FireStoreAPI";
import { useLocation } from "react-router-dom";

const ProfileCard = ({ currentUser, onEdit }) => {
  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const location = useLocation();

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  return (
    <>
      <div className="user_profile_card">
        <div className="user_img">
          <img src={background} alt="background image" />
          <i className="fa-regular fa-pen-to-square" onClick={onEdit}></i>
        </div>
        <div className="content">
          <img src={avatar} alt="profile picture" />
          <div className="user_info">
            <p className="user_name">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </p>
            <p className="user_headline">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <div className="user_location">
              <span>
                {Object.values(currentProfile).length === 0
                  ? currentUser.city
                  : currentProfile?.city}{" "}
                •{" "}
                {Object.values(currentProfile).length === 0
                  ? currentUser.state
                  : currentProfile?.state}{" "}
                •{" "}
                {Object.values(currentProfile).length === 0
                  ? currentUser.country
                  : currentProfile?.country}{" "}
                •{" "}
              </span>
              <span className="contact">Contact Info</span>
            </div>
          </div>
          <div className="user_experience">
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.university
                : currentProfile?.university}{" "}
              (
              {Object.values(currentProfile).length === 0
                ? currentUser.pyear
                : currentProfile?.pyear}
              )
            </p>
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.industry
                : currentProfile?.industry}
              (
              {Object.values(currentProfile).length === 0
                ? currentUser.year
                : currentProfile?.year}
              )
            </p>
          </div>
        </div>
      </div>
      <div className="user_about">
        <h2>About</h2>
        <i className="fa-regular fa-pen-to-square" onClick={onEdit}></i>
        <p>
        {Object.values(currentProfile).length === 0
          ? currentUser.about
          : currentProfile?.about}
        </p>
      </div>
      <div className="user_skills">
        <h2>Skills</h2>
        <i className="fa-regular fa-pen-to-square" onClick={onEdit}></i>
        <div className="single_skill">
          <img src={skill} alt="skill" />
          <p>
            {Object.values(currentProfile).length === 0
              ? currentUser.skill1
              : currentProfile?.skill1}
          </p>
        </div>
        <hr />
        <div className="single_skill">
          <img src={skill} alt="skill" />
          <p>
            {Object.values(currentProfile).length === 0
              ? currentUser.skill2
              : currentProfile?.skill2}
          </p>
        </div>
        <hr />
        <div className="single_skill">
          <img src={skill} alt="skill" />
          <p>
            {Object.values(currentProfile).length === 0
              ? currentUser.skill3
              : currentProfile?.skill3}
          </p>
        </div>
        <hr />
        <div className="single_skill">
          <img src={skill} alt="skill" />
          <p>
            {Object.values(currentProfile).length === 0
              ? currentUser.skill4
              : currentProfile?.skill4}
          </p>
        </div>
      </div>
      <div className="user_feed">
        <h2>Activity</h2>
        <div className="feed">
        {allStatuses
          .filter((item) => {
            return item.userEmail === localStorage.getItem("userEmail");
          })
          .map((posts) => {
            return (
              <div key={posts.id} className="user_post_holder">
                <PostCard posts={posts} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
