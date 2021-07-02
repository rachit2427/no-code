import React from 'react'
import Adobe from '@no-code/main-section/company/Adobe'
import Google from '@no-code/main-section/company/Google'
import IBM from '@no-code/main-section/company/IBM'
import HealthKart from '@no-code/main-section/company/HealthKart'
import Internshala from '@no-code/main-section/company/Internshala'
import Amazon from '@no-code/main-section/company/Amazon'

const OurStudents = () => {
    const items = []

    return (
        <div className="our-students">
            <div className="title">Our students have worked with</div>
            <div className="company-grid-container">
                <div className="company-grid-item">
                    <Adobe />
                </div>
                <div className="company-grid-item">
                    <Google />
                </div>
                <div className="company-grid-item">
                    <IBM />
                </div>
                <div className="company-grid-item">
                    <HealthKart />
                </div>
                <div className="company-grid-item">
                    <Internshala />
                </div>
                <div className="company-grid-item">
                    <Amazon />
                </div>
            </div>
        </div>
    )
}

export default OurStudents
