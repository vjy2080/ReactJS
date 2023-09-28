import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

const AdminAllUsers = () => {
    const [apiData, setApiData] = useState();
    const [loading, setLoading] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    useEffect(() => {
        // axios.get(`http://localhost:3004/users`)
        //     .then(function (result) {
        //         console.log(result);
        //         setLoading(true)
        //         let APIList = Object.entries(result.Data).map(([key, val], index) => {
        //             return  <tr> <td key={key}>{val.username}</td> </tr>
        //         });
        //         console.log("result", APIList);
        //         setApiData(APIList)
        //     })
        getDatas()
        // console.log(apiData);
    }, [deleteStatus])
    const getDatas = async () => {
        const response = await fetch("http://localhost:3004/user");
        const data = await response.json();
        console.log( data);
        let allUsersList = data.map((val, key) => {
            console.log(key,val.formValue.uname);
            return <tr key={key}>
                <td>{key}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>
                    <Link className='btn btn-sm btn-secondary' to={`/admin/updateuser/${val.id}`}><MDBIcon fas icon="pen-fancy" /></Link> &nbsp;
                    {/* <button className='btn btn-sm btn-primary'><MDBIcon fas icon="pen-fancy" /></button> &nbsp; */}
                    <button className='btn btn-sm btn-danger' data-id={val.id} onClick={DeleteDataById}><MDBIcon fas icon="archive" data-id={val.id} /></button>
                </td>
            </tr>
        })
        // console.log("allUsersList",allUsersList);
        setApiData(allUsersList);
        setLoading(true);
    }
    const DeleteDataById = async (event) => {
        // console.log("called delete",event);
        // console.log("called delete",event.target);
        // console.log("called delete",event.target.dataset);
        // console.log("called delete",event.target.dataset.id);
        // console.log("called delete",this);
        // fetch('https://example.com/delete-item/' + id, {
        //     method: 'DELETE',
        // }).then(res => res.text()) // or res.json()
        // .then(res => console.log(res))
        // const response = await fetch('http://localhost:3004/users' + id, {
        let id = event.target.dataset.id
        const response = await fetch(`http://localhost:3004/users/${id}`, {
            method: 'DELETE',
        })
        const data = await response.json();
        // console.log(data);
        // console.log("allUsersList",allUsersList);
        // setApiData(allUsersList);
        setDeleteStatus(true);
    }
    return (
        <>
            <div className="card my-2 mb-2">
                <div className="card-body">

                    <div className="row">
                        <div className="col">
                            <h2>All Users</h2>
                            <div className="table-responsive">
                                <table className='table table-striped table-hover table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? apiData : <tr><td colSpan={4}>No Record Found</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAllUsers;