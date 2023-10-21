import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

export default function Content() {

    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const [photos, setPhotos] = useState([]);

    const getImage = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setPhotos(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col mt-3">
                        <h3>You can get image by clicking on below button</h3>
                        <input type='button' value='Get Image' onClick={getImage}></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className='text-center'>Photo Gallery</h3>
                <div className="col">
                    {photos.map(photo => (
                        <div key={photo.id} className="photo-card">
                            <Image className='image' src={photo.url} alt={photo.title} fluid />
                            <p>{photo.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
