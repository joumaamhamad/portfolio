import React, { useEffect } from 'react';
import chrisHome from '../images/htmlcss/christmas/photo1.png';
import chrisProduct from '../images/htmlcss/christmas/photo2.png';
import chrisGallery from '../images/htmlcss/christmas/photo3.png';
import chrisAbout from '../images/htmlcss/christmas/photo4.png';
import chrisMore from '../images/htmlcss/christmas/photo5.png';
import chrisFinal from '../images/htmlcss/christmas/photo6.png';
import vegHome from '../images/htmlcss/vegetable/photo1.png';
import vegOffer from '../images/htmlcss/vegetable/photo2.png';
import vegCategory from '../images/htmlcss/vegetable/photo3.png';
import vegProduct from '../images/htmlcss/vegetable/photo4.png';
import vegcustomer from '../images/htmlcss/vegetable/photo5.png';

export default function FrontWebsiteScreen() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
    <div className='py-24'>
        <div className='flex flex-col items-center py-24'>

            <div className='flex items-center justify-center space-x-4 space-y-4 '>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisHome} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisProduct} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisGallery} alt=''></img></div>
            </div>

            <div className='flex items-center justify-center space-x-2.5 space-y-2.5 '>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisAbout} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisMore} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={chrisFinal} alt=''></img></div>
            </div>

            <div className='text-white py-9 text-2xl'><h1><b>Christmas Project</b></h1></div>
            <div className='flex items-center justify-center text-white'>
                <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the Christmas project! This is a HTML/CSS Project, this was completed at the end of 2021 and beginning og 2022 during my training period at front end.</p>
            </div>

            <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='hh'>click</a></div>
        </div>

        <div className='flex flex-col items-center py-24'>

            <div className='flex items-center justify-center space-x-4 space-y-4 '>
                <div className='h-72 w-full shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={vegHome} alt=''></img></div>
                <div className='h-72 w-full shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={vegOffer} alt=''></img></div>
            </div>

            <div className='flex items-center justify-center space-x-2.5 space-y-2.5 '>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={vegCategory} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={vegProduct} alt=''></img></div>
                <div className='h-72 w-1/4 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={vegcustomer} alt=''></img></div>
            </div>

            <div className='text-white py-9 text-2xl'><h1><b>Vegetable Project</b></h1></div>
            <div className='flex items-center justify-center text-white'>
                <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the vegetable project! This is a HTML/CSS Project, this was completed in 2022 during my training period at front end.</p>
            </div>

            <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='hh'>click</a></div>
        </div>
    </div>
)
}