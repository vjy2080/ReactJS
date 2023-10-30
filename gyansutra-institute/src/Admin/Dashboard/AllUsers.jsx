import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

export default function AllUsers() {
    const [apiData, setApiData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [deleteUser, setDeleteUser] = useState(null);


    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = (user) => {
        setShowModal(false);
        setSelectedUser(user);
    };

    const updateUserData = (user) => {
        console.log('Edit called');
        // setSelectedUser(user);
        // console.log(selectedUser);
        handleOpenModal();
    };

    const handleDelete = async (user) => {
        console.log("called delete");
        setDeleteUser(user)
        console.log(user.role_id)

        try {
            (user.role_id == 2) ? setDeleteUser(user) : setDeleteUser(null);
            const response = await fetch(`http://localhost:3004/user/${deleteUser.id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(setDeleteUser),
            });

            if (response.ok) {
                console.log('User Deleted successfully!');
            } else {
                console.error('Failed to update user:', response.statusText);
            }

            handleCloseModal();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    console.log("apiData", apiData.length);
    useEffect(() => {
        if (apiData.length === 0) {
            const fetchData = async () => {
                console.log("fetchData");
                try {
                    const response = await fetch('http://localhost:3004/user');
                    const data = await response.json();
                    setApiData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData()
        }
    }, [updateUserData, handleDelete]);

    const allUsersList = apiData.map((val, key) => (
        (key > 0) ? (
            <tr key={val.id}>
                <td>{val.id}</td>
                <td>{(val.role_id == 2) ? "User" : "Admin"}</td>
                <td>{val.fname}</td>
                <td>{val.uname}</td>
                <td>{val.pw}</td>
                <td>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => updateUserData(val)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    &nbsp;

                    <button className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(val)}
                        disabled={(val.role_id == 1) ? true : false}>
                        <i className="fa fa-trash"></i>
                    </button>

                </td>
            </tr>) : ("")
    ));


    return (
        <>
            {/* <div className="container "> */}
            <div className="row bg-dark p-3 ">
                <h4 className='text-center text-info mb-0'>List of Users</h4>
                <div className="col mr-5">

                    <Table className="text-center border border-warning m-5 table table-dark table-striped">
                        <thead className='text-warning fs-5'>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>First Name</th>
                                <th>User Name</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{allUsersList}</tbody>
                    </Table>

                </div>
            </div>
            {/* </div> */}

            {selectedUser && (
                <EditUserForm
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    user={selectedUser}
                />
            )}
        </>
    );
}
