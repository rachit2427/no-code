import React from 'react'
import CheckmarkBulletPoint from '@no-code/common/components/CheckmarkBulletPoint'

const WhyNoCode = () => {
    const items = [
        'Hands-on approach to building a mobile app without writing a single line of code',
        'Methodological approach towards building No-Code apps in 50% less time.',
        'You will be able to attract better clients, who pay for the value and not for the hours.',
        'Become a Swiss Army Knife, and bag higher paying jobs.',
        'Be an independent professional.',
        'You will be able to advice your clients on No-Code.',
    ]

    return (
        <section id="why-no-code" className="why-no-code">
            <div className="content-padding">
                <h3 className="section-heading">Why No-Code?</h3>
                <div className="why-container">
                    <CheckmarkBulletPoint
                        r-for={(item, idx) in items}
                        key={idx}
                        item={item}
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyNoCode
