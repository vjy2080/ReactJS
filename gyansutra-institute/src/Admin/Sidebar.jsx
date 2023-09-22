import React from 'react';

const Sidebar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="sidebar border border-dark rounded-5 bg-secondary text-dark h-100">
            <ul className="nav flex-column p-5">
              <li className="nav-item my-3">Dashboard</li>
              <li className="nav-item my-3">User Statistics</li>
              <li className="nav-item my-3">Recent Activity</li>
              <li className="nav-item my-3">Charts</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
