import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function UniversityScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All university images in the order you want
  const images = [
    '../images/university/photo7.png',
    '../images/university/photo8.png',
    '../images/university/photo1.png',
    '../images/university/photo5.png',
    '../images/university/photo6.png'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () =>
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prevImage = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className="flex flex-col items-center py-24 px-3.5 lg:px-20">
      {/* Carousel */}
      <div className="flex items-center justify-center">
        <button
          onClick={prevImage}
          className="text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <FaArrowLeft size={24} />
        </button>

        <div className="md:h-72 h-64 w-64 md:w-96 mx-4 shadow-sm shadow-white">
          <img
            className="h-full w-full object-contain"
            src={images[currentImageIndex]}
            alt={`University screenshot ${currentImageIndex}`}
          />
        </div>

        <button
          onClick={nextImage}
          className="text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex mt-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-colors ${
              idx === currentImageIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>

      <div className="text-white py-9 text-2xl">
        <h1><b>University Project</b></h1>
      </div>

      <div className="flex items-center justify-center text-white">
        <p className="md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center">
          This university website was developed for the students of the Lebanese University as part of my Master’s degree project. It was built using a robust stack of technologies, including HTML, CSS, JavaScript, Ajax, jQuery, PHP, and SQL, to deliver an interactive and user-friendly platform.
        </p>
      </div>

      <div className="py-9 text-white">
        Click here to visit it:{' '}
        <a
          className="text-lime-500 underline"
          href="https://github.com/joumaamhamad/university"
          target="_blank"
          rel="noopener noreferrer"
        >
          click
        </a>
      </div>
    </div>
  );
}