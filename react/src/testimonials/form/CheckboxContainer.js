import React from 'react'

const CheckboxContainer = ({ question }) => (
    <div className="checkbox-container">
        <label className="checkbox-wrapper">
            <input type="checkbox" className="checkbox-input" />
            <span className="svg-container">
                <svg>
                    <use xlinkHref="#testimonial-form-check" />
                </svg>
            </span>
            <span className="text">{question}</span>
        </label>
    </div>
)

export default CheckboxContainer
