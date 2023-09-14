import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import Login from './Login';

export default function Registration({ onRegistration }) {
    const initialFormValue = {
        fname: '',
        lname: '',
        uname: '',
        pw: '',
        city: '',
        zip: '',
        role_id: '2'
    };

    const [formValue, setFormValue] = useState(initialFormValue);
    const [isRegistered, setIsRegistered] = useState(false);
    // const [checkData, setcheckData] = useState({ uname: '' });


    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormValue(initialFormValue);
    };

    const submitData = async () => {
        const response = await fetch('http://localhost:3004/posts');
        const apiData = await response.json();
        const user = apiData.find(
            (userData) =>

                // Check for direct user data
                (userData.uname === formValue.uname) ||

                // Check for nested user data
                (userData.formValue && userData.formValue.uname === formValue.uname)
        );
        // console.log('checkData', checkData);
        console.log('user', user);
        if (!user) {

            try {
                const response = await fetch('http://localhost:3004/posts', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({ formValue }),
                });

                if (response.ok) {
                    setIsRegistered(true);
                    onRegistration(formValue.uname); // Notify the parent component about the registration
                } else {
                    console.error('Registration failed.');
                }
            } catch (error) {
                // console.error('An error occurred:', error);
            }
        } else {
            console.error('Already Registered.');

        }
    };

    return (

        <div className="container w-50">
            {isRegistered ? (
                <div>
                    <p>Registration successful! You can now log in.</p>
                    <Login />
                </div>
            ) : (
                <div className="row d-flex justify-content-center border border-danger pb-5 mt-3 rounded-5">
                    <h1 className='text-center my-3'>Registration Form</h1>
                    <MDBValidation className='row g-4 '>
                        <MDBValidationItem tooltip feedback='Please choose a First name.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.fname}
                                name='fname'
                                onChange={onChange}
                                id='fname'
                                required
                                label='First name'
                                autoComplete='additional-name'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem tooltip feedback='Please choose a Last name.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.lname}
                                name='lname'
                                onChange={onChange}
                                id='lname'
                                required
                                label='Last name'
                                autoComplete='given-name'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem tooltip feedback='Please choose a Username.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.uname}
                                name='uname'
                                onChange={onChange}
                                id='uname'
                                required
                                label='Username'
                                type='email'
                                autoComplete="username"

                            />
                        </MDBValidationItem>
                        <MDBValidationItem tooltip feedback='Please choose a password.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.pw}
                                name='pw'
                                onChange={onChange}
                                id='pw'
                                required
                                label='Password'
                                type='password'
                                autoComplete="current-password"


                            />
                        </MDBValidationItem>
                        <MDBValidationItem tooltip feedback='Please provide a valid city.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.city}
                                name='city'
                                onChange={onChange}
                                id='city'
                                required
                                label='City'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem tooltip feedback='Please provide a valid zip.' invalid className='col-md-6'>
                            <MDBInput
                                value={formValue.zip}
                                name='zip'
                                onChange={onChange}
                                id='zip'
                                required
                                label='Zip'
                            />
                        </MDBValidationItem>
                        <div className='text-center col-6'>
                            <MDBBtn onClick={submitData} type='button'>Submit form</MDBBtn>
                        </div>
                        <div className='text-center col-6'>
                            <MDBBtn className='mx-3 btn btn-danger' type='button' onClick={resetForm}>Reset form</MDBBtn>
                        </div>
                    </MDBValidation>
                </div>
            )}
        </div>
    );
}
