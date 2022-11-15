import React from 'react'
import Slider from 'react-slick'
import products from '../Data/products'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {

    // Carousel Interface
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false,
    }

    return (
        <div className='p-4'>
            <Slider {...settings}>
                {products.map((product, num) => {
                    return (
                        <div key={num} className="">
                            <img src={product.image} alt='item-name' className='' />
                            <h1 className="text-4xl text-white">
                                {product.item}
                            </h1>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
