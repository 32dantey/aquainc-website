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
    <section class="bg-gtob dark:bg-gray-900 font-poppins">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
    </section>
  )
}

export default Hero