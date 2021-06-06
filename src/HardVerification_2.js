import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import QuestionAboutCase from './QuestionAboutCase'
import { Verification_2, PositiveVerification } from './Common/Texts'


const HardVerification_2 = () => {
    return (
        <AnswerTemplate firsttext={Verification_2} NoComponent={QuestionAboutCase} finishingtext={PositiveVerification} />
    )
}

export default HardVerification_2