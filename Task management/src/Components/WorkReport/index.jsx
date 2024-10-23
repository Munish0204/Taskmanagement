import React, { useState } from "react";
import "./WorkReport.css";

const WorkReport = () => {
  const [reports, setReports] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddReport = (e) => {
    e.preventDefault();
    if (title && description) {
      setReports((prevReports) => [
        ...prevReports,
        { title, description },
      ]);
      setTitle('');
      setDescription('');
    }
  };

  const handleDescriptionChange = (e) => {
    const input = e.target.value;
    const wordCount = input.trim().split(/\s+/).length;
    if (wordCount <= 50) {
      setDescription(input);
    }
  };

  return (
    <div className="workreport-container">
      <h2>Work Reports</h2>
      <form onSubmit={handleAddReport} className="report-form">
        <input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Report Description (max 50 words)"
          value={description}
          onChange={handleDescriptionChange}
          required
          rows="5"
          className="description-textarea"
        />
        <p>{50 - description.trim().split(/\s+/).length} words remaining</p>
        <button type="submit">Add Report</button>
      </form>

      <h3>Submitted Reports</h3>
      <ul>
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <li key={index}>
              <strong>{report.title}</strong>: {report.description}
            </li>
          ))
        ) : (
          <li>No reports submitted yet.</li>
        )}
      </ul>
    </div>
  );
};

export default WorkReport;
