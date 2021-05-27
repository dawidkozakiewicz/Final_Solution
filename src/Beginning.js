import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { Welcome, NegativeVerification } from './Common/Texts'
import CustomerKnowsTheOwner from './CustomerKnowsTheOwner'
const Beginning = () => {
    return (
        <div>
            <AnswerTemplate firsttext={Welcome} YesComponent={CustomerKnowsTheOwner} finishingtext={NegativeVerification} />
        </div>
    )
}

export default Beginning