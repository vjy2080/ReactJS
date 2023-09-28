import React, { useState, useEffect } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EditUserForm from './EditUserForm';

export default function AllUsers() {
  const [apiData, setApiData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateUserData = () => {
    console.log("Edit called");
    handleOpenModal();
  };

  const getDatas = async () => {
    try {
      const url = "http://localhost:3004/user";
      const response = await fetch(url);
      const data = await response.json();

      const allUsersList = data.map((val) => (
        (val.id > 0) ?
          (<tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.fname}</td>
            <td>{val.uname}</td>
            <td>{val.pw}</td>
            <td>
              <button className='btn btn-sm btn-primary' onClick={updateUserData}>
                Edit
              </button>
              &nbsp;
              <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
          </tr>) : ''
      ));

      setApiData(allUsersList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <Table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{apiData}</tbody>
      </Table>

      {showModal && (
        <EditUserForm showModal={showModal} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}
