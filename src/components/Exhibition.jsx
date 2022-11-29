import React from 'react'
import expoInvite from '/images/bangla.png'
import expoimg from '/images/expoimg.jpg'

export const Exhibition = () => {
    return (
        <div className='bg-expo bg-cover font-poppins'>
            <div className="grid sm:grid-cols-3  gap-3 p-3 items-center ">
                <div className='bg-white/40 font-bold px-5 p-20 rounded-xl text-center backdrop-blur '>
                    <h1 className="text-xl ">
                        Join Us
                    </h1>
                    <p className='text-lg'>Aqua Inc / AIRFIN / Weltech Pumps will be at the Bangladesh Water Expo 2022 at Booth No H-125
                    </p>
                    <p>Date: 28th November to 30th November</p>
                </div>
                <div>
                    <img src={expoInvite} alt="bangladesh exhibition" className='object-cover w-full' />
                </div>
                <div>
                    <img src={expoimg} alt="bangladesh stall" className='object-cover ' />
                </div>
            </div>
        </div>
    )
}
