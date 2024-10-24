import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="profile-page">
      {/* About Section */}
      <div className="about-section card">
        <h2>About Me</h2>
        <p>
          Hello! I'm Sarweshwar, a passionate developer with a love for creating innovative
          solutions and developing modern web applications. I have expertise in full-stack
          development and always strive to learn new technologies and improve my skills.
        </p>
      </div>

      {/* Profile Section */}
      <div className="profile-section card">
        <img 
          src="../../assets/Sharwesh.jpg" 
          alt="Profile" 
          className="profile-picture"
        />
        <h2>Sarweshwar</h2>
        <p>Full-Stack Developer</p>

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Email:</strong> sarweshwar@example.com</p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/sarweshwar" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/sarweshwar" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
