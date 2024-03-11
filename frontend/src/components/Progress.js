import React from 'react'

export default function Progress(props) {
return (
    <div>
        <div className='py-1'>
            <p>{props.title}</p>
            <progress className='md:w-96 w-72' value={props.value} max="100"></progress>
        </div>
    </div>
)
}
