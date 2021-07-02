import React from 'react'

const ItemCard = ({ title, description, brand, screenshot }) => (
    <div className="item-card">
        <div className="screenshot-container">
            <img src={screenshot} alt="title" />
        </div>
        <div className="content-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="brand">
                <img src={brand} alt={title} />
            </div>
        </div>
    </div>
)

export default ItemCard
