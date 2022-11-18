import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ModalCarousel({images}) {

    // Carousel Interface
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
    }
    return (
        <div className=''>
            {/* Start From here */}
            <Slider {...settings}>
                {images.map((image,num)=>{
                    return(
                        <div key={num} className="" >
                            <img src={image} alt="itemImages" className='object-cover' />
                        </div>
                    )
                })}
                
            </Slider>
        </div>
    )
}
