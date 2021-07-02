import React from 'react'

const CarouselItem = ({ item }) => (
    <div className="carousel-item-container">
        <div className="embed-container">
            <iframe
                className="embed-video"
                src={item}
                frameBorder="0"
                title="Youtube Embed Videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    </div>
)

export default CarouselItem
