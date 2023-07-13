import React from 'react';
import Image1 from "./hanuman.jpg";
import '../../src/App.css'
import ChildComponent from './ChildComponent.jsx'
const ImagesInReactJS = () => {
    return (
        <>
            {/* Main Heading */}
            <h1 className='text-center text-primary'>Display Images In React</h1>

            <div className="container">

                <div className="row">

                    {/* Image by import */}
                    <div className="col text-center border border-danger">
                        <ChildComponent title="Method-1 :- By import module" imageData={Image1} />
                    </div>

                    {/* Image is set as background in App.css file */}
                    <div className="col text-center border border-danger">
                        <h4 className='text-success my-3'>Method-2 :- Image in CSS</h4>
                        <div className="d-flex justify-content-center"><div className="img"></div></div>
                    </div>

                </div>

                <div className="row">

                    {/* Image is get by online link */}
                    <div className="col text-center border border-danger">
                        <ChildComponent title="Method-3 :- By Online link" imageData="https://i.pinimg.com/564x/99/cd/ea/99cdea159d56c16af0f86fc6296e0631.jpg" />
                    </div>
                </div>
                <div className="row">

                    {/* Image from public folder */}
                    <div className="col text-center border border-danger">
                        <ChildComponent title="Method-4 :- Image from public folder" imageData={process.env.PUBLIC_URL + "/hanuman.jpg"} />
                    </div>

                    <div className="col text-center border border-danger">

                        <ChildComponent title="Method-4 :- Image from public folder" imageData={window.location.origin + "/hanuman.jpg"} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default ImagesInReactJS;



