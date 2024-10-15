import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layouts/Navbar';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  // Fetching the projects from the database
  useEffect(() => {
    // Backend part: Fetch project list from the database
    // Example:
    // fetch('/api/projects')
    //   .then(response => response.json())
    //   .then(data => setProjects(data));

    // Mock data for now
    setProjects([
      { id: 1, title: 'Project Alpha' },
      { id: 2, title: 'Project Beta' },
      { id: 3, title: 'Project Gamma' },
    ]);
  }, []);

  return (
    <div>
        <Navbar />
    <div className="min-h-screen mt-8 p-8">
      {/* Project List Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4 mt-8">
          <h1 className="text-3xl font-bold text-[#025686]">Project List</h1>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 border-b border-gray-200">Sl. No</th>
                <th className="text-left py-2 px-4 border-b border-gray-200">Project Title</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{project.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectList;
