import React from 'react'
import { videoTestimonials } from '@no-code/common/constants'

const StudentSpeaks = () => (
    <section id="student-speaks" className="student-speaks">
        <div className="content-padding">
            <h3 className="section-heading">
                Our students solve <span>real world problems</span>
            </h3>
            <div className="testimonials-container">
                <div
                    className="testimonials-wrapper"
                    r-for={(item, idx) in videoTestimonials}
                    key={idx}
                >
                    <div className="embed-container">
                        <iframe
                            className="embed-video"
                            src={item}
                            frameBorder="0"
                            title="Youtube Embed Videos"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default StudentSpeaks
