import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { Verification_1 } from '../Common/Texts'
import AdditionalVerification from './AdditionalVerification'
import ThirdPersonQuestionAboutCase from './ThirdPersonQuestionAboutCase'



const ThirdPersonHardVerification_1 = () => {
    return (
        <div>
            <AnswerTemplate firsttext={Verification_1} YesComponent={AdditionalVerification} NoComponent={ThirdPersonQuestionAboutCase} />
        </div>
    )
}

export default ThirdPersonHardVerification_1