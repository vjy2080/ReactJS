// import React from 'react';
// import Slider from './Slider';
// import ContactUs from './Contact';

// export default function Home() {
//     return (
//         <><div className="bg-dark text-warning p-1">
//             <h1 className='text-center text-decoration-underline my-1'>Welcome to GyanSutra Institute</h1>
//             <Slider />
//             <ContactUs/>
//         </div>
//         </>
//     );
// }


import React from 'react';
import Slider from './Slider';
import ContactUs from './Contact';

const Home = () => {

    return (
        <div className="container">
            <Slider />
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
