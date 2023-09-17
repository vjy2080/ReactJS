import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar border bg-secondary text-white h-100">
      <ul className="nav flex-column p-5">
        <li className="nav-item my-3">Dashboard</li>
        <li className="nav-item my-3">User Statistics</li>
        <li className="nav-item my-3">Recent Activity</li>
        <li className="nav-item my-3">Charts</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
