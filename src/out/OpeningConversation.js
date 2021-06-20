import AnswerTemplate from '../Common/AnswerTemplate'
import OutHardVerification_1 from './OutHardVerification_1'
import OutHardVerification_2 from './OutHardVerification_2'


const OpeningConversation = () => {
    return (
        <div>
            <h1>WYCHODZĄCE</h1>

            <AnswerTemplate firsttext={
                (<>
                    <h2>1. Poinformuj o nagrywaniu rozmowy.</h2>
                    <h2>2. Potwierdź, że rozmawiasz z właścicielem numeru, ("czy rozmawiam z panem Janem Kowalskim?") albo czy rozmówca wie, kto jest właścicielem numeru. Jeśli jedna z odpowiedzi jest pozytywna, mozesz kontunuować i zadać pytanie:</h2>
                    <h2>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h2>
                </>)
            } YesComponent={OutHardVerification_1} NoComponent={OutHardVerification_2} />

        </div>
    )
}

export default OpeningConversation