import React from 'react'
import aquaLogo from '../images/Logos/aqua logo.png'


export default function Footer() {
    const d = new Date()
    let year = d.getFullYear()
    return (
        <footer id='footer'>
            <div className='bg-btogtob bg-cover font-poppins text-center'>
                <div className="grid lg:grid-cols-5 lg:gap-3 justify-items-center backdrop-blur-sm p-10 " >
                    <div>
                        <h1 className='font-bold text-4xl'>
                            <img src={aquaLogo} alt="footslog" className='object-cover w-40' />
                            <span className='text-aqua-green'>Aqua</span>
                            <span> </span>
                            <span className='text-aqua-blue' >Inc</span>
                        </h1>
                    </div>
                    <div className='text-white  '>
                        <h1 className="font-semibold border-b-4 p-2 border-white text-xl">
                            Other Companies
                        </h1>
                        <a className='hover:border-b-2 block pt-2 border-white' href="https://aerationequipments.com">AIRFIN</a>
                        <a className='hover:border-b-2 block pt-2 border-white' href="https://weltechpumps.com">Weltech Pumps</a>
                    </div>
                    <div className='text-white '>
                        <h1 className="font-semibold border-b-4 p-2 border-white text-xl">
                            Our Email
                        </h1>
                        <a className='block' href='mailto:marketing@aquaincindia.com?subject=Inquiry from website'>Marketing@aquaincindia.com</a>
                        <a className='block' href='mailto:marketing@aquaincindia.com?subject=Inquiry from website'>Sales@aquaincindia.com</a>
                    </div>
                    <div className='text-white '>
                        <h1 className="font-semibold border-b-4 p-2 border-white text-xl">
                            Our Contact no.(+91)
                        </h1>
                        <p>8238996993</p>
                        <p>9925040029</p>
                        <p>9825328937</p>
                    </div>
                    <div className='text-white '>
                        <h1 className="font-semibold border-b-4 p-2 border-white text-xl">
                            Our Works
                        </h1>
                        <p>
                            24 Ambica Estate, Nr Vatva Railway Overbridge, Vatva, Ahmedabad, India. 382440
                        </p>
                    </div>

                </div>

            <p>Copyright@Aquainc Year: {year}</p>
            </div>
        </footer>
    )
}
