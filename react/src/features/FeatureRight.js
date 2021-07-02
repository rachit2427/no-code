import React from 'react'
import CheckmarkBulletPoint from '@no-code/common/components/CheckmarkBulletPoint'

const FeatureRight = () => {
    const items = [
        'Hands-on approach to building a mobile app without writing a single line of code',
        'You will be able to attract better clients, who pay for the value and not for the hours.',
        'Become a Swiss Army Knife, and bag higher paying jobs.',
        'Be an independent professional.',
    ]

    return (
        <div className="feature feature-right">
            <div className="title">What will you get</div>
            <div className="checkmark-bullet-container">
                <CheckmarkBulletPoint
                    r-for={(item, idx) in items}
                    key={idx}
                    item={item}
                />
            </div>
        </div>
    )
}

export default FeatureRight
