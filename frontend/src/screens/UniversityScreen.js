import React, { useEffect } from 'react';


export default function UniversityScreen() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
<div className='flex flex-col items-center py-24 px-3.5 lg:px-20'>

    <div className='flex items-center justify-center space-x-4'>
        <div className='md:h-72 h-32 md:w-4/5 w-3/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/university/photo7.png'} alt=''></img></div>
        <div className='md:h-72 h-32 md:w-4/5 w-3/5 shadow-sm shadow-white cursor-pointer'><img className='h-full w-full' src={'../images/university/photo8.png'} alt=''></img></div>
    </div>

    <div className='flex items-center justify-center space-x-4'>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/university/photo1.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/university/photo5.png'} alt=''></img></div>
        <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-3.5'><img className='h-full w-full' src={'../images/university/photo6.png'} alt=''></img></div>
    </div>

    <div className='text-white py-9 text-2xl'><h1><b>University Project</b></h1></div>
    <div className='flex items-center justify-center text-white'>
        <p className='md:text-center md:h-1/3 md:w-2/5 md:text-xl text-l text-center'>This is a university website for the students for the Lebanese university in my master degree, using HTML, CSS, JavaScript, Ajax, JQuery, PHP, sql.</p>
    </div>

    <div className='py-9 text-white'>Click here to visit it: <a className='text-lime-500 underline' href='https://github.com/joumaamhamad/university'>click</a></div>

</div>
)
}
