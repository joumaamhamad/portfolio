import React, { useEffect } from 'react';
import homeImage from '../images/amazonimage/home.png'
import searchImage from '../images/amazonimage/search.png';
import cartImage from '../images/amazonimage/cart.png';
import orderImage from '../images/amazonimage/order.png';
import shippingImage from '../images/amazonimage/shipping.png';
import usersImage from '../images/amazonimage/userList.png';


export default function AmazonScreen() {

  useEffect(() => {
    // Scroll to the top of the component when it mounts
    window.scrollTo(0, 0);
}, []);

  return (
    <div className='flex flex-col items-center py-24'>

      <div className='flex items-center justify-center space-x-4 space-y-4 '>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={homeImage} alt=''></img></div>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={searchImage} alt=''></img></div>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={cartImage} alt=''></img></div>
      </div>

      <div className='flex items-center justify-center space-x-2.5 space-y-2.5 '>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={orderImage} alt=''></img></div>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={shippingImage} alt=''></img></div>
        <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={usersImage} alt=''></img></div>
      </div>

      <div className='text-white py-9 text-2xl'><h1><b>Amazon Clone Project</b></h1></div>
      <div className='flex items-center justify-center text-white'>
        <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the Amazon Clone! This project is a full-stack e-commerce website built using the MERN stack, comprising MongoDB for the database, Express.js for the backend, React.js for the frontend, and Node.js for server-side logic.</p>
      </div>

      <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='hh'>click</a></div>
    </div>
  )
}
