import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "./../reducer/users";
import { Link } from 'react-router-dom';
const AccessStoreData = () => {
    const users = useSelector(selectUser);
    // console.log("called inside access store data",users);
    return (
        <div>
            <Link to="/">Home</Link>
            {JSON.stringify(users)}
        </div>
    );
};

export default AccessStoreData;