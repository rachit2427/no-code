import React from 'react'
import Card from '@no-code/common/components/Card'

const WhoIsThisFor = () => {
    const items = [
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd23b00b3e5e_designer-icon.svg',
            title: 'Designers',
            description:
                'Go beyond the UI prototypes and actually build a working model of your design. Be a complete package.',
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd869a0b3e5d_entrepreneurs-icon.svg',
            title: 'Entrepreneurs',
            description:
                'Test your ideas on a smaller scale by launching prototypes fast. Expand and invest on what the customers pay for.',
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd633a0b3e60_freelancer-icon.svg',
            title: 'Freelancers',
            description:
                'Increase your service offerings. Execute projects much faster. Attract high-ticket clients.',
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd46790b3e5f_digital-marketer-icon.svg',
            title: 'Digital Marketers',
            description:
                'Utilise advanced analytics to track user activity and manage funnels. Collect critical data without the need to write complex scripts from scratch.',
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbdffef0b3e61_small-business-icon.svg',
            title: 'Small Businesses',
            description:
                'Selling online has never been easier and more accessible. Take your business to the internet and let the whole world buy from you.',
        },
        {
            img: 'https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/6001f6c25b0fbd4b600b3e5c_developer-icon.svg',
            title: 'Developers',
            description:
                'Why spend months to build software, when you can use a No-Code tool to quickly build a product and write code only to enhance its capabilities even further. Save time and effort dummy!',
        },
    ]

    return (
        <section id="who-is-this-for" className="who-is-this-for">
            <div className="content-padding">
                <h3 className="section-heading">Who is this workshop for?</h3>
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
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoIsThisFor
