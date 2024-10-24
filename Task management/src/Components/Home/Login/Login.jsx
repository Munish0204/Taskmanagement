// src/components/Login.jsx
import React, { useState } from "react";
import "./login.css"; // Ensure you're using the same CSS for styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Example of basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Here you can add your authentication logic
    // For example, send the data to your server/API
    console.log("Logging in with:", { email, password });

    // Reset fields after submission
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
