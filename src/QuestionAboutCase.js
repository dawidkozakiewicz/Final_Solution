import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { NegativeVerification, Case } from './Common/Texts'
import DetailedVerification from './DetailedVerification'


const QuestionAboutCase = () => {
    return (
        <AnswerTemplate firsttext={Case} YesComponent={DetailedVerification} finishingtext={NegativeVerification} />
    )
}

export default QuestionAboutCase