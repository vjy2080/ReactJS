import React, { useEffect, useState } from 'react';
import Slider from './Slider';  // Import your Slider component
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    const [toastDisplayed, setToastDisplayed] = useState(false);

    useEffect(() => {
        const hasDisplayedToast = localStorage.getItem('hasDisplayedToast');
        if (!toastDisplayed && hasDisplayedToast !== 'true') {
            toast.success("Logged-In Successfully as 'User'");
            localStorage.setItem('hasDisplayedToast', 'true');
            setToastDisplayed(true);
        }
    }, [toastDisplayed]);

    return (
        <>
            <div className="container">
                <ToastContainer
                    newestOnTop={false}
                    rtl={false}
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover={false}
                    draggable
                    theme="dark"
                    pauseOnFocusLoss={false}
                />
                <Slider />


                <div className="container my-3 w-100 px-5 mx-5">
                    <div className="row">
                        <div className="col">
                            <h3 className='text-center text-primary my-3'>Key Features</h3>
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
        </>
    );
};

export default Home;

