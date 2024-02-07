import React from "react";
import "./style.scss";
import background from "../../../assets/background.jpg";
import avatar from "../../../assets/avatar.png";
import skill from "../../../assets/skill.png"

const ProfileCard = ({ currentUser }) => {
  return (
    <>
      <div className="user_profile_card">
      <div className="user_img">
        <img src={background} alt="background image" />
      </div>
      <div className="content">
        <img src={avatar} alt="profile picture" />
        <div className="user_info">
          <p className="user_name">{currentUser.name}</p>
          <p className="user_headline">
            working at Swiggy ||Java || HTML || CSS || Tailwind CSS||
            Javascript|| React || Figma || 100+ questions on hackerrank and 200+
            questions on leetcode
          </p>
          <div className="user_location">
            <span>Kolkata • West Bengal • India • </span>
            <span className="contact">Contact Info</span>
          </div>
        </div>
        <div className="user_experience">
          <p>Adamas University</p>
          <p>Geekster</p>
        </div>
      </div>
    </div>
    <div className="user_skills">
      <h3>Skills</h3>
      <div className="single_skill">
        <img src={skill} alt="skill" />
        <p>JS</p>
      </div>
      <hr />
      <div className="single_skill">
        <img src={skill} alt="skill" />
        <p>HTML</p>
      </div>
      <hr />
      <div className="single_skill">
        <img src={skill} alt="skill" />
        <p>CSS</p>
      </div>
    </div>
    </>
  );
};

export default ProfileCard;
