import React from 'react'

import IntroGrid from '@no-code/main-section/IntroGrid'

const MainSection = () => (
    <section className="main-section">
        <div className="content-padding">
            <h1 className="heading">
                Build Mobile Apps Without Writing a Single Line of Code in{' '}
                <span className="gradient-text">2 Days (All Live)</span>
            </h1>
            <h3 className="sub-heading">
                India’s first-ever{' '}
                <span className="gradient-text">
                    No-Code mobile app development workshop
                </span>{' '}
                for all the makers and creators.
            </h3>
            <IntroGrid />
        </div>
    </section>
)

export default MainSection
