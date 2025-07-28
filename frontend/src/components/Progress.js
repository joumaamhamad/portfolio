import React from 'react';

export default function Progress(props) {
  return (
    <div className='py-1'>
      <p className='text-white'>{props.title}</p>
      <div className="relative md:w-96 w-72 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: `${props.value}%`,
            background: 'linear-gradient(90deg, rgba(96, 165, 250, 1) 0%, rgba(168, 85, 247, 1) 100%)'
          }}
        ></div>
      </div>
      <span className="text-white text-sm">{props.value}%</span>
    </div>
  )
}