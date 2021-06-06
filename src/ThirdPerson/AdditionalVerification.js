import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { AddVer, LimitedVerification, NegativeVerification } from '../Common/Texts'

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

const AdditionalVerification = () => {
    return (
        <div>
            <AnswerTemplate firsttext={AddVer} YesComponent={Finish_1} NoComponent={Finish_2} />
        </div>
    )
}

export default AdditionalVerification