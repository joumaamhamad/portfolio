import React, { useEffect } from 'react';
import homeImage from '../images/yelpcamp/photo0.png';
import campgroundsImage from '../images/yelpcamp/photo1.png';
import campgroundImage from '../images/yelpcamp/photo2.png';
import newCamp from '../images/yelpcamp/photo3.png';



export default function YelpCampScrren() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
    
    <div className='flex flex-col items-center py-24'>

        <div className='flex items-center justify-center space-x-4 space-y-4 '>
            <div className='h-72 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={homeImage} alt=''></img></div>
            <div className='h-72 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={campgroundsImage} alt=''></img></div>
        </div>

        <div className='flex items-center justify-center space-x-4 space-y-4 '>
            <div className='h-72 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={campgroundImage} alt=''></img></div>
            <div className='h-72 w-2/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={newCamp} alt=''></img></div>
        </div>

        <div className='text-white py-9 text-2xl'><h1><b>YelpCamp Project</b></h1></div>
        <div className='flex items-center justify-center text-white'>
            <p className='text-center h-1/3 w-2/5 text-xl'>This project is a small project using ejs views, nodejs, expressjs and mongodb.Including CRUD operations, RestFull routes, authentication (using passportjs), authorization ,session managment ,handling errors and other increas.</p>
        </div>

        <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='h'>click</a></div>
    </div>

)
}
