import React from 'react'

export default function Image(props) {
return (

    <div className='md:h-72 h-32 w-1/3 shadow-sm shadow-white cursor-pointer mt-4'><img className='h-full w-full' src={props.src} alt=''></img></div>
    
)
}
