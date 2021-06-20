import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { DetVer, NegativeVerification, LimitedVerification, PermitForAnAnnex } from '../Common/Texts'
import ProhibitionOfAnnex from './ProhibitionOfTheAnnex'

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
        <AnswerTemplate firsttext={DetVer} finishingtext={PermitForAnAnnex} NoComponent={ProhibitionOfAnnex} />
    )
}

export default DetailedVerification