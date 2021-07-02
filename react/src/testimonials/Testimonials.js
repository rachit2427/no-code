import React from 'react'

import Carousel from '@no-code/testimonials/carousel/Carousel'
import ImageGallery from '@no-code/testimonials/gallery/ImageGallery'
import Form from '@no-code/testimonials/form/Form'

const Testimonials = () => (
    <section id="testimonials" className="testimonials">
        <div className="content-padding">
            <Carousel />
            <ImageGallery />
            <Form />
        </div>
    </section>
)

export default Testimonials
