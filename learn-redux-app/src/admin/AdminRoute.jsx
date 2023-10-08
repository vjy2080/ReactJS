import React, { Component } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';

import AdminDashboard from './AdminDashboard.jsx';
import AdminMenu from './AdminMenu.jsx';
import AdminAllusers from './AdminAllusers.jsx';
import EditUserData from './EditUserData.jsx';


class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/admin/admindashboard" replace />} >
                        <Route path="admindashboard" element={<AdminDashboard />} />
                    </Route> */}
                    <Route path="/" element={<AdminMenu/>} >
                        <Route path="admindashboard" element={<AdminDashboard />} />
                        <Route path="allusers" element={<AdminAllusers />} />
                        <Route path="edituserdata/:id" element={<EditUserData />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;