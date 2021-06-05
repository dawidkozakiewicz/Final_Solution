import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import { AddVer } from '../Common/Texts'



const AdditionalVerification = () => {
    return (
        <div>
            <AnswerTemplate firsttext={AddVer} YesComponent={null} NoComponent={null} />
        </div>
    )
}

export default AdditionalVerification