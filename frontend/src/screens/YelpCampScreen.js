import React, { useEffect } from 'react';


export default function YelpCampScrren() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
    
    <div className='flex flex-col items-center py-24 lg:px-20'>

        <div className='flex items-center justify-center space-x-4'>
            <div className='md:h-72 h-32 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/yelpcamp/photo0.png'} alt=''></img></div>
            <div className='md:h-72 h-32 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/yelpcamp/photo1.png'} alt=''></img></div>
        </div>

        <div className='flex items-center justify-center space-x-4'>
            <div className='md:h-72 h-32 w-2/5 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/yelpcamp/photo2.png'} alt=''></img></div>
            <div className='md:h-72 h-32 w-2/5 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/yelpcamp/photo3.png'} alt=''></img></div>
        </div>

        <div className='text-white py-9 text-2xl'><h1><b>YelpCamp Project</b></h1></div>
        <div className='flex items-center justify-center text-white'>
            <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>This project is a small project using ejs views, nodejs, expressjs and mongodb.Including CRUD operations, RestFull routes, authentication (using passportjs), authorization ,session managment ,handling errors and other increas.</p>
        </div>

        <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='https://github.com/joumaamhamad/YelpCamp'>click</a></div>
    </div>

)
}
