import React, { useState } from "react";
import "./Profile.css";
import profilePic from "../../assets/Sharwesh.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Sarweshwar",
    email: "sarweshwardeivasihamani@gmail.com",
    domain: "FullStack",
    phone: "+91 6383073831",
    linkedin: "https://www.linkedin.com/in/sarweshwardeivasihamani/",
    github: "https://github.com/arunsarwesh",
  });

  const [formValues, setFormValues] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    setUser(formValues);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormValues(user);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="domain"
              value={formValues.domain}
              onChange={handleInputChange}
              placeholder="Domain"
            />
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <input
              type="url"
              name="linkedin"
              value={formValues.linkedin}
              onChange={handleInputChange}
              placeholder="LinkedIn URL"
            />
            <input
              type="url"
              name="github"
              value={formValues.github}
              onChange={handleInputChange}
              placeholder="GitHub URL"
            />
            <button onClick={handleSave} className="save-button">Save</button>
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Domain:</strong> {user.domain}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noopener noreferrer">{user.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noopener noreferrer">{user.github}</a></p>
            <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
