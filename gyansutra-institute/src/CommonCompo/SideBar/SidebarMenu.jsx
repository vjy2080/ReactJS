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
            <div className="home-bg-color">
                <Slider />
                <ContactUs />
            </div>
        </div>
    );
};

export default SidebarMenu;
