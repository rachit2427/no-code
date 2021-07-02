import React from 'react'

const CheckmarkBulletPoint = ({ item }) => (
    <div className="checkmark-bullet-points">
        <div className="checkmark-container">
            <svg>
                <use xlinkHref="#testimonial-form-check" />
            </svg>
        </div>
        <div className="content-container">{item}</div>
    </div>
)

export default CheckmarkBulletPoint
