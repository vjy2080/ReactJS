import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {

  const imageUrls = {
    image1: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    image2: 'https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80',
    image3: 'https://plus.unsplash.com/premium_photo-1679547202458-4792471e5ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    image4: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    image5: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    image6: 'https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',

  };



  return (
    <div className="container my-3 w-100 px-5 mx-5 ">
      <div className="row ">
        <div className="col ">
          <h3 className='text-center text-primary text-decoration-underline my-4'>Welcome to GyanSutra Institute</h3>
          <MDBCarousel showControls touch={false}>
            {Object.keys(imageUrls).map((key, index) => (
              <MDBCarouselItem
                key={index}
                className='w-100 d-block rounded-5'
                itemId={index + 1}
                src={imageUrls[key]} alt={`Image ${index + 1}`}
                height={350}
              >
              </MDBCarouselItem>
            ))}
          </MDBCarousel>
        </div>
      </div>
    </div>
  );
}