import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import HardVerification_1 from '../HardVerification_1'

const PersonOrSoleProprietorship = () => {
    return (
        <div>
            <AnswerTemplate firsttext={<h3>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>} YesComponent={HardVerification_1} NoComponent={null} />
        </div>
    )
}

export default PersonOrSoleProprietorship