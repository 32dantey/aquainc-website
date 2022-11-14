import React from 'react'
import tubeSettler from '../images/Product Images/TubeSettler1.png'

function Hero() {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10 font-poppins rounded-md">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                <p className="w-full text-center text-2xl font-bold md:text-4xl">
                    <span className="text-aqua-green">Aqua</span>
                    <span> </span> 
                    <span className="text-aqua-blue">Inc</span> 
                    </p>
                <p className="w-full text-center text-2xl font-bold md:text-4xl">Tube Settler Media</p>
                
            </div>
            <div className="order-1 lg:order-2">
                <img src={tubeSettler} alt="tubesettlermedia" />

            </div>
        </div>
    </section>
  )
}

export default Hero