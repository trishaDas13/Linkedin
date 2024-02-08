import React, { useState } from "react";
import { editProfile } from "../../../api/FireStoreAPI";
import "./style.scss";

const ProfileEdit = ({ currentUser, onEdit }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  //todo: create a object of info
  const getInput = (e) => {
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  //todo: update data from firestore
  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profileEdit">
      <div className="formNav">
        <h3>Edit Intro</h3>
        <button onClick={onEdit}><i class="fa-regular fa-circle-xmark"></i></button>
      </div>
      <p>* indicates required</p>
      <form action="">
        {/* personal details  */}
        <div className="personal_details">
          <h3>Personal Details</h3>
          <div className="name1">
            <label htmlFor="username"> Name:* </label>
            <input
              onChange={getInput}
              name="name"
              type="text"
              placeholder="John Doe"
              value={editInputs.name}
              required
            />
          </div>
          <div className="name1">
            <label htmlFor="username">Additional Name: </label>
            <input
              onChange={getInput}
              name="aname"
              type="text"
              placeholder="Joe"
              value={editInputs.aname}
            />
          </div>
          <div className="name1">
            <label htmlFor="username">Headline:* </label>
            <input onChange={getInput} 
                name="headline" 
                type="text" 
                value={editInputs.headline}
                required
             />
          </div>
          <div className="name1">
            <label htmlFor="username">About: </label>
            <textarea
              cols="30"
              rows="10"
              onChange={getInput}
              name="about"
              value={editInputs.about}
              maxLength={500}
            ></textarea>
          </div>
        </div>
        {/* Skill */}
        <div className="skill ">
          <h3>Skills*</h3>
          <div className="skillArea">
            <div className="skill_item">
              <input
                onChange={getInput}
                name="skill1"
                type="text"
                placeholder="1. Javascript*"
                value={editInputs.skill1}
                required
              />
              <input
              
                onChange={getInput}
                name="skill2"
                type="text"
                placeholder="2. React*"
                value={editInputs.skill2}
                required
              />
            </div>
            <div className="skill_item">
              <input
              
                onChange={getInput}
                name="skill3"
                type="text"
                placeholder="3. Problem Solving*"
                value={editInputs.skill3}
                required
              />
              <input
              
                onChange={getInput}
                name="skill4"
                type="text"
                placeholder="4. Teamwork*"
                value={editInputs.skill4}
                required
              />
            </div>
          </div>
        </div>
        {/* Current Position  */}
        <div className="personal_details">
          <h3>Current Position</h3>
          <div className="name1">
            <label htmlFor="username">Industry Name:* </label>
            <input
              onChange={getInput}
              name="industry"
              type="text"
              required
              placeholder="Apple, Google etc...."
              value={editInputs.industry}
            />
          </div>
          <div className="name1">
            <label htmlFor="username">Working Tenure:* </label>
            <input
              onChange={getInput}
              name="year"
              type="text"
              required
              placeholder="5 years"
              value={editInputs.year}
            />
          </div>
        </div>
        {/* Education Background  */}
        <div className="personal_details">
          <h3>Education Background</h3>
          <div className="name1">
            <label htmlFor="username">University Name:* </label>
            <input
              onChange={getInput}
              name="university"
              type="text"
              required
              placeholder="ABC university"
              value={editInputs.university}
            />
          </div>
          <div className="name1">
            <label htmlFor="username">Passing Year:* </label>
            <input
              onChange={getInput}
              name="pyear"
              type="text"
              required
              placeholder="1998"
              value={editInputs.pyear}
            />
          </div>
        </div>
        {/* Location  */}
        <div className="personal_details">
          <h3>Location</h3>
          <div className="name1">
            <label htmlFor="username">Country:* </label>
            <input
              onChange={getInput}
              name="country"
              type="text"
              required
              placeholder="India*"
              value={editInputs.country}
            />
          </div>
          <div className="name1">
            <label htmlFor="username">City:* </label>
            <input
              onChange={getInput}
              name="city"
              type="text"
              required
              placeholder="Kolkata*"
              value={editInputs.city}
            />
          </div>
          <div className="name1">
            <label htmlFor="username">State:* </label>
            <input
              onChange={getInput}
              name="state"
              type="text"
              required
              placeholder="West Bengal*"
              value={editInputs.state}
            />
          </div>
        </div>
        {/* contact info  */}
        <div className="skill">
          <h3>Contact Information</h3>
          <div className="skillArea">
            <div className="skill_item">
              <input
                onChange={getInput}
                name="contact1"
                type="text"
                placeholder="Linked in"
                value={editInputs.contact1}
              />
              <input
                onChange={getInput}
                name="contact2"
                type="text"
                placeholder="Github"
                value={editInputs.contact2}
              />
            </div>
            <div className="skill_item">
              <input
                onChange={getInput}
                name="contact3"
                type="text"
                placeholder="Instagram"
                value={editInputs.contact3}
              />
              <input
                onChange={getInput}
                name="contact4"
                type="text"
                placeholder="Twitter"
                value={editInputs.contact4}
              />
            </div>
          </div>
        </div>
        <button onClick={updateProfileData} className="saveForm">Save</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
