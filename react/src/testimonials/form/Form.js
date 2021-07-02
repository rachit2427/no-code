import React from 'react'

import CheckboxContainer from '@no-code/testimonials/form/CheckboxContainer'
import AnimatedGradientBox from '@no-code/common/components/AnimatedGradientBox'

const Form = () => {
    const questions = [
        'Do you have a start-up idea, but don’t have the budgets to fund the development?',
        'Do you feel like you need to create a parallel income stream along with your job?',
        'Do you want to build your solutions at a low cost with fewer bugs?',
        'Do you want develop custom software in a matter of weeks instead of months... or years?',
        'Do you want to build your solutions for a fraction of the cost with lower project creep and bugs?',
        'Most importantly, do you think you can build software only if you know how to code?',
    ]

    return (
        <>
            <div className="form-container">
                <h3 className="form-heading">
                    Please Check All Boxes
                    <br />
                    Where Your Answer is YES!
                </h3>
                <div className="checkboxes-container">
                    <CheckboxContainer
                        r-for={(question, index) in questions}
                        question={question}
                        key={index}
                    />
                </div>
                <div className="form-conclusion">
                    <h4 className="conclusion">
                        If you checked ANY of the boxes above, then I want to
                        invite you to join
                        <br />
                        <span className="gradient-text">
                            No-Code Kickstarter Workshop
                        </span>{' '}
                        😄
                    </h4>
                    <AnimatedGradientBox />
                </div>
            </div>
        </>
    )
}

export default Form
