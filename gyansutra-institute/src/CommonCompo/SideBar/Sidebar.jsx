import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import LogoImg from ''

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const capitalizeFirstLetter = (str) => {
        if (!str || str.length === 0) {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const userName = capitalizeFirstLetter(Cookies.get('Name'));
    const Role = parseInt(Cookies.get('Role'));
    const Logout = () => {
        Cookies.remove("Name");
        Cookies.remove("Role");
        navigate('/Login')

    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="logo_details">
                {/* <i className="bx bxl-audible icon"></i> */}
                <div className="logo_name mx-auto mt-3 ">
                    {/* GyanSutra */}
                    <img className='rounded-5' src="./Logo.webp" height={50} alt="profile image" />

                </div>
                <i className={`bx ${isSidebarOpen ? 'bx-menu' : 'bx-menu-alt-right'}`} id="btn" onClick={toggleSidebar}></i>
            </div>
            <ul className="side-nav-list">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                {Role === 1 ?
                    (<li>
                        <Link to="/adminDash">
                            <i className="bx bx-user-check"></i>
                            <span className="link_name">Admin Dashboard</span>
                        </Link>
                        <span className="tooltip">Admin Dashboard</span>

                    </li>)
                    : ("")
                }
                <li>
                    <Link to="/">
                        <i className="bx bx-home-smile"></i>
                        <span className="link_name">Home</span>
                    </Link>
                    <span className="tooltip">Home</span>
                </li>
                <li>
                    <Link to="/about">
                        <i className="bx bx-detail"></i>
                        <span className="link_name">About</span>
                    </Link>
                    <span className="tooltip">About</span>
                </li>
                <li>
                    <Link to="/contactUs">
                        <i className="bx bx-support"></i>
                        <span className="link_name">Contact-Us</span>
                    </Link>
                    <span className="tooltip">Contact-Us</span>
                </li>
                <li>
                    <Link to="/login">
                        <i className="bx bx-log-in"></i>
                        <span className="link_name">Login</span>
                    </Link>
                    <span className="tooltip">Login</span>
                </li>
                <li className="profile">
                    <div className="profile_details">
                        {/* <img src="profile.jpeg" alt="profile image" /> */}
                        <div className="profile_content text-center w-100">
                            <div className="pe-5 py-1 name">{userName}</div>
                            <div className="pe-5 designation">{(Role === 2 ? "User" : (Role === 1) ? "Admin" : "")}</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out" onClick={Logout} ></i>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
