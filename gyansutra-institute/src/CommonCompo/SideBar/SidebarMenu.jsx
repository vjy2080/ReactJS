import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './style.css';
import Slider from '../Slider';
import ContactUs from '../Contact';

const SidebarMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Slider />
            <ContactUs />
        </div>
    );
};

export default SidebarMenu;
