import React, { Component } from 'react';
import { MDBCardImage,MDBCardText } from 'mdb-react-ui-kit';

const ChildComponent = (props) => {
    return (
        <div>
            <h4 className='text-success my-3'>{props.title}</h4>
            <MDBCardImage src={props.imageData} width={200} alt='...' />
        </div>
    );
};

export default ChildComponent;
