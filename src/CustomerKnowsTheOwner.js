import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { QuestionAboutOwner } from './Common/Texts'

const Beginning = () => {
    return (
        <div>
            <AnswerTemplate firsttext={QuestionAboutOwner} yescomponent={null} nocomponent={null} />
        </div>
    )
}

export default Beginning