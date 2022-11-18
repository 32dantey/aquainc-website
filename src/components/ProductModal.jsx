import React from 'react'
import ModalCarousel from './ModalCarousel'

export default function ProductModal({ visibility, item }) {

    const exitView = (e) => {

    }

    return (
        <div
            id='modal'
            onClick={(e) => {
                if (e.target.id === 'modal') visibility(false)
            }}
            aria-hidden='true'
            className='backdrop-blur-sm fixed text-black sm:flex justify-center items-center z-10 inset-0 overflow-y-auto overscroll-y-none'>

            <div className='  border-2 m-2 sm:w-1/2  bg-white/40 rounded-3xl shadow-black/50 shadow-2xl'>
                {/* Modal Outline */}
                <div className="p-5 ">
                    <h1 className=' text-2xl font-semibold'>{item.item}</h1>
                    <hr />
                    <div className='sm:grid  grid-cols-2 gap-2 justify-center items-center'>
                        <ModalCarousel images={item.image} />
                        <div className='border h-2/3 overflow-auto  rounded-xl p-2'>
                            <p className=''>
                                {item.itemDescription}
                            </p>
                        </div>

                    </div>
                    <hr />
                    {/* Sizes */}
                    <div className="">
                        <p className='text-xl py-2'>
                            Material Of Construction
                        </p>
                        <div className='' role='group'>
                            {item.moc.map((product, num) => {
                                return (
                                    <button key={num} className={'py-2 px-2  bg-aqua-green hover:bg-aqua-blue'}>
                                        {product}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {/* Sizes */}
                    <div className="">
                        <p className='text-xl py-2'>
                            Sizes Available
                        </p>
                        <div className='' role='group'>
                            {item.sizes.map((product, num) => {
                                return (
                                    <button key={num} className={'py-2 px-2  bg-aqua-green hover:bg-aqua-blue'}>
                                        {product}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex justify-center gap-5 p-5 '>
                        <button className='rounded-full border-2 bg-aqua-green border-aqua-blue hover:bg-aqua-blue hover:border-aqua-green p-3'
                            onClick={() => visibility(false)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z" clipRule="evenodd" />
                                </svg>
                            </span>

                        </button>
                        <a download={true} href={item.catalog} className='rounded-full border-2 bg-aqua-green border-aqua-blue hover:bg-aqua-blue hover:border-aqua-green p-3'>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z" clipRule="evenodd" />
                                    </svg>
                            </span>

                        </a>
                    </div>
                </div>

            </div>
        </div >




    )
}
