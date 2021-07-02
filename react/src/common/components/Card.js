import React from 'react'

const Card = ({ image, title, description, price }) => (
    <div className="card">
        <div className="title-and-image-container">
            <div className="image-container" r-if={image}>
                <div className="image-wrapper">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="title-container">{title}</div>
        </div>
        <div className="description-container">{description}</div>
        <div className="price-container" r-if={price}>
            ₹{price}
        </div>
    </div>
)

export default Card
