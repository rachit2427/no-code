import React from 'react'
import classNames from 'classnames'

const CarouselArrow = ({ className, style, onClick, next, prev }) => {
    return (
        <div
            className={classNames(className, 'custom-carousel-arrow', {
                next,
                prev,
            })}
            style={style}
            onClick={onClick}
        />
    )
}

export default CarouselArrow
