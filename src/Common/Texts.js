
export const Welcome = (
    <>
        <h2>1. W czym mogę pomóc?</h2>
        <h2>2. Jakiego numeru dotyczy sprawa?</h2>
        <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
    </>
)

export const QuestionAboutOwner = (
    <h3>CZY SPRAWA DOTYCZY NUMERU ZREJESTROWNEGO NA TĘ SAMĄ OSOBĘ, CO NUMER Z KTÓREGO DZWONI KLIENT?</h3>
)

export const NegativeVerification = (
    <h3 style={{ background: "#D8524E", padding: "5px", borderRadius: "15px", fontSize: "23px" }}>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
)

export const ThirdPartyContact = (
    <>
        <h3>KONTAKT OSOBY TRZECIEJ</h3>
        <h3>WYMAGANA WERYFIKACJA DODATKOWA</h3>
        <h3>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>
    </>
)

export const Verification_1 = (
    <h3>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, PESEL?</h3>
)

export const PositiveVerification = (
    <h3 style={{ border: "1px solid #69E294", padding: "15px", borderRadius: "15px", color: "#69E294", fontSize: "23px", textDecorationLine: "underline", background: "#146ac1", filter: "none" }}>IDENTYFIKACJA KLIENTA POZYTYWNA. Możesz realizować wszystkie dyspozycje klienta, poza tymi, które wymagają pisma klienta.</h3>
)

export const HardVerification_1 = (
    <h3>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, PESEL?</h3>
)

export const HardVerification_2 = (
    <><h3>W TAKIM RAZIE BĘDĄ TO WSZELKIE POZOSTAŁE FORMY PRAWNE (SPÓŁKI Z O.O., FUNDACJE, INSTYTUCJA PUBLICZNE ETC.)</h3>
        <h3>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, KOD PUK?</h3>
    </>
)

export const AddVer = (
    <>
        <h3>ROZMAWIASZ Z OSOBĄ TRZECIĄ</h3>
        <h3>PRZEPROWADŹ IDENTYFIKACJĘ DODATKOWĄ</h3>
        <h3>WYMAGANA JEDNA POPRAWNA ODPOWIEDŹ NA PYTANIA Z ZESTAWU</h3>
        <h3>MOŻESZ ZADAĆ MAKSYMALNIE 3 PYTANIA:</h3>
        <ul>
            <li>dane dotyczące abonamentu, usługi, płatności</li>
            <li>saldo konta</li><li>wysokość ostatniej faktury</li>
            <li>numer karty sim</li>
        </ul>
        <h3>Czy klient odpowiedział poprawnie?</h3>
    </>
)



