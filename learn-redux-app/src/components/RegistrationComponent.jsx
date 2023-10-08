import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardHeader,
    MDBCol,
    MDBCardBody,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent,
    MDBIcon,
    MDBCheckbox,
    MDBInput,
    MDBBtn,
    MDBTextArea,
} from 'mdb-react-ui-kit';

const RegistrationComponent = () => {
    return (
        <>
            <MDBContainer fluid className='mt-5'>
                <section>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6'>
                            <form>
                                <div className='text-center mb-3'>
                                    <p>Sign up with:</p>
                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='github' />
                                    </MDBBtn>
                                </div>

                                <p className='text-center'>or:</p>

                                <MDBInput className='mb-4' type='text' id='registerName' label='Name' />

                                <MDBInput className='mb-4' type='text' id='registerUsername' label='Username' />

                                <MDBInput className='mb-4' type='email' id='registerEmail' label='Email' />

                                <MDBInput className='mb-4' type='password' id='registerPassword' label='Password' />

                                <MDBInput className='mb-4' type='password' id='registerRepeatPassword' label='Repeat password' />

                                <MDBCheckbox
                                    wrapperClass='d-flex justify-content-center mb-4'
                                    defaultChecked
                                    label='I have read and agree to the terms'
                                />

                                <MDBBtn type='submit' block className='mb-3'>
                                    Sign in
                                </MDBBtn>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>


        </>
    );
};

export default RegistrationComponent;