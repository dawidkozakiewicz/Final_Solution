import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { Welcome } from './Common/Texts'

const Beginning = () => {
    return (
        <div>
            <AnswerTemplate firsttext={Welcome} />
        </div>
    )
}

export default Beginning
