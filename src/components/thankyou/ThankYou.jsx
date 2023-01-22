import * as S from './styles'
import { useContext } from 'react'
import CNameContext from '../../contexts/CNameContext'
const ThankYou = () => {

    const {setIsConfirmed, setIsEmpty, setCvv, setMm, setYy, setCardName, setCardNumber} = useContext(CNameContext)

    const back = () => {
        setIsEmpty(true)
        setCvv()
        setMm()
        setYy()
        setCardName('')
        setCardNumber('')
        setIsConfirmed(false)
    }

    return(
        <S.Container>
            <img src="/images/icon-complete.svg" alt="Completed" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button onClick={back}>Continue</button>
        </S.Container>
    )
}

export default ThankYou