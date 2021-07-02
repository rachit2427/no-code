import React, { useEffect } from 'react'
import smoothScroll from 'smoothscroll-polyfill'

import CheckmarkSVG from '@no-code/common/components/CheckmarkSVG'
import Header from '@no-code/header/Header'
import MainSection from '@no-code/main-section/MainSection'
import Testimonials from '@no-code/testimonials/Testimonials'
import WhoIsThisFor from '@no-code/who-is-this-for/WhoIsThisFor'
import WhyNoCode from '@no-code/why-no-code/WhyNoCode'
import Benefits from '@no-code/benefits/Benefits'
import WhatWillYouBuild from '@no-code/what-will-you-build/WhatWillYouBuild'
import StudentSpeaks from '@no-code/student-speaks/StudentSpeaks'
import Features from '@no-code/features/Features'
import Footer from '@no-code/footer/Footer'

const App = () => {
    useEffect(() => {
        smoothScroll.polyfill()
    }, [])

    return (
        <>
            <CheckmarkSVG />
            <Header />
            <MainSection />
            <Testimonials />
            <WhoIsThisFor />
            <WhyNoCode />
            <Benefits />
            <WhatWillYouBuild />
            <StudentSpeaks />
            <Features />
            <Footer />
        </>
    )
}

export default App
