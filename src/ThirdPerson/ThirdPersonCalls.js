import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { ThirdPartyContact } from '../Common/Texts'
import ThirdPersonHardVerification_1 from './ThirdPersonHardVerification_1'
import ThirdPersonHardVerification_2 from './ThirdPersonHardVerification_2'


const ThirdPersonCalls = () => {
    return (
        <div>
            <AnswerTemplate firsttext={ThirdPartyContact} YesComponent={ThirdPersonHardVerification_1} NoComponent={ThirdPersonHardVerification_2} />
        </div>
    )
}

export default ThirdPersonCalls