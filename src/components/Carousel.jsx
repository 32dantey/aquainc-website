import React from 'react'
import Slider from 'react-slick'
import products from '../Data/products'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {

    // Carousel Interface
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false,
    }

    return (
        <div>
            <Slider {...settings}>
                {products.map((product, num) => {
                    return (
                        <div key={num} className="">
                            <div>
                            <img src={product.image[0]} alt='item-name' className='object-cover' />
                            </div>
                            <h1 className="text-4xl font-light text-white">
                                {product.item}
                            </h1>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
