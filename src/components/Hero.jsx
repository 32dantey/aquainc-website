import React from 'react'
import tubeSettler from '../images/Product Images/TubeSettler1.png'

function Hero() {
  return (
    // <section className="px-3 bg-gtob py-5 bg-neutral-100 lg:py-10 font-poppins ">
    //     <div className=" grid rounded-2xl lg:grid-cols-2 items-center justify-items-center gap-5 backdrop-blur-sm bg-white/50">
    //         <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
    //             <p className="w-full text-center text-2xl font-bold md:text-4xl">
    //                 <span className="text-aqua-green">Aqua</span>
    //                 <span> </span> 
    //                 <span className="text-aqua-blue">Inc</span> 
    //             </p>
    //             <p className="w-full text-center text-2xl font-bold md:text-4xl">Tube Settler Media</p>
                
    //         </div>
    //         <div className="order-1 lg:order-2">
    //             <img src={tubeSettler} alt="tubesettlermedia" />

    //         </div>
    //     </div>
        
    // </section>
    <section id='home' className='bg-gtob font-poppins'> 
        <div className='font-poppins'>
        <div className="grid max-w-screen-xl px-6 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 backdrop-blur bg-white/50">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" mb-4 text-4xl  tracking-tight leading-none text-center  ">

                    <span className="text-aqua-green">Aqua</span>
                    <span> </span> 
                    <span className="text-aqua-blue">Inc</span> 
                    
		</h1>
            
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Reliable and quality products from the best there is.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-aqua-blue hover:bg-aqua-green focus:ring-4 focus:ring-primary-300 ">
                Our History
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 ">
                Products
            </a> 
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={tubeSettler} alt="tubesettlermedia"/>
        </div>                
    </div>
    </div>
    </section>
  )
}

export default Hero