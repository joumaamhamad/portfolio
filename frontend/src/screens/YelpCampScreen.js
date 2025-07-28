import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function YelpCampScreen() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '../images/yelpcamp/photo0.png',
        '../images/yelpcamp/photo1.png',
        '../images/yelpcamp/photo2.png',
        '../images/yelpcamp/photo3.png'
    ];

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='flex flex-col items-center py-24 lg:px-20'>
            {/* Image gallery with navigation */}
            <div className='flex items-center justify-center'>
                <button 
                    onClick={prevImage} 
                    className='text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none'
                >
                    <FaArrowLeft size={24} />
                </button>
                
                <div className='md:h-72 h-64 w-64 md:w-96 mx-4 shadow-sm shadow-white'>
                    <img 
                        className='h-full w-full object-contain' 
                        src={images[currentImageIndex]} 
                        alt={`YelpCamp screenshot ${currentImageIndex}`}
                    />
                </div>
                
                <button 
                    onClick={nextImage} 
                    className='text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none'
                >
                    <FaArrowRight size={24} />
                </button>
            </div>

            {/* Image indicator dots */}
            <div className='flex mt-4'>
                {images.map((_, index) => (
                    <div 
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}
                    />
                ))}
            </div>

            <div className='text-white py-9 text-2xl'><h1><b>YelpCamp Project</b></h1></div>
            <div className='flex items-center justify-center text-white'>
                <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>
                    This project is a small project using ejs views, nodejs, expressjs and mongodb. 
                    Including CRUD operations, RestFull routes, authentication (using passportjs), 
                    authorization, session management, handling errors and other features.
                </p>
            </div>

            <div className='py-9 text-white'>
                Click here to visit it: {' '}
                <a className='text-lime-500 underline' href='https://github.com/joumaamhamad/YelpCamp'>click</a>
            </div>
        </div>
    );
}