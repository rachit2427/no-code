import React from 'react'

const AnimatedGradientBox = ({ small = false }) => (
    <div className="animated-gradient-box">
        <button className="animated-gradient-button">
            <h3 className="btn-title" r-if={!small}>
                Register for No-Code Kickstarter Workshop for just ₹499{' '}
                <span className="strike-through">₹1999</span>
            </h3>
            <h3 className="btn-title" r-else>
                Register Now for just ₹499{' '}
                <span className="strike-through">₹1999</span>
            </h3>
            <div className="btn-subtitle" r-if={!small}>
                Learn from the comfort of your home
            </div>
        </button>
    </div>
)

export default AnimatedGradientBox
