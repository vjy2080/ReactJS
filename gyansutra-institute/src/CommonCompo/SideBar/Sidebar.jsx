import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const capitalizeFirstLetter = (str) => {
        if (!str || str.length === 0) {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const userName = capitalizeFirstLetter(Cookies.get('Name'));
    const Logout = () => {
        Cookies.remove("Name");
        navigate('/Login')

    };

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
                    <Link to="/">
                        <i className="bx bx-grid-alt"></i>
                        <span className="link_name">Dashboard</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <Link to="/about">
                        <i className="bx bx-user"></i>
                        <span className="link_name">About</span>
                    </Link>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <Link to="/">
                        <i className="bx bx-chat"></i>
                        <span className="link_name">Message</span>
                    </Link>
                    <span className="tooltip">Message</span>
                </li>
                <li>
                    <Link to="/">
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className="link_name">Analytics</span>
                    </Link>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <Link to="/">
                        <i className="bx bx-folder"></i>
                        <span className="link_name">File Manger</span>
                    </Link>
                    <span className="tooltip">File Manger</span>
                </li>
                <li>
                    <Link to="/">
                        <i className="bx bx-cart-alt"></i>
                        <span className="link_name">Order</span>
                    </Link>
                    <span className="tooltip">Order</span>
                </li>
                <li>
                    <Link to="/">
                        <i className="bx bx-cog"></i>
                        <span className="link_name">Settings</span>
                    </Link>
                    <span className="tooltip">Settings</span>
                </li>
                <li className="profile">
                    <div className="profile_details">
                        {/* <img src="profile.jpeg" alt="profile image" /> */}
                        <div className="profile_content">
                            <div className="name">{userName}</div>
                            <div className="designation">{userName}</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out" onClick={Logout} ></i>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
