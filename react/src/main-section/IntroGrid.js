import React from 'react'

import RegisterContainer from '@no-code/main-section/RegisterContainer'
import LiveSessions from '@no-code/main-section/LiveSessions'
import HandsOnExperience from '@no-code/main-section/HandsOnExperience'
import OurStudents from '@no-code/main-section/OurStudents'
import VideoContainer from '@no-code/main-section/VideoContainer'

const IntroGrid = () => (
    <div className="intro-grid-container">
        <LiveSessions />
        <HandsOnExperience />
        <OurStudents />
        <VideoContainer />
        <RegisterContainer />
    </div>
)

export default IntroGrid
