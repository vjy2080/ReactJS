import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditUserForm({ showModal, handleCloseModal, user }) {
    const [editedUser, setEditedUser] = useState(user);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (user) => {
        // console.log("Log e", e);
        const { name, value } = user.target;
        setEditedUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleSaveChanges = async () => {
        console.log("Called update");
        try {
            const response = await fetch(`http://localhost:3004/user/${editedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUser),
            });

            if (response.ok) {
                console.log('User updated successfully!');
            } else {
                console.error('Failed to update user:', response.statusText);
            }

            handleCloseModal();

        } catch (error) {
            console.error('Error updating user:', error);
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
                            value={editedUser.fname || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lname"
                            value={editedUser.lname || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="uname"
                            value={editedUser.uname || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div className="password-input-container d-flex align-items-center">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                name="pw"
                                value={editedUser.pw || ''}
                                onChange={handleInputChange}
                            />

                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'
                                    } password-toggle-icon + p-2  border border-info bg-info rounded`}
                                onClick={togglePasswordVisibility}
                            />

                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={editedUser.city || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicZip">
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            value={editedUser.zip || ''}
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
