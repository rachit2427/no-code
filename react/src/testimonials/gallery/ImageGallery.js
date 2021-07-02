import React from 'react'
import GalleryItem from '@no-code/testimonials/gallery/GalleryItem'

const ImageGallery = () => {
    const images = [
        'https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/60059b568efbb46bd0f0abea_tanishs-feedback.png',
        'https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/60059b6368716c083a07b123_namitas-feedback.png',
        'https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/60059b733c9a4b24454937d7_akhilesh-feedback.png',
    ]

    return (
        <div className="image-gallery">
            <div className="image-gallery-wrapper">
                <GalleryItem
                    r-for={(image, index) in images}
                    image={image}
                    key={index}
                />
            </div>
        </div>
    )
}

export default ImageGallery
