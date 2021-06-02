import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { Welcome, NegativeVerification } from './Common/Texts'
import CustomerKnowsTheOwner from './CustomerKnowsTheOwner'
const Beginning = () => {
    return (
        <div>
            <AnswerTemplate firsttext={(
                <div>
                    <h2>1. W czym mogę pomóc?</h2>
                    <h2>2. Jakiego numeru dotyczy sprawa?</h2>
                    <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
                </div>)} YesComponent={CustomerKnowsTheOwner} finishingtext={NegativeVerification} />
        </div>
    )
}

export default Beginning
