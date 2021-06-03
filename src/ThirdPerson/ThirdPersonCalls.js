import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { ThirdPartyContact } from '../Common/Texts'

const ThirdPersonCalls = () => {
    return (
        <div>
            <AnswerTemplate firsttext={ThirdPartyContact} YesComponent={null} NoComponent={null} />
        </div>
    )
}

export default ThirdPersonCalls