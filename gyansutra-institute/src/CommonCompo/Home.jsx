// import React from 'react';
// import Slider from './Slider';

// const Home = () => {
//     document.getElementById('login').innerHTML = <div className="alert alert-success" role="alert">
//     A simple success alert—check it out!
//   </div>
//     return (
//         <div className="container">
//             <Slider />
//             <div id='login' className="container my-3 w-100 px-5 mx-5">
//                 <div className="row">
//                     <div className="col">
//                         <h1 className='text-center text-primary my-3'>Key Features</h1>
//                         <ul className='my-3'>
//                             <li>A hub of innovation and academic excellence</li>
//                             <li>We strive to redefine education</li>
//                             <li>Our vision is to break the barriers of traditional learning</li>
//                             <li>Make high-quality education accessible to all</li>
//                             <li>Transcending geographical boundaries</li>
//                             <li>Cutting-edge technology at our core</li>
//                             <li>We offer an intuitive online platform for students to:</li>
//                             <ul>
//                                 <li>Seamlessly register</li>
//                                 <li>Pay fees</li>
//                                 <li>Track their academic progress</li>
//                             </ul>
//                             <li>Our commitment to superior education is complemented by:</li>
//                             <ul>
//                                 <li>A secure administrative dashboard</li>
//                                 <li>A modern infrastructure that nurtures growth and innovation</li>
//                             </ul>
//                             <li>Join us at GyanSutra Institute and ignite your passion for knowledge and academic success</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import Slider from './Slider';  // Import your Slider component

const Home = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        let timer;
        if (showAlert) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            setTimeout(() => {
                setShowAlert(false);
                clearInterval(timer);
            }, 5000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [showAlert]);

    return (
        <div className="container">
            {showAlert && (
                <div className="alert alert-success text-center w-100" role="alert">
                    You are logged in as <strong className='text-danger'>User</strong>! Disappearing in {countdown} seconds.
                </div>
            )}
            <Slider />
            <div className="row text-center">
                <div className="col">
                    <div className="alert alert-success" role="alert">
                        You are logged in as <strong className='text-danger'>User</strong>! Disappearing in {countdown} seconds.
                    </div>
                </div>
            </div>

            <div className="container my-3 w-100 px-5 mx-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-primary my-3'>Key Features</h1>
                        <ul className='my-3'>
                            <li>A hub of innovation and academic excellence</li>
                            <li>We strive to redefine education</li>
                            <li>Our vision is to break the barriers of traditional learning</li>
                            <li>Make high-quality education accessible to all</li>
                            <li>Transcending geographical boundaries</li>
                            <li>Cutting-edge technology at our core</li>
                            <li>We offer an intuitive online platform for students to:</li>
                            <ul>
                                <li>Seamlessly register</li>
                                <li>Pay fees</li>
                                <li>Track their academic progress</li>
                            </ul>
                            <li>Our commitment to superior education is complemented by:</li>
                            <ul>
                                <li>A secure administrative dashboard</li>
                                <li>A modern infrastructure that nurtures growth and innovation</li>
                            </ul>
                            <li>Join us at GyanSutra Institute and ignite your passion for knowledge and academic success</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

