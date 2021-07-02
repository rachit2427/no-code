import React from 'react'
import Card from '@no-code/common/components/Card'
import AnimatedGradientBox from '@no-code/common/components/AnimatedGradientBox'

const Benefits = () => {
    const items = [
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd2bbe0b3e62_ebook-icon.svg',
            title: 'Free No-Code Ebook',
            description:
                'Get a comprehensive eBook on how to start with building Apps, Websites, Games & more - without Code.',
            price: 3000,
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd810b0b3e64_template-icon.svg',
            title: 'Ready to Use Mobile App Template',
            description: 'FREE Mobile App Template for your next Startup Idea.',
            price: 5000,
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd23b00b3e5e_designer-icon.svg',
            title: 'Build Landing Page in 30 Mins',
            description:
                'Learn how to build a full landing page without code within 30 minutes.',
            price: 4000,
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd640d0b3e63_locked-bonus-icon.svg',
            title: 'Premium No-Code Community Access',
            description:
                'This is an exclusive bonus for those who successfully complete the workshop. Connect with thousands of No-Coders to learn, interact and collaborate with.',
            price: 3000,
        },
    ]

    return (
        <section id="benefits" className="benefits">
            <div className="content-padding">
                <h3 className="section-heading">
                    Unlock bonuses worth <span>₹15,000</span>
                </h3>
                <div className="cards-container">
                    <div
                        className="card-wrapper"
                        r-for={(item, idx) in items}
                        key={idx}
                    >
                        <Card
                            image={item.img}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    </div>
                </div>
                <AnimatedGradientBox />
            </div>
        </section>
    )
}

export default Benefits
