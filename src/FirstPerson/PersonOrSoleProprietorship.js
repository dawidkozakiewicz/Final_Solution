import React from 'react'
import AnswerTemplate from '../Common/AnswerTemplate'

const PersonOrSoleProprietorship = () => {
    return (
        <div>
            <AnswerTemplate firsttext={<h3>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>} YesComponent={null} NoComponent={null} />
        </div>
    )
}

export default PersonOrSoleProprietorship