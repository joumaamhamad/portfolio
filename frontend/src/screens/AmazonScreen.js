import React, { useEffect } from 'react';


export default function AmazonScreen() {

  useEffect(() => {
    // Scroll to the top of the component when it mounts
    window.scrollTo(0, 0);
}, []);

  return (
    <div className='flex flex-col items-center py-24 px-4 lg:px-20'>

      <div className='flex items-center justify-center space-x-4'>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/amazonimage/home.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/amazonimage/search.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/amazonimage/cart.png'} alt=''></img></div>
      </div>

      <div className='flex items-center justify-center space-x-4'>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/amazonimage/order.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/amazonimage/shipping.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/amazonimage/userList.png'} alt=''></img></div>
      </div>

      <div className='text-white py-9 text-2xl'><h1><b>Amazon Clone Project</b></h1></div>
      <div className='flex items-center justify-center text-white'>
        <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the Amazon Clone! This project is a full-stack e-commerce website built using the MERN stack, comprising MongoDB for the database, Express.js for the backend, React.js for the frontend, and Node.js for server-side logic.</p>
      </div>

      <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='https://github.com/joumaamhamad/amazon'>click</a></div>
    </div>
  )
}
