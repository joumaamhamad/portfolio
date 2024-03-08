import React, { useEffect } from 'react';
import apiProject from '../images/htmlcssjs/api.png';
import calcProject from '../images/htmlcssjs/calculator.png';
import xoProject from '../images/htmlcssjs/xo.png';

export default function ProjectJavascriptScreen() {

    useEffect(() => {
        // Scroll to the top of the component when it mounts
        window.scrollTo(0, 0);
    }, []);

return (
    <div>
        <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
            <div className='w-5/6 h-2/5 border-2'><img className='h-full w-full' src={apiProject} alt=''></img></div>
            <div><b className='text-3xl'>API Project</b></div>
        </div>

        <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
            <div className='w-5/6 h-2/5 border-2'><img className='h-full w-full' src={calcProject} alt=''></img></div>
            <div><b className='text-3xl'>Calculator Project</b></div>
        </div>

        <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
            <div className='w-3/4 border-2'><img className='h-full w-full' src={xoProject} alt=''></img></div>
            <div><b className='text-3xl'>XO Project</b></div>
        </div>
    </div>
)
}
