import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import PersonOrSoleProprietorship from './FirstPerson/PersonOrSoleProprietorship'
import { QuestionAboutOwner } from './Common/Texts'
import ThirdPersonCalls from './ThirdPerson/ThirdPersonCalls'

const CustomerKnowsTheOwner = () => {
    return (
        <div>
            <AnswerTemplate firsttext={QuestionAboutOwner} YesComponent={PersonOrSoleProprietorship} NoComponent={ThirdPersonCalls} />
        </div>
    )
}

export default CustomerKnowsTheOwner