import React, { useEffect, useState } from 'react';
import UserStatistics from './Dashboard/UserStatistics';
import RecentActivity from './Dashboard/RecentActivity'
import Charts from './Dashboard/Charts';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import SidebarMenu from '../CommonCompo/SideBar/SidebarMenu';
import AllUsers from './Dashboard/AllUsers';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    const Role = parseInt(Cookies.get('Role'));
    const [toastDisplayed, setToastDisplayed] = useState(false);

    useEffect(() => {
        const hasDisplayedToast = localStorage.getItem('hasDisplayedToast');
        if (!toastDisplayed && hasDisplayedToast !== 'true') {
            toast.success("Logged-In Successfully as 'Admin'");
            localStorage.setItem('hasDisplayedToast', 'true');
            setToastDisplayed(true);
        }
    }, [toastDisplayed]);

    return (
        Role === 1 ? (
            <>
                <ToastContainer
                    newestOnTop={false}
                    rtl={false}
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover={false}
                    draggable
                    theme="dark"
                    pauseOnFocusLoss={false}
                />
                <SidebarMenu />
                <div className="w-100">
                    <div className="row">
                        <div className="col">

                            <header>
                                <h1 className='text-center border border-dark mb-0 py-1 bg-secondary'>Admin Dashboard</h1>
                            </header>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <AllUsers />
                                    </div>
                                </div>
                            </div>
                            <div className=" border bg-warning p-2 border border-dark">
                                <div className="row d-flex">
                                    <div className="col-md-3">
                                        {/* <Sidebar /> */}
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
                        </div>
                    </div>
                </div>
            </>) :
            <>
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-5">
                            <h1 className='text-danger'>Login as an Admin to continue...</h1>
                            <Link className='btn btn-primary' to='/login'>Login Here</Link>
                        </div>
                    </div>
                </div>

            </>
    );
};

export default Dashboard;
