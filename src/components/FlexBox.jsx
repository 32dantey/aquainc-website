import React from 'react'

export default function FlexBox() {
  return (
    <div className=' bg-gtob text-poppins p-4'>
        <div className="flex justify-evenly">
        <div className=" p-8 bg-blue-700 m-2 rounded-xl">
            <h1 className='font-bold text-white'>Hello</h1>
        </div>
        <div className=" p-8 bg-green-700 m-2 rounded-xl">
            <h1 className='font-bold text-white'>World</h1>
        </div>

        </div>
    </div>
  )
}
