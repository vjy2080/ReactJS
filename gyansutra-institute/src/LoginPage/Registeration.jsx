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
    const initialFormValue = {
        fname: '',
        lname: '',
        uname: '',
        pw: '',
        city: '',
        zip: '',
    };

    const [formValue, setFormValue] = useState(initialFormValue);

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormValue(initialFormValue);
    };



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
                    <MDBValidationItem tooltip feedback='Please choose a Username.' invalid className='col-md-6'>
                        <MDBInput
                            value={formValue.uname}
                            name='uname'
                            onChange={onChange}
                            id='uname'
                            required
                            label='Username'
                            type='email'
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
                        <MDBBtn className='mx-3 btn btn-danger' type='button' onClick={resetForm}>Reset form</MDBBtn>
                    </div>
                </MDBValidation>
            </div>
        </div>
    );
}
