import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import AlertBox from './AlertBox';
import { Link, useNavigate } from 'react-router-dom';
import { registerUsers, retierveUsers } from '../Redux/actions/users';
import { useDispatch } from 'react-redux';
import CustomHook from './../hooks/customHook';


export default function Registration({ onRegistration }) {
    const navigate = useNavigate();
    const initFormValue = {
        fname: '',
        lname: '',
        uname: '',
        pw: '',
        city: '',
        zip: '',
        role_id: '2'
    }
    const [formValue, setFormValue] = useState(initFormValue);
    const [isRegistered, setIsRegistered] = useState(false);
    const dispatch = useDispatch();
    const { inp } = CustomHook({ role: "2" }, { usernameError: "" });



    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormValue(initFormValue);
    };

    // ==================================================================
    const submitData = async (e) => {
        e.preventDefault();
        let abc = await dispatch(retierveUsers())
        let apiData = abc.payload.data
        // ==================================================================

        const newuser = apiData.find(
            (userData) =>
                userData.uname === formValue.uname
        );

        if (!newuser) {
            try {
                const response = dispatch(registerUsers(formValue));
                console.log(formValue);
                // console.log("response", response);
                // console.log("data", data);
                setIsRegistered(true);

                // if (response.ok) {
                //     console.log("setIsRegistered(true)", isRegistered);
                if (newuser) {
                    onRegistration(newuser.uname);
                }
                // }
                // else {
                //     console.log("setIsRegistered(false)", isRegistered);
                //     console.error('Registration failed.');
                //     console.error('Error message:', response.error);  // Provide more details about the error   
                // }
            }
            //  {
            //     const response = await fetch('http://localhost:3004/user', {
            //         method: 'post',
            //         headers: {
            //             'Content-type': 'application/json; charset=UTF-8',
            //         },
            //         body: JSON.stringify(formValue),
            //     });

            //     if (response.ok) {
            //         setIsRegistered(true);
            //         // onRegistration(newuser.uname);

            //         if (newuser) {
            //             onRegistration(newuser.uname);
            //         }
            //     }
            //     else {
            //         console.error('Registration failed.');
            //     }
            // }
            catch (error) {
                console.error('An error occurred:', error);
                console.error('Error response:', error.response); // Log the error response
            }


        } else {
            alert('Already Registered.');
            navigate('/Login');
        }
    };

    return (
        <div className="register container w-50 my-2">
            {isRegistered ? (
                <AlertBox type='success' msg='Registration Successfully' to='/Login' redirect='Login Here' />
            ) : (
                <div className="row d-flex justify-content-center mt-2 rounded-5">
                    <h1 className='text-center my-1'>Registration Form</h1>
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
                        <div className='my-2 text-center'>
                            <p className='text-danger'>Already Registered ?</p>
                            <Link className='btn btn-dark' to='/login'>Login Here</Link>
                        </div>
                    </MDBValidation>
                </div>
            )}
        </div>
    );
}
