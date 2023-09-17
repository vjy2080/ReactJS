import React from 'react';
import UserStatistics from './Dashboard/UserStatistics';
import RecentActivity from './Dashboard/RecentActivity'
import Charts from './Dashboard/Charts';
import Sidebar from './Sidebar';

const AdminDash = () => {
    return (
        <>
            <header>
                <h1>Admin Dashboard</h1>
            </header>
            <main>
                <div className="dashboard">
                    <UserStatistics />
                    <RecentActivity />
                    <Charts />
                </div>
            </main>
            <Sidebar />
        </>
    );
};

export default AdminDash;
