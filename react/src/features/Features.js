import React from 'react'
import FeatureLeft from '@no-code/features/FeatureLeft'
import FeatureRight from '@no-code/features/FeatureRight'

const Features = () => (
    <section id="features" className="features">
        <div className="content-padding">
            <div className="features-container">
                <div className="feature-wrapper">
                    <FeatureLeft />
                </div>
                <div className="feature-wrapper">
                    <FeatureRight />
                </div>
            </div>
        </div>
    </section>
)

export default Features
