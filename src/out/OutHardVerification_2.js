import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import OutDetailedVerification from './OutDetailedVerification'
import { Verification_2, PermitForAnAnnex } from '../Common/Texts'


const HardVerification_1 = () => {
    return (
        <AnswerTemplate firsttext={Verification_2} NoComponent={OutDetailedVerification} finishingtext={PermitForAnAnnex} />
    )
}

export default HardVerification_1