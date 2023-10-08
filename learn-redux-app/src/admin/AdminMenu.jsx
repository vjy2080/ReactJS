import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminMenu = () => {
    const [sidemenutoggle, setSideMenuToggle] = useState(false)
    return (
        <>


            <aside className={sidemenutoggle ? "" : "close"}>
                <button className="toggle" onClick={() => { console.log("Called btn "); setSideMenuToggle(!sidemenutoggle) }}>|||</button>
                <h1 className='text-center'>Menu</h1>
                {/* ||| */}
                <nav>
                    <ul className='sidenav'>
                        <li><Link to="/admin/admindashboard">Dashboard</Link></li>
                        <li><Link to="/admin/allusers">Users</Link></li>
                    </ul>
                </nav>
            </aside>
            {/* <aside id='sidebar' className={sidemenutoggle ? "togglemenu":""}>
                <div className="sidebar">
                    <ul className='sidenav'>
                        <li><Link to="/admin/admindashboard">Dashboard</Link></li>
                        <li><Link to="/admin/allusers">Users</Link></li>
                    </ul>
                </div>
            </aside> */}
            {/* <i className="fa-solid fa-xmark cust-mark" onClick={()=>{ console.log("Called btn "); setSideMenuToggle(!sidemenutoggle)  }}></i> */}
            <Outlet></Outlet>
        </>
    );
};

export default AdminMenu;