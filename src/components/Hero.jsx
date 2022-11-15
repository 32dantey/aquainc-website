import React from 'react'

import Carousel from './Carousel'

function Hero() {
    return (
        //     <section id='home' className='bg-gtob font-poppins '> 
        // <div className='flex '>
        //         <div className="grid max-w-screen-xl px-6 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 backdrop-blur bg-white/50">
        //             {/* Left Section */}
        //         <div className="mr-auto place-self-center lg:col-span-7">
        //             <h1 className=" mb-4 text-4xl  tracking-tight leading-none text-center  ">

        //                     <span className="text-aqua-green">Aqua</span>
        //                     <span> </span> 
        //                     <span className="text-aqua-blue">Inc</span> 

        // 		</h1>

        //             <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Reliable and quality products from the best there is.</p>
        //             <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-aqua-blue hover:bg-aqua-green focus:ring-4 focus:ring-primary-300 ">
        //                 Our History
        //             </a>
        //             <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 ">
        //                 Products
        //             </a> 
        //         </div>
        //         {/* Right Section */}
        //         <div className=" lg:mt-0 lg:col-span-5 lg:flex ">
        //             {/* <img src={tubeSettler} alt="tubesettlermedia"/> */}
        //             <Carousel/>
        //         </div>                

        //     </div> 
        //     </div>
        //     </section>
        <>
            <section className='font-poppins bg-gtob text-center my-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2   ">
                    {/* Left Section */}
                    <div className=' backdrop-blur-sm my-4 mx-4 bg-white/60 rounded-xl drop-shadow  '>
                        <div className="bg-white/60 rounded p-4">
                            <h1 className="text-center font-bold  text-5xl">
                                <span className="text-aqua-green">Aqua</span>
                                <span> </span>
                                <span className="text-aqua-blue">Inc</span>
                            </h1></div>
                        <p className='font-semibold text-md'>
                            Reliable and quality products from the best there is.
                        </p>
                        <p className='font-semibold text-md'>
                            20+ Years of experience in all things related to STP/ETP and Water Pollution Control Industries and Thousands of clients all over the globe.
                        </p>
                        <button className='bg-aqua-green px-8 py-4 hover:bg-aqua-blue rounded-full'>Product</button>
                    </div>
                    {/* Right Section */}
                    {/* <div className=' backdrop-blur-sm my-40 bg-white/60 rounded-xl p-20'>
                <h1 className="text-center font-bold  text-4xl">
                    <span className="text-aqua-green">Aqua</span>
                    <span> </span>
                    <span className="text-aqua-blue">Inc</span>
                </h1>
                <p className='font-semibold text-md'>
                Reliable and quality products from the best there is.
                </p>
            </div> */}
                    <div className=''>
                        <Carousel />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero