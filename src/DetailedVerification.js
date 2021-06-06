import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { DetVer, NegativeVerification, LimitedVerification } from './Common/Texts'

const Finish_1 = () => {
    return (
        <>
            {LimitedVerification}
        </>
    )
}

const Finish_2 = () => {
    return (
        <>
            {NegativeVerification}
        </>
    )
}

const DetailedVerification = () => {
    return (
        <AnswerTemplate firsttext={DetVer} YesComponent={Finish_1} NoComponent={Finish_2} />
    )
}

export default DetailedVerification