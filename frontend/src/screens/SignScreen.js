import React, { useEffect } from 'react';


export default function SignScreen() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
        <div className='w-5/6 h-2/5 border-2'><img className='h-full w-full' src={'../images/htmlcss/signin1.png'} alt=''></img></div>
        <div><b className='text-3xl'>SignIn Form</b></div>
      </div>

      <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
        <div className='w-5/6 h-2/5 border-2'><img className='h-full w-full' src={'../images/htmlcss/signin2.png'} alt=''></img></div>
        <div><b className='text-3xl'>SignIn Form</b></div>
      </div>

      <div className='flex flex flex-col items-center py-24 space-y-8 text-white'>
        <div className='w-5/6 h-2/5 border-2'><img className='h-full w-full' src={'../images/htmlcss/signup3.png'} alt=''></img></div>
        <div><b className='text-3xl'>SignUp Form</b></div>
      </div>

    </div>
  )
}
