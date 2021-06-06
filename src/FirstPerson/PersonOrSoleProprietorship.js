import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'
import HardVerification_1 from '../HardVerification_1'
import HardVerification_2 from '../HardVerification_2'

const PersonOrSoleProprietorship = () => {
    return (
        <div>
            <AnswerTemplate firsttext={<h3>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>} YesComponent={HardVerification_1} NoComponent={HardVerification_2} />
        </div>
    )
}

export default PersonOrSoleProprietorship