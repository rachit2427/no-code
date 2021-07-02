import React from 'react'
import Slider from 'react-slick'
import settings from '@no-code/testimonials/carousel/CarouselSettings'
import CarouselItem from '@no-code/testimonials/carousel/CarouselItem'
import { videoTestimonials } from '@no-code/common/constants'

const Carousel = () => (
    <Slider {...settings}>
        <CarouselItem
            r-for={(item, index) in videoTestimonials}
            item={item}
            key={index}
        />
    </Slider>
)

export default Carousel
