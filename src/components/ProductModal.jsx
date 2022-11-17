import React from 'react'
import ModalCarousel from './ModalCarousel'

export default function ProductModal({ visibility, item }) {

    
    return (
        <div>
            <button onClick={() => visibility(false)}>
                Close
            </button>
            <div
                aria-hidden='true'
                className='backdrop-blur fixed bg-white/10 flex justify-center items-center z-10 inset-0 '>
                <div className="p-4">
                    <h1 className='text-white'>{item.item}</h1>
                    <hr/>
                    <ModalCarousel images={item.image}/>

                </div>


            
            </div>
        </div>
    )
}
