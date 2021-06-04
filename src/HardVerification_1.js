import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import QuestionAboutCase from './QuestionAboutCase'
import { Verification_1, PositiveVerification } from './Common/Texts'


const HardVerification_1 = () => {
    return (
        <AnswerTemplate firsttext={Verification_1} NoComponent={QuestionAboutCase} finishingtext={PositiveVerification} />
    )
}

export default HardVerification_1