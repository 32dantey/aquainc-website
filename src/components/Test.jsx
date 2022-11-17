import React, { useState } from 'react'
import ProductModal from './ProductModal'
import products from '../Data/products'


export default function Test() {
    const [modal,setModal] = useState(false)

    

    return (
        <div className='font-poppins text-xl flex justify-center items-center '>
            <div className=''>
                <h1> Modal Design</h1>
                <button
                    onClick={()=>setModal(true)}
                    className='rounded-xl bg-aqua-green p-2 hover:bg-aqua-blue'>
                    <p>Click me!</p>
                </button>
            </div>
            {modal && <ProductModal visibility={setModal} />}
            


        </div>
    )
}
