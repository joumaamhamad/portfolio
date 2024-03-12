import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
return (
<div className='cursor-pointer w-96 h-full text-center border-4 mt-32 shadow-lg'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-6 px-6">
        <img className="w-full h-72 transform transition-transform duration-500 hover:scale-110" src={props.src} alt={props.title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">{props.title}</div>
            <p className="text-gray-700 text-base">
                {props.description}
            </p>
        </div>
        <div className="px-6 py-4">
            <Link to={props.path}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Details
                </button>
            </Link>
        </div>
    </div>
</div>

)
}
