import React, { useState } from 'react';
import {
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    // MDBCheckbox,
    MDBValidation,
    MDBValidationItem
} from 'mdb-react-ui-kit';

export default function Registration() {
    const [formValue, setFormValue] = useState({
        fname: '',
        lname: '',
        email: '',
        pw: '',
        city: '',
        zip: '',
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });

    };
    // console.log(formValue);
    const submitData = async () => {
        await fetch('http://localhost:3004/posts', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ formValue })
        }).then(res => { console.log(res); return res.json() }).then((result) => {
        })
    }


    return (
        <div className="container">
            <div className="row">
                <MDBValidation className='row g-4'>
                    <MDBValidationItem tooltip feedback='Please choose a First name.' invalid className='col-md-6'>
                        <MDBInput
                            value={formValue.fname}
                            name='fname'
                            onChange={onChange}
                            id='fname'
                            required
                            label='First name'
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
                        />
                    </MDBValidationItem>
                    <MDBValidationItem tooltip feedback='Please choose a valid email.' invalid className='col-md-6'>
                        <MDBInputGroup textBefore='@'>
                            <input
                                value={formValue.email}
                                name='email'
                                onChange={onChange}
                                type='text'
                                className='form-control'
                                id='uname'
                                placeholder='Username'
                                required
                            />
                        </MDBInputGroup>
                    </MDBValidationItem>
                    <MDBValidationItem tooltip feedback='Please choose a valid email.' invalid className='col-md-6'>
                        <input
                            value={formValue.pw}
                            name='pw'
                            onChange={onChange}
                            type='password'
                            className='form-control'
                            id='uname'
                            placeholder='Password'
                            required
                        />
                    </MDBValidationItem>

                    <MDBValidationItem tooltip className='col-md-6' feedback='Please provide a valid city.' invalid>
                        <MDBInput
                            value={formValue.city}
                            name='city'
                            onChange={onChange}
                            id='city'
                            required
                            label='City'
                        />
                    </MDBValidationItem>
                    <MDBValidationItem tooltip className='col-md-6' feedback='Please provide a valid zip.' invalid>
                        <MDBInput
                            value={formValue.zip}
                            name='zip'
                            onChange={onChange}
                            id='zip'
                            required
                            label='Zip'
                        />
                    </MDBValidationItem>
                    <div className='col-6'>
                        <MDBBtn onClick={submitData} type='submit'>Submit form</MDBBtn>
                    </div>
                </MDBValidation>
            </div>
        </div>
    );
}