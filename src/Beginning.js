import React from 'react'
import AnswerTemplate from './Common/AnswerTemplate'
import { Welcome, NegativeVerification } from './Common/Texts'
import CustomerKnowsTheOwner from './CustomerKnowsTheOwner'
const Beginning = () => {
    return (
<<<<<<< HEAD
        <div>
            <AnswerTemplate firsttext={(
                <div>
                    <h2>1. W czym mogę pomóc?</h2>
                    <h2>2. Jakiego numeru dotyczy sprawa?</h2>
                    <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
                </div>)} YesComponent={CustomerKnowsTheOwner} finishingtext={NegativeVerification} />
        </div>
=======
        <>
            <AnswerTemplate firsttext={(<div>
                <h2>1. W czym mogę pomóc?</h2>
                <h2>2. Jakiego numeru dotyczy sprawa?</h2>
                <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
            </div>)} YesComponent={CustomerKnowsTheOwner} finishingtext={ <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>} />
        </>
>>>>>>> 133edfe52e5c1fb3e41a7c3ab0786049038fd06a
    )
}

export default Beginning
