import React from 'react'
import AnimatedGradientBox from '@no-code/common/components/AnimatedGradientBox'

const FeatureLeft = () => (
    <div className="feature feature-left">
        <div className="title">
            Join the <span>No-Code Kickstarter Workshop</span>
        </div>
        <div className="amount">
            ₹499 <span className="strike-through">₹1999</span>
        </div>
        <div className="start-date">
            Starts June 19th, Saturday at comfort of your home
        </div>
        <div className="bonus">
            💥 Unlock bonuses worth <strong>₹15,000</strong>
        </div>
        <AnimatedGradientBox small />
    </div>
)

export default FeatureLeft
