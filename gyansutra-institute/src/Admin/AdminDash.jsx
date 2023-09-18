import React from 'react';
import UserStatistics from './Dashboard/UserStatistics';
import RecentActivity from './Dashboard/RecentActivity'
import Sidebar from './Sidebar';
import Charts from './Dashboard/Charts';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const userName = (Cookies.get('Name'));
    return (
        userName ? (
            <>
                <header>
                    <h1 className='text-center border border-dark mb-0 py-1 bg-secondary'>Admin Dashboard</h1>
                </header>

                <div className=" border bg-warning p-2 border border-dark">
                    <div className="row d-flex">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">

                            <div className="content">
                                <UserStatistics />
                                <hr className='my-3 hr hr-blurry' />
                                <RecentActivity />
                                <hr className='my-3 hr hr-blurry' />
                                <Charts />
                            </div>
                        </div>
                    </div>
                </div>
            </>) :
            <>
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-5">
                            <h1 className='text-danger'>Login First to continue...</h1>
                            <Link className='btn btn-primary' to='/login'>Login Here</Link>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default Dashboard;
