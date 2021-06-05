import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { HardVerification_2 } from '../Common/Texts'
import AdditionalVerificationn from './AdditionalVerification'

const ThirdPersonHardVerification_1 = () => {
    return (
        <div>
            <AnswerTemplate firsttext={HardVerification_2} YesComponent={AdditionalVerificationn} NoComponent={null} />
        </div>
    )
}

export default ThirdPersonHardVerification_1