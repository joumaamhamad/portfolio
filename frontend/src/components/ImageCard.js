import React from 'react'
import { Link } from 'react-router-dom';

export default function ImageCard(props) {
return (
    <div>
        <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300'>
            <div className='image-container h-full w -full'>
                <img className='h-full w-full' src={props.src} alt='' />
                <Link to={props.path}>
                    <div className='overlay'>
                        <div className='content'>
                            <b>Click for more informations!</b>
                        </div>
                    </div>
                </Link>
            </div>

            <br/><br/>
            <b>{props.title}</b>
        </div>
    </div>
)
}
