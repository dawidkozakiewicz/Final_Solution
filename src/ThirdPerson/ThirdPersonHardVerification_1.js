import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { HardVerification_1 } from '../Common/Texts'
import AdditionalVerification from './AdditionalVerification'


const ThirdPersonHardVerification_1 = () => {
    return (
        <div>
            <AnswerTemplate firsttext={HardVerification_1} YesComponent={AdditionalVerification} NoComponent={null} />
        </div>
    )
}

export default ThirdPersonHardVerification_1