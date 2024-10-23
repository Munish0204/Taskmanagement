import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Attendance from "./Components/Attendance"; 
import Home from "./Components/Home"; 
import WorkReport from "./Components/WorkReport"; 
import Courses from "./Components/Courses"; 
import Projects from "./Components/Projects"; 
import Profile from "./Components/Profile"; 
import Logout from "./Components/Logout/index"
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/workreport" element={<WorkReport />} /> 
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
