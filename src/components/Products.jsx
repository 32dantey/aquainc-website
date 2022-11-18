import {useState} from 'react'
import products from '../Data/products'
import ProductModal from './ProductModal'

export default function Products() {
    const [modal,setModal] = useState(false)
    const [item,setItem] = useState(null)

    return (
        <section className='bg-gtob bg-cover font-poppins'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center p-3 items-center">
                {/* Products Display */}
                
                    {products.map((item, num) => {
                        return (
                            <div key={num}>
                                
                            <div className="backdrop-blur mx-auto w-full bg-white/20 h-full rounded-lg shadow-md"
                                
                            >
                                <a href="#">
                                    <img className="object-cover  p-2 " src={item.image[0]} alt="itemImage" />
                                </a>
                                <div className="p-5 overflow-auto">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.item}</h5>
                                    </a>
                                    <p className="mb-3  text-gray-700 overflow-y-auto">{item.itemDescription}</p>
                                    <a href="#" 
                                        onClick={()=>{
                                            setModal(true)
                                            setItem(item)
                                        }}
                                        
                                        className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-aqua-blue rounded-lg hover:bg-aqua-green hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        Know More
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                    {modal&&<ProductModal visibility={setModal} item={item}/>}
            </div>

        </section>
    )
}
