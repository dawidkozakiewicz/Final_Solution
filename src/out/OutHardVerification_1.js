import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import OutDetailedVerification from './OutDetailedVerification'
import { Verification_1, PermitForAnAnnex } from '../Common/Texts'


const HardVerification_1 = () => {
    return (
        <AnswerTemplate firsttext={Verification_1} NoComponent={OutDetailedVerification} finishingtext={PermitForAnAnnex} />
    )
}

export default HardVerification_1