import React from 'react'

import Carousel from './Carousel'

function Hero() {
    return (
        <section className='font-poppins bg-graytog spacer'>
            <div className='grid p-3 sm:grid-cols-2 gap-2 items-center justify-items-center justify-center text-center '>
                {/* Left Section */}
                <div className=' mx-auto my-10 sm:mx-7 sm:py-20 shadow-lg text-white backdrop-blur-sm bg-white/20 rounded-lg'>
                    <div className="p-3 ">
                        <h1 className=" font-bold text-5xl pb-2">
                            <span className="text-aqua-green">Aqua</span>
                            <span> </span>
                            <span className="text-aqua-blue">Inc</span>
                        </h1>
                        <p className='font-light text-md'>
                            Reliable and quality products from the best there is.
                        </p>
                        <p className='font-light text-md'>
                            20+ Years of experience in all things related to STP/ETP and Water Pollution Control Industries and Thousands of clients all over the globe.
                        </p>
                        <button className='bg-aqua-green px-8 py-4 hover:bg-aqua-blue rounded-full'>Product</button>
                    </div>
                </div>
                {/* Carousel Section on the right */}
                <div className='max-w-xs  '>
                    <Carousel />
                </div>
            </div>
                <button className='animate-bounce rounded-full mx-auto flex justify-center  p-5 text-white hover:border-2 border-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>


                </button>
        </section>
    )
}

export default Hero