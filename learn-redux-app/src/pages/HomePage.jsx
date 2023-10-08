import React, { useEffect } from 'react';
import { retierveUsers } from './../actions/users';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

console.log("called home page");
const HomePage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log("called useEffect from home page");
        getUsers()
    })
    async function getUsers() {
        console.log("called getuser");
        let abc = await dispatch(retierveUsers())
        console.log(abc);
    }
    return (
        <>
            <Link to="accessapi">Access Store Data</Link>
            welcome
        </>
    );
};

export default HomePage;