import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Link
    // , useNavigate
} from 'react-router-dom';

const AdminAllusers = () => {
    // const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(false);
    const [loader, setLoader] = useState(false);
    const [allUsers, setAllUsers] = useState(false);
    const [userdelete, setUserDeleteStatus] = useState(false);

    useEffect(() => {
        getAllUsersData()
    }, [userdelete])
    // let allUsersDataList = ""
    let deleteuser = async (e) => {
        // console.log(e.target.getAttribute("data-id"));
        let userid = e.target.getAttribute("data-id");
        const response = await axios.delete(`http://localhost:5000/users/${userid}`)
            .then((response) => { console.log(response); })
        setUserDeleteStatus(true)
    }
    let getAllUsersData = async () => {
        try {
            // const response = await axios.get(`http://localhost/api/users`)
            // const response = await axios.get(`https://jayramin.000webhostapp.com/allusers`)
            const response = await axios.get(`http://localhost:5000/users`)
                .then((response) => {
                    console.log(response);
                    if (response.status == 200) {
                        console.log("server connected", response.data);
                        let allUsersDataList = ""
                        allUsersDataList = Object.entries(response.data).map(([key, value], i) => {
                            return <tr key={i}>
                                <td>{value.username}</td>
                                <td>{value.password}</td>
                                <td>{value.email}</td>
                                <td><Link to={`/admin/edituserdata/${value.id}`} className='text-light btn btn-primary'>edit</Link></td>
                                {/* <td><Link to="/admin/edituserdata/"+{value.id} className='text-light btn btn-primary'>edit</Link></td> */}
                                <td><button className='btn btn-danger' data-id={value.id} onClick={deleteuser}>delete</button></td>
                            </tr>
                        })
                        setAllUsers(allUsersDataList)
                        setLoader(true)
                    } else {
                        console.log("error while connecting to the server");
                    }
                }).catch((error) => {
                    console.log("inside catch", error);
                    setErrorMsg(true)
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="proj-admin-card">
                all users data
                <table className='table table-bordered'>
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th className='text-light' >User Name</th>
                            <th className='text-light' >Password</th>
                            <th className='text-light' >Email</th>
                            <th colSpan={2} className='text-light text-center' >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {JSON.stringify(allUsers)} */}
                        {loader ? allUsers : <tr> <td colSpan={5}>No Record Found...</td> </tr>}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminAllusers;