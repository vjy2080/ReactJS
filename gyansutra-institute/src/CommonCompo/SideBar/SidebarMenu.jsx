import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './SidebarStyle.css';

const SidebarMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default SidebarMenu;
