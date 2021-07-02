import React from 'react'
import ItemCard from '@no-code/what-will-you-build/ItemCard'
import AnimatedGradientBox from '@no-code/common/components/AnimatedGradientBox'

const WhatWillYouBuild = () => {
    const items = [
        {
            title: 'eCommerce apps',
            description:
                'Build a marketplace platform like Amazon & Flipkart - without code. Take your business to the world.',
            brand: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd6cc40b3e6a_amazon%20logo.svg',
            screenshot:
                'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbdef0b0b3e54_e-commerce-app.png',
        },
        {
            title: 'Ed-Tech Platforms',
            description:
                "Have a skill that you'd like to share with the world and earn money? Create a mobile app and teach whatever you want.",
            brand: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd14a90b3e68_unacademy-logo.svg',
            screenshot:
                'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd37a00b3e58_ed-tech-app.png',
        },
        {
            title: 'Social media apps',
            description:
                'Create a social media platform and manage your own community, your own way.',
            brand: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd4b560b3e69_instagram-logo.svg',
            screenshot:
                'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd0f590b3e5a_social-media-app.png',
        },
        {
            title: 'CRMs',
            description:
                'Build a scalable marketplace platform like Amazon & Flipkart - without code.',
            brand: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd08610b3e6b_salesforce-logo.svg',
            screenshot:
                'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd3d450b3e56_crm-app.png',
        },
    ]

    return (
        <section className="what-will-you-build" id="what-will-you-build">
            <div className="content-padding">
                <h3 className="section-heading">
                    What you can build after this workshop
                </h3>
                <div className="cards-container">
                    <div
                        className="card-wrapper"
                        r-for={(item, idx) in items}
                        key={idx}
                    >
                        <ItemCard
                            title={item.title}
                            description={item.description}
                            brand={item.brand}
                            screenshot={item.screenshot}
                        />
                    </div>
                </div>
                <AnimatedGradientBox />
            </div>
        </section>
    )
}

export default WhatWillYouBuild
