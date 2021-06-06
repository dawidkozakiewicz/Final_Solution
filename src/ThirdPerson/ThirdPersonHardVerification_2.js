import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { Verification_2 } from '../Common/Texts'
import AdditionalVerificationn from './AdditionalVerification'
import ThirdPersonQuestionAboutCase from './ThirdPersonQuestionAboutCase'

const ThirdPersonHardVerification_1 = () => {
    return (
        <div>
            <AnswerTemplate firsttext={Verification_2} YesComponent={AdditionalVerificationn} NoComponent={ThirdPersonQuestionAboutCase} />
        </div>
    )
}

export default ThirdPersonHardVerification_1