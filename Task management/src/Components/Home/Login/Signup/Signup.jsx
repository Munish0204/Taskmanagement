// src/components/Signup.jsx
import React from "react";
import "./Signup.css"; // Use the same CSS file for consistency

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button>Sign Up</button>
        <p style={{ marginTop: "20px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
