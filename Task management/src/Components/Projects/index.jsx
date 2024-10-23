import React, { useState } from 'react';
import './Project.css';

const Projects = () => {
  // State for managing project details
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectFile, setProjectFile] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Handle adding or editing a project
  const handleAddProject = (e) => {
    e.preventDefault();
    if (projectName.trim() !== '' && description.trim() !== '') {
      const newProject = { name: projectName, description, link: projectLink, file: projectFile };
      if (editIndex !== null) {
        // Edit existing project
        const updatedProjects = [...projects];
        updatedProjects[editIndex] = newProject;
        setProjects(updatedProjects);
        setEditIndex(null);
      } else {
        // Add new project
        setProjects([...projects, newProject]);
      }
      // Clear input fields
      setProjectName('');
      setDescription('');
      setProjectLink('');
      setProjectFile(null);
    }
  };

  // Handle deleting a project
  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Handle editing a project
  const handleEditProject = (index) => {
    const projectToEdit = projects[index];
    setProjectName(projectToEdit.name);
    setDescription(projectToEdit.description);
    setProjectLink(projectToEdit.link);
    setProjectFile(projectToEdit.file);
    setEditIndex(index);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setProjectFile(e.target.files[0]);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Project Link (URL)"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />
        <input
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit">{editIndex !== null ? 'Edit' : 'Add'} Project</button>
      </form>

      <h3>Project List</h3>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              {project.link && (
                <p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              )}
              {project.file && (
                <p>
                  {project.file.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(project.file)} alt="Project" width="100" />
                  ) : (
                    <video width="200" controls>
                      <source src={URL.createObjectURL(project.file)} type={project.file.type} />
                    </video>
                  )}
                </p>
              )}
              <button onClick={() => handleEditProject(index)}>Edit</button>
              <button onClick={() => handleDeleteProject(index)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No projects added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default Projects;
