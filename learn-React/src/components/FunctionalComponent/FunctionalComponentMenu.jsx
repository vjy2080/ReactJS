import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalComponentMenu = () => {
    return (
        <>
            <div className='col-lg-6 offset-lg-6 '>
                <ol>
                    <li><Link className='text-light' to="fucntionalcompointro">Introdcution of Fucntional Component</Link></li>
                    <li><Link className='text-light' to="interviewquestion">ReactJs Rendering</Link></li>
                    <li><Link className='text-light' to="statesinfunctionalcompo">State in Fucntional Compo</Link></li>
                    <li><Link className='text-light' to="propsinfunctionalcompo">Props in Fucntional Compo</Link></li>
                    <li><Link className='text-light' to="useeffectinfunctionalcompo">useEffect in Fucntional Compo</Link></li>
                </ol>

            </div>
            <Outlet></Outlet>
        </>
    );
};

export default FunctionalComponentMenu;