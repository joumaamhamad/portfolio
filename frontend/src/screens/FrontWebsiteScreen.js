import React, { useEffect } from 'react';
import Image from '../components/Image';


export default function FrontWebsiteScreen() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
    <div className=''>
        <div className='flex flex-col items-center py-24 px-3.5 lg:px-20'>

            <div className='flex items-center justify-center space-x-4'>

                <Image src={'../images/htmlcss/christmas/photo1.png'} />
                <Image src={'../images/htmlcss/christmas/photo2.png'} />
                <Image src={'../images/htmlcss/christmas/photo3.png'} />

            </div>

            <div className='flex items-center justify-center space-x-4'>

                <Image src={'../images/htmlcss/christmas/photo4.png'} />
                <Image src={'../images/htmlcss/christmas/photo5.png'} />
                <Image src={'../images/htmlcss/christmas/photo6.png'} />

            </div>

            <div className='text-white py-9 text-2xl'><h1><b>Christmas Project</b></h1></div>
            <div className='flex items-center justify-center text-white'>
                <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the Christmas project! This is a HTML/CSS Project, this was completed at the end of 2021 and beginning og 2022 during my training period at front end.</p>
            </div>

            
        </div>

        <div className='flex flex-col items-center py-24 px-3.5 lg:px-20'>

            <div className='flex items-center justify-center space-x-4'>
                <div className='md:h-72 h-32 w-full shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/htmlcss/vegetable/photo1.png'} alt=''></img></div>
                <div className='md:h-72 h-32 w-full shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/htmlcss/vegetable/photo2.png'} alt=''></img></div>
            </div>

            <div className='flex items-center justify-center space-x-4'>

                <Image src={'../images/htmlcss/vegetable/photo3.png'} />
                <Image src={'../images/htmlcss/vegetable/photo4.png'} />
                <Image src={'../images/htmlcss/vegetable/photo5.png'} />
                
            </div>

            <div className='text-white py-9 text-2xl'><h1><b>Vegetable Project</b></h1></div>
            <div className='flex items-center justify-center text-white'>
                <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>Welcome to the vegetable project! This is a HTML/CSS Project, this was completed in 2022 during my training period at front end.</p>
            </div>

        </div>
    </div>
)
}
