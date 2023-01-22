import * as S from './styles'
import { useContext, useState } from 'react'
import CNameContext from '../../contexts/CNameContext'
export const Form = () => {

    const { cardName, setCardName, cardNumber, setCardNumber, cvv, setCvv, mm, setMm, yy, setYy, setIsConfirmed, isEmpty, setIsEmpty } = useContext(CNameContext)

    const [isEmptyNumber, setIsEmptyNumber] = useState(false)
    const [isEmptyMM, setIsEmptyMM] = useState(false)
    const [isEmptyYY, setIsEmptyYY] = useState(false)
    const [isEmptyCVV, setIsEmptyCVV] = useState(false)

    const date = new Date()
    const year = new Date().getFullYear().toString().slice(-2)
    let month = date.getMonth()




    const handleCVVChecker = (e) => {
        if (e.target.value > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    const handleMMChecker = (e) => {
        if (e.target.value > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    const handleYYChecker = (e) => {
        if (e.target.value > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    const handleNumberCardChecker = (e) => {
        if (e.target.value > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    const handleKeyChecker = (e) =>{
        if(((e.keyCode < 48) || (e.keyCode > 57))&& e.keyCode != 8){
            e.preventDefault()
        }
    }

    const handleConfirm = () => {
        cardName ? setIsEmpty(false) : setIsEmpty(true)
        if (cardName){
            cardName.length < 12 ? setIsEmpty(true) : setIsEmpty(false)
        }
        cardNumber ? setIsEmptyNumber(false) : setIsEmptyNumber(true)
        if (cardNumber) {
            cardNumber.length < 19 ? setIsEmptyNumber(true) : setIsEmptyNumber(false)
            
        }
        cvv ? setIsEmptyCVV(false) : setIsEmptyCVV(true)
        if (cvv){
            cvv.length < 3 ? setIsEmptyCVV(true) : setIsEmptyCVV(false)
        }
        yy ? setIsEmptyYY(false) : setIsEmptyYY(true)
        if (yy){
            yy.length < 2 ? setIsEmptyYY(true) : setIsEmptyYY(false)
            yy < 23 ? setIsEmptyYY(true) : setIsEmptyYY(false)
        }
        mm ? setIsEmptyMM(false) : setIsEmptyMM(true)
        if (mm){
            mm.length < 2 ? setIsEmptyMM(true) : setIsEmptyMM(false)
            mm > 12 ? setIsEmptyMM(true) : setIsEmptyMM(false)
            if (Number(mm) == month + 1 && yy == year){
                setIsEmptyMM(true)
            } else{
                setIsEmptyMM(false)
            }
        }
        if (!isEmpty && !isEmptyCVV && !isEmptyMM && !isEmptyYY && !isEmptyNumber){
            setIsConfirmed(true)
        }
    }
    return (
        <S.Form>
            <label htmlFor="cardName">CARDHOLDER NAME</label>
            <input value={cardName} type="text" spellCheck={false} name="cardName" id="cardName" className={isEmpty ? 'empty' : 'fill'} placeholder="e.g. Jane Appleseed" onChange={(e) => setCardName(e.target.value)} />
            <label htmlFor="cardName">CARD NUMBER</label>
            <input value={cardNumber.replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()} onInput={handleNumberCardChecker} onKeyDown={handleKeyChecker} type="text" name="cardNumber" className={isEmptyNumber ? 'empty' : 'fill'} id="cardNumber"  maxLength={19} placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => setCardNumber(e.target.value)}/>
            <S.expAndCVV>
                <S.ExpirationDate>
                    <p>EXP. DATE (MM/YY)</p>
                    <S.ExpirationDateInputs>
                        <input value={mm} className={isEmptyMM ? 'empty' : 'fill'} onInput={handleMMChecker} onChange={(e) => setMm(e.target.value)} type="number" name="month" id="month" placeholder='MM' maxLength={2} />
                        <input value={yy} className={isEmptyYY ? 'empty' : 'fill'} onChange={(e) => setYy(e.target.value)} onInput={handleYYChecker} type="number" name="year" id="year" placeholder='YY' maxLength={2} />
                    </S.ExpirationDateInputs>
                </S.ExpirationDate>
                <S.CVV>
                    <label htmlFor="CVVNumber">CVV</label>
                    <input value={cvv} onInput={handleCVVChecker} type="number" name="CVVNumber" id="CVVNumber" className={isEmptyCVV ? 'empty' : 'fill'} placeholder="e.g. 123" maxLength={3} onChange={(e) => setCvv(e.target.value)}/>
                </S.CVV>
            </S.expAndCVV>
            <button onClick={handleConfirm}>CONFIRM</button>

        </S.Form>
    )
}