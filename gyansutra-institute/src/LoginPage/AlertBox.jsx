import React from 'react';
import { Link } from 'react-router-dom';

const AlertBox = ({ type, msg, to, redirect }) => {
    const alertClassName = type === 'success' ? 'alert-success' : 'alert-danger';

    return (
        <div className={`alert ${alertClassName}`}>
            <p>{msg}</p>
            <Link to={to}>{redirect}</Link>
        </div>
    );
};

export default AlertBox;
