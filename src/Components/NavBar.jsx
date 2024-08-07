import React, { useState } from 'react';

// Navbar Component
const Navbar = ({ toggleSideWindow }) => {
  return (
    <nav className="w-screen p-4 bg-red-800 shadow-md ">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-semibold text-white cursor-pointer" onClick={toggleSideWindow}>
          ABC
        </div>
        <div className="space-x-4">
          <a href="#search" className="text-white hover:text-gray-400">Search</a>
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          </div>
      </div>
    </nav>
  );
};

// Side Window Component
const SideWindow = ({ isVisible, toggleSideWindow }) => {
  const [isProjectDropdownVisible, setProjectDropdownVisible] = useState(false);
  const [visibleTaskDropdown, setVisibleTaskDropdown] = useState(null);

  const toggleProjectDropdown = () => {
    setProjectDropdownVisible(!isProjectDropdownVisible);
  };

  const toggleTaskDropdown = (projectIndex) => {
    setVisibleTaskDropdown(visibleTaskDropdown === projectIndex ? null : projectIndex);
  };

  const projects = [
    { name: 'Project 1', tasks: ['Task 1.1', 'Task 1.2', 'Task 1.3'] },
    { name: 'Project 2', tasks: ['Task 2.1', 'Task 2.2', 'Task 2.3'] },
    { name: 'Project 3', tasks: ['Task 3.1', 'Task 3.2', 'Task 3.3'] },
  ];

  return (
    <div className={`fixed top-0 left-0 w-64 bg-white shadow-md h-full transition-transform transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <button onClick={toggleSideWindow} className="p-2 mb-4 text-white bg-red-800">ABC</button>
        <ul>
          <li className="mb-2 text-lg font-bold cursor-pointe left-0r" onClick={toggleProjectDropdown}>
            Project
            {isProjectDropdownVisible && (
              <ul className="mt-2 ml-4 list-disc">
                {projects.map((project, index) => (
                  <li key={index} className="mb-1 text-sm font-normal cursor-pointer" onClick={() => toggleTaskDropdown(index)}>
                    {project.name}
                    {visibleTaskDropdown === index && (
                      <ul className="mt-2 ml-4 list-disc">
                        {project.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="mb-1 text-sm font-normal">{task}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mb-2 text-lg font-bold">Calendar</li>
          <li className="mb-2 text-lg font-bold">Task</li>
        </ul>
      </div>
    </div>
  );
};


// Sidebar Component
const Sidebar = ({ isVisible }) => {
  return (
    <div className={`fixed top-16 left-0 w-64 bg-gray-100 shadow-md h-full transition-transform transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h2 className="mb-4 text-lg font-bold">Projects</h2>
        <ul>
          <li className="mb-2">
            <span className="font-semibold">Project A:</span> Ongoing (2 days)
          </li>
          <li className="mb-2">
            <span className="font-semibold">Project B:</span> Completed (1 week ago)
          </li>
          <li className="mb-2">
            <span className="font-semibold">Project C:</span> Ongoing (3 days)
          </li>
        </ul>
      </div>
    </div>
  );
};
// Dashboard Component
const Dashboard = () => {
  const [isSideWindowVisible, setSideWindowVisible] = useState(false);

  const toggleSideWindow = () => {
    setSideWindowVisible(!isSideWindowVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSideWindow={toggleSideWindow} />
      <SideWindow isVisible={isSideWindowVisible} toggleSideWindow={toggleSideWindow} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-col items-center justify-center flex-1 p-6 overflow-y-auto bg-white">
          <h1 className="mb-4 text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mb-4 font-semibold">Aaj Basu Code Karu</p>
          {/* Add more content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;