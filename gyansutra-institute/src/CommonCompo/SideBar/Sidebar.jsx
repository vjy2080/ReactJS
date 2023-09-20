import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="logo_details">
                <i className="bx bxl-audible icon"></i>
                <div className="logo_name">GyanSutra</div>
                <i className={`bx ${isSidebarOpen ? 'bx-menu' : 'bx-menu-alt-right'}`} id="btn" onClick={toggleSidebar}></i>
            </div>
            <ul className="side-nav-list">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt"></i>
                        <span className="link_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-user"></i>
                        <span className="link_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-chat"></i>
                        <span className="link_name">Message</span>
                    </a>
                    <span className="tooltip">Message</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className="link_name">Analytics</span>
                    </a>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-folder"></i>
                        <span className="link_name">File Manger</span>
                    </a>
                    <span className="tooltip">File Manger</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cart-alt"></i>
                        <span className="link_name">Order</span>
                    </a>
                    <span className="tooltip">Order</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog"></i>
                        <span className="link_name">Settings</span>
                    </a>
                    <span className="tooltip">Settings</span>
                </li>
                <li className="profile">
                    <div className="profile_details">
                        {/* <img src="profile.jpeg" alt="profile image" /> */}
                        <div className="profile_content">
                            <div className="name">Anna Jhon</div>
                            <div className="designation">Admin</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"></i>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
