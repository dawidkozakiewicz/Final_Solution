import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import PersonOrSoleProprietorship from './FirstPerson/PersonOrSoleProprietorship'
import { QuestionAboutOwner } from './Common/Texts'

const CustomerKnowsTheOwner = () => {
    return (
        <div>
            <AnswerTemplate firsttext={QuestionAboutOwner} YesComponent={PersonOrSoleProprietorship} nocomponent={null} />
        </div>
    )
}

export default CustomerKnowsTheOwner