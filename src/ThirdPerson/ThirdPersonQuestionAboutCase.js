import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { NegativeVerification, Case } from '../Common/Texts'
import ThirdPersonDetailedVerification from './ThirdPersonDetailedVerification'


const ThirdPersonQuestionAboutCase = () => {
    return (
        <AnswerTemplate firsttext={Case} YesComponent={ThirdPersonDetailedVerification} finishingtext={NegativeVerification} />
    )
}

export default ThirdPersonQuestionAboutCase