import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className='cursor-pointer md:w-96 h-full text-center mt-32 sm:w-80 group'>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-xl hover:border-white/40">
        <Link to={props.path}>
          <div className="overflow-hidden rounded-t-lg">
            <img 
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110" 
              src={props.src} 
              alt={props.title} 
            />
          </div>
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{props.title}</div>
          <p className="text-gray-300 text-base">
            {props.description}
          </p>
        </div>
        <div className="px-6 pb-6 pt-2">
          <Link to={props.path}>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}