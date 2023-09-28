import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

async function fetchUser(id) {
    try {
        const url = `http://localhost:3004/user/${id}`;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

async function updateUser(id, updatedUserData) {
    try {
        const url = `http://localhost:3004/user/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
    }
}

function EditUserForm({ showModal, handleCloseModal, userId }) {
    const [editedUserData, setEditedUserData] = useState({
        fname: '',
        uname: '',
        pw: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchUser(userId);
                setEditedUserData(data); // Set the fetched data into state
            } catch (error) {
                // Handle errors
            }
        }

        fetchData();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveChanges = async () => {
        try {
            await updateUser(userId, editedUserData);
            handleCloseModal();
        } catch (error) {
            // Handle errors
        }
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fname"
                            value={editedUserData.fname || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="uname"
                            value={editedUserData.uname || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="pw"
                            value={editedUserData.pw || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditUserForm;
