import React from 'react';
import './Home.css'; // Import the CSS file
import task from '../../assets/task.jpg'; // Correctly import the image

function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Metaverse</h1>
        <p>Manage your tasks efficiently and stay organized!</p>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
      <div className="image-section">
        <img src={task} alt="Descriptive Alt Text" />
      </div>
      </div>
        <section className="main-section">
          <h2>Your Task</h2>
          <p>
            Welcome to your personal task manager. Here, you can view your task list, track
            attendance, generate work reports, enroll in courses, and monitor your project progress.
          </p>
          <a href="#task" className="btn">Get Started</a>
        </section>
    </div>

  );
}

export default Home;
