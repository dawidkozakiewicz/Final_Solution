import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { DetVer, NegativeVerification, LimitedVerification } from '../Common/Texts'
import AdditionalVerification from './AdditionalVerification'

const Finish_2 = () => {
    return (
        <>
            {NegativeVerification}
        </>
    )
}

const ThirdPersonDetailedVerification = () => {
    return (
        <AnswerTemplate firsttext={DetVer} YesComponent={AdditionalVerification} NoComponent={Finish_2} />
    )
}

export default ThirdPersonDetailedVerification
