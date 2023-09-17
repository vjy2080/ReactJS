import React from 'react';
import UserStatistics from './Dashboard/UserStatistics';
import RecentActivity from './Dashboard/RecentActivity'
import Sidebar from './Sidebar';
import Charts from './Dashboard/Charts';




const Dashboard = () => {
    return (
        <>

            <header>
                <h1 className='text-center mb-0 py-1 bg-secondary'>Admin Dashboard</h1>
            </header>

            <div className=" border bg-warning p-2">
                <div className="row d-flex">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">

                        <div className="content">
                            <UserStatistics />
                            <RecentActivity />
                            <Charts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
