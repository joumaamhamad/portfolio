import React from 'react';

export default function Checkoutsteps(props) {
return (
    <div className="checkout-steps flex mt-4">

        <p className={props.step1 ? 'active' : ''}><b>Skills</b></p>
        <p className={props.step2 ? 'active' : ''}><b className='ml-4'>Education</b></p>
        <p className={props.step3 ? 'active' : ''}><b className='ml-4'>Certification</b></p>
    
    </div>
)
}
