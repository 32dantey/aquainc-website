import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ModalCarousel({images}) {

    // Carousel Interface
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false,
    }
    console.log(images)
    return (
        <div>
            {/* Start From here */}
            <Slider {...settings}>
                {images.map((image,num)=>{
                    return(
                        <div key={num} className="w-full" >
                            <img src={image} alt="itemImages" />
                        </div>
                    )
                })}
                
            </Slider>
        </div>
    )
}
