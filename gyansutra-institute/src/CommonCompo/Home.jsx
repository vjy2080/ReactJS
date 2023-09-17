import React from 'react';
import Slider from './Slider';
import ContactUs from './Contact';

export default function Home() {
    return (
        <><div className="bg-dark text-warning p-1">
            <h1 className='text-center text-decoration-underline my-1'>Welcome to GyanSutra Institute</h1>
            <Slider />
            <ContactUs/>
        </div>
        </>
    );
}
